import axios from 'axios';
import { Player } from './player';
import { Point } from './point';
import * as moment from 'moment';
import { PlanetNames } from './planets';

let client = axios.create();

export const API_configApiSettings = (
  baseURL: string,
  authToken: string,
  timeout = 5000
) => {
  axios.defaults.baseURL = baseURL;
  axios.defaults.timeout = timeout;
  axios.defaults.headers.common['Authorization'] = authToken;
  client = axios.create();
};
export const API_getAllPlayers = async (
  thisPlayerId: number,
  circleId: number
): Promise<Player[]> => {
  const response = await client.get(`/players/${thisPlayerId}/circles`);
  const playerData = response.data as {
    id: number;
    name: string;
    creator: { id: number }; // the creator's player id
    memberships: {
      id: number;
      player: {
        id: number;
        user: {
          firstName: PlanetNames;
          lastName: 'left' | 'right';
        };
      };
    }[];
  }[];
  const players = [] as Player[];
  for (const circle of playerData) {
    if (circle.id !== circleId) continue;
    const creatorId = circle.creator.id;
    for (const membership of circle.memberships) {
      if (membership.player.id === creatorId) continue;
      const player = new Player({
        playerId: membership.player.id,
        planetName: membership.player.user.firstName,
        side: membership.player.user.lastName,
      });
      players.push(player);
    }
  }
  return players;
};
type Challenge = { challengeId: number; startDate: Date; playerIds: number[] };
export const API_getChallenge = async (
  thisPlayerId: number,
  challengeId: number
): Promise<Challenge> => {
  const response = await client.get(`/players/${thisPlayerId}/challenges/`);
  const challengeData = response.data as {
    id: number;
    name: string;
    startDate: number;
    participations: { circle: { memberships: { player: { id: number } }[] } }[];
  }[];
  const challenge = challengeData.find((c) => c.id === challengeId);
  if (!challenge) throw new Error('Challenge not found');
  const playerIds = challenge.participations.map(
    (p) => p.circle.memberships[0].player.id
  );
  return {
    challengeId: challenge.id,
    startDate: new Date(challenge.startDate),
    playerIds,
  };
};

type ActivityType = {
  id: number;
  date: number;
  player: { id: number };
  gameDescriptor: {
    translationKey: string | 'WALK';
  };
  personalPoints?: {
    value: number;
    participation: {
      challenge: { id: number };
      circle: { id: number }; // the circle id seems means personal circle not challenge circle, skip validation
    };
  }[];
};

export const API_getPoints = async (
  thisPlayerId: number,
  circleId: number,
  challengeId: number,
  playerIds: number[],
  startDate: Date,
  endDate: Date
) => {
  // Initialize result
  const result = [] as {
    playerId: number;
    points: Point[];
  }[];
  for (const playerId of playerIds) {
    const date = moment(startDate);
    const points = [] as Point[];
    while (true) {
      if (date.isAfter(endDate)) break;
      points.push(new Point({ date: date.toDate(), value: 0 }));
      date.add(1, 'day');
    }
    result.push({
      playerId,
      points: points,
    });
  }
  // Get and filter activities
  const response = await client.get(
    `/players/${thisPlayerId}/circles-activities`
  );
  const activitiesData = response.data as ActivityType[];
  activitiesData
    .filter((activity) => {
      if (playerIds.indexOf(activity.player.id) < 0) return false;
      if (activity.personalPoints === undefined) return false;
      return activity.gameDescriptor.translationKey === 'WALK';
    })
    .map((activity) => {
      activity.personalPoints = activity.personalPoints?.filter(
        (personalPoint) => {
          if (personalPoint.participation.challenge.id !== challengeId)
            return false;
          // the circle id seems means personal circle not challenge circle, skip validation
          // if (personalPoint.participation.circle.id !== circleId) return false;
          return true;
        }
      );
      return activity;
    })
    .map((activity) => {
      let value = 0;
      for (const point of activity.personalPoints!) {
        value += point.value;
      }
      return {
        id: activity.player.id,
        value,
        date: new Date(activity.date),
      };
    })
    .forEach((point) => {
      const resItem = result.find((p) => p.playerId === point.id)!;
      const index = resItem.points.findIndex((p) => {
        return moment(p.date).isSame(point.date, 'date');
      });
      if (index !== -1) {
        resItem.points[index].value += point.value;
      }
    });
  return result;
};
