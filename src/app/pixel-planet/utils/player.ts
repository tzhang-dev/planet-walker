import { PlanetNames } from './planets';
import { Point } from './point';
import { CHALLENGE_DAYS } from './config';

export interface PlayerData {
  player_id: number | undefined;
  planet_name?: PlanetNames;
  side?: 'left' | 'right';
}

export class Player implements PlayerData {
  public player_id: number | undefined;
  public planet_name?: PlanetNames;
  public side?: 'left' | 'right';
  public points: Point[] = [];

  constructor(playerData: PlayerData) {
    this.player_id = playerData.player_id;
    this.planet_name = playerData.planet_name;
    this.side = playerData.side;
  }
  async update() {
    // TODO: call api
    // FAKE DATA START
    const points = [] as Point[];
    for (let i = 0; i < CHALLENGE_DAYS; i++) {
      points.push(
        new Point({
          value: Math.floor(Math.random() * 12),
          date: new Date(Date.now() - i * 24 * 60 * 60 * 1000),
        })
      );
    }
    this.points = points;
  }
}
