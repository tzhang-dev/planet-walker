import { Injectable } from '@angular/core';
import { Player } from '../utils/player';
import { AllPlayersService } from './all-players.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class ThisPlayerService {
  constructor(
    private allPlayer: AllPlayersService,
    private config: ConfigService
  ) {}
  get player(): Player {
    return this.allPlayer.getPlayerById(this.config.thisPlayerId);
  }
}
