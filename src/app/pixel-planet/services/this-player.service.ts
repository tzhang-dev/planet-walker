import { Injectable } from '@angular/core';
import { Player } from '../utils/player';
import { AllPlayersService } from './all-players.service';

@Injectable({
  providedIn: 'root',
})
export class ThisPlayerService {
  playerId: number;
  private allPlayer: AllPlayersService;
  constructor(allPlayer: AllPlayersService) {
    this.allPlayer = allPlayer;
  }
  get player(): Player {
    return this.allPlayer.getPlayerById(this.playerId);
  }
}