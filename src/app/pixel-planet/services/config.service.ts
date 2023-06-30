import { Injectable } from '@angular/core';
import { Player } from '../utils/player';
import { API_getAllPlayers, API_getChallenge } from '../utils/api';
import * as moment from 'moment';

export interface ConfigConstants {
  HALF_PLANET_IN_CANVAS: {
    col_num: number;
    row_num: number;
  };
  WHOLE_PLANET_IN_CANVAS: {
    col_num: number;
    row_num: number;
  };
  DAILY_BONUS_GRANT: number;
  DAILY_SUPER_GRANT: number;
  CHALLENGE_DAYS: number;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService implements ConfigConstants {
  challengeId: number;
  thisPlayerId: number;
  circleId: number;
  startDate: Date = new Date();
  HALF_PLANET_IN_CANVAS = {
    col_num: 16,
    row_num: 29,
  };
  WHOLE_PLANET_IN_CANVAS = {
    col_num: 29,
    row_num: 29,
  };
  DAILY_BONUS_GRANT = 10;
  DAILY_SUPER_GRANT = 13;
  CHALLENGE_DAYS = 20;
  constructor() {}
  public async updateChallengeSettings() {
    const challenge = await API_getChallenge(
      this.thisPlayerId,
      this.challengeId
    );
    this.startDate = challenge.startDate;
  }

  public async getPlayers(): Promise<Player[]> {
    return await API_getAllPlayers(this.thisPlayerId, this.circleId);
  }
  public getChallengeDates(): Date[] {
    const dates: Date[] = [];
    let date = new Date(this.startDate);
    for (let i = 0; i < this.CHALLENGE_DAYS; i++) {
      // filter out weekends with moment
      while (moment(date).isoWeekday() >= 6) {
        date = moment(date).add(1, 'days').toDate();
      }
      dates.push(date);
      date = moment(date).add(1, 'days').toDate();
    }
    return dates;
  }
}
