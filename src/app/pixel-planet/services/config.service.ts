import { Injectable } from '@angular/core';
import { Player } from '../utils/player';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  challenge_id: number = -1;
  start_date: Date = new Date();
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

  PLAYER_NUMBER = 16;
  constructor() {}
  public async setChallengeId(challenge_id: number) {
    this.challenge_id = challenge_id;
    await this.update();
  }
  public async update() {
    // TODO: update challenge
  }

  public async getPlayers(): Promise<Player[]> {
    return [];
  }
}
