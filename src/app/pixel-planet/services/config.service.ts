import { Injectable } from '@angular/core';
import { Player } from '../utils/player';
import { API_getAllPlayers, API_getChallenge } from '../utils/api';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  challengeId: number;
  thisPlayerId: number;
  circleId: number;
  startDate: Date = new Date();
  HALF_PLANET_IN_CANVAS = {
    col_num: 16,
    row_num: 29,
  };
  WHOLE_PLANET_IN_CANVAS = {
    col_num: 25,
    row_num: 25,
  };
  DAILY_BONUS_GRANT = 10;
  DAILY_SUPER_GRANT = 12;
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
}
