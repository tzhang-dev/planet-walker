import axios from 'axios';
import { Player } from './player';
import { Point } from './point';
import * as moment from 'moment';
import { PlanetNames } from './planets';
import {data as expData} from './data';

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
  const players = [] as Player[];
  for (const player of expData.players) {
    const newPlayer = new Player({playerId: player.id, planetName: player.planet, side: player.side});
    players.push(newPlayer);
  }
  return players;
};
type Challenge = { challengeId: number; startDate: Date; playerIds: number[] };
export const API_getChallenge = async (
  thisPlayerId: number,
  challengeId: number
): Promise<Challenge> => {
  return {
    challengeId: 1,
    startDate: new Date(expData.startDate),
    playerIds: expData.players.map((player) => player.id),
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
  dates: Date[]
) => {
  // Initialize result
  const result = [] as {
    playerId: number;
    points: Point[];
  }[];
  for (const playerId of playerIds) {
    const points = [] as Point[];
    dates.forEach((date) => {
      const tmp: Date = JSON.parse(JSON.stringify(date));
      points.push(new Point({ date: tmp, value: 0 }));
    });
    result.push({
      playerId,
      points: points,
    });
  }
  for (const [dateString, points] of Object.entries(expData.points)) {
    const date = moment(dateString);
    console.log(date);
    points.forEach((point) => {
      const resItem = result.find((p) => p.playerId === point.id)!;
      const index = resItem.points.findIndex((p) => {
        return moment(p.date).isSame(date, 'date');
      });
      if (index !== -1) {
        resItem.points[index].value += point.value;
      }
    });
  }
  return result;
};
