import { Injectable } from '@angular/core';
import { Player, PlayerData } from '../utils/player';
import { planet_names } from '../utils/planets';
import { BehaviorSubject } from 'rxjs';
import { ConfigService } from './config.service';
import * as moment from 'moment';
import { Point } from '../utils/point';
import { API_getPoints } from '../utils/api';

@Injectable({
  providedIn: 'root',
})
export class AllPlayersService {
  players = new BehaviorSubject<Player[]>([]);
  constructor(private config: ConfigService) {
    this.init();
  }
  init() {
    let player_id: number | undefined = undefined;
    const players = [];
    for (const planet of planet_names) {
      for (const side of ['left', 'right'] as const) {
        const player = new Player({ playerId: player_id });
        player.planetName = planet;
        player.side = side;
        player.points = [];
        for (
          let i = 0, date = moment(this.config.startDate);
          i < this.config.CHALLENGE_DAYS;
          i++, date.add(1, 'days')
        ) {
          player.points.push(new Point({ value: 0, date: date.toDate() }));
        }
        players.push(player);
      }
    }
    this.players.next(players);
  }

  /**
   * Set service players ids by planet name and side
   * @param data player data
   */
  setPlayerId(data: PlayerData) {
    const { planetName, side, playerId } = data;
    const oldPlayers = this.players.getValue();
    const player = oldPlayers.find((value) => {
      return value.planetName === planetName && value.side === side;
    })!;
    player.playerId = playerId;
    this.players.next(oldPlayers);
  }
  getPlayerById(player_id: number): Player {
    const players = this.players.getValue();
    return players.find((player) => player.playerId === player_id)!;
  }
  getActivePlayersIds(): number[] {
    const players = this.players.getValue();
    return players
      .filter((player) => player.playerId)
      .map((player) => player.playerId!);
  }
  async updateAllPoints() {
    const players = this.players.getValue();
    const apiRes = await API_getPoints(
      this.config.thisPlayerId,
      this.config.circleId,
      this.config.challengeId,
      this.getActivePlayersIds(),
      this.config.getChallengeDates()
    );
    for (const res of apiRes) {
      const player = players.find(
        (player) => player.playerId === res.playerId
      )!;
      player.points = res.points;
    }
    this.players.next(players);
  }
  startScheduledUpdate(interval: number = 3000) {
    console.log('scheduled update service start, interval:', interval);
    this.scheduledUpdate(interval);
  }
  private scheduledUpdate(interval: number) {
    setTimeout(() => {
      this.scheduledUpdate(interval);
    }, interval);
    this.updateAllPoints();
  }
}
