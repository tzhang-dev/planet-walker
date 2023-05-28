import { API_CONFIG } from '../../../environments/environment';

// TODO: api implements

import axios from 'axios';
import { Player } from './player';
import { Point } from './point';
import * as moment from 'moment';

axios.defaults.baseURL = API_CONFIG.baseUrl;
axios.defaults.headers.common['Authorization'] = API_CONFIG.authentication;
axios.defaults.timeout = 5000;
const client = axios.create();
export const API_getPlayer = async (playerId: number): Promise<Player> => {
  const response = await client.get(`/players/${playerId}`);
  const playerData = response.data as {
    id: number;
    user: {
      email: string;
      firstName: string;
      lastName: string;
    };
  };
  const player = new Player({ player_id: playerData.id });
  // TODO: get planet and side, fake now
  player.side = 'left';
  player.planet_name = 'mars';
  // End fake
  return player;
};
type Challenge = { challengeId: number; startDate: Date; playerIds: number[] };
export const API_getChallenge = async (
  playerId: number
): Promise<Challenge> => {
  const response = await client.get(`/players/${playerId}/challenges/`);
  const challengeData = response.data as {
    id: number;
    name: string;
    startDate: number;
    participations: { id: number }[];
  }[];
  const challenge = challengeData[challengeData.length - 1];
  const playerIds = challenge.participations.map((p) => p.id);
  console.log(new Date(challenge.startDate));
  return {
    challengeId: challenge.id,
    startDate: new Date(challenge.startDate),
    playerIds,
  };
};

const API_getPoints = async (
  playerId: number,
  startDate: Date,
  endDate: Date
): Promise<Point[]> => {
  const startDateString = moment(startDate).format('DD-MM-YYYY');
  const endDateString = moment(endDate).format('DD-MM-YYYY');
  const response = await client.get(
    `/players/${playerId}/activities?start=${startDateString}&end=${endDateString}`
  );
  const activitiesData = response.data as {
    id: number;
    player: { id: number };
    gameDescriptor: {
      translationKey: string | 'WALK';
    };
    personalPoints?: {
      value: number;
    }[];
    date: number;
  }[];
  const result = [] as Point[];
  const date = moment(startDate);
  while (true) {
    if (date.isAfter(endDate)) break;
    result.push(new Point({ date: date.toDate(), value: 0 }));
    date.add(1, 'day');
  }
  activitiesData
    .filter((activity) => {
      if (activity.player.id !== playerId) return false;
      return activity.gameDescriptor.translationKey === 'WALK';
    })
    .map((activity) => {
      let value = 0;
      if (activity.personalPoints) {
        for (const point of activity.personalPoints) {
          value += point.value;
        }
      }
      return {
        value,
        date: new Date(activity.date),
      };
    })
    .forEach((point) => {
      const tmpDate = moment(point.date);
      const index = result.findIndex((p) => {
        return moment(p.date).isSame(tmpDate, 'day');
      });
      if (index !== -1) {
        result[index].value += point.value;
      }
    });
  console.log(result);
  return result;
};
