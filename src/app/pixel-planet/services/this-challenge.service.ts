import { Injectable } from '@angular/core';
import { Player } from '../utils/player';

@Injectable({
  providedIn: 'root',
})
export class ThisChallengeService {
  private challenge_id: number = -1;
  public start_date: Date = new Date();
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
