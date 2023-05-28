import { Injectable } from '@angular/core';
import { Player } from '../utils/player';
import { planet_names } from '../utils/planets';
import { BehaviorSubject } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class AllPlayersService {
  players = new BehaviorSubject<Player[]>([]);
  constructor(private config: ConfigService) {
    this.init();
    this.scheduledUpdate();
  }
  init() {
    let player_id = 0;
    // TODO: init with undefined
    const players = [];
    for (const planet of planet_names) {
      for (const side of ['left', 'right'] as const) {
        const player = new Player({ player_id: player_id }, this.config);
        player.planet_name = planet;
        player.side = side;
        player.points = [];
        players.push(player);
        player_id++;
      }
    }
    this.players.next(players);
  }
  setPlayers(players: Player[]) {
    const oldPlayers = this.players.getValue();
    for (const player of players) {
      const old = oldPlayers.find((value) => {
        return (
          value.planet_name === player.planet_name && value.side === player.side
        );
      })!;
      old.player_id = player.player_id;
    }
    this.players.next(oldPlayers);
  }
  getPlayerById(player_id: number): Player {
    const players = this.players.getValue();
    return players.find((player) => player.player_id === player_id)!;
  }

  async updateAll() {
    console.log('update all players');
    const players = this.players.getValue();
    for (const player of players) {
      await player.update();
    }
    this.players.next(players);
  }

  private async scheduledUpdate() {
    await this.updateAll();
    setTimeout(() => {
      this.scheduledUpdate();
    }, 3000);
  }
}
