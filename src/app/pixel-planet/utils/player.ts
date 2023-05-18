import { planet_names } from './planets';
import { Point } from './point';

export interface PlayerData {
  player_id: number;
  planet_name?: planet_names;
  side?: string;
}

export class Player implements PlayerData {
  player_id: number;
  planet_name?: planet_names;
  side?: string;
  points: Point[] = [];

  constructor(playerData: PlayerData) {
    this.player_id = playerData.player_id;
    this.planet_name = playerData.planet_name;
    this.side = playerData.side;
  }

  get_points(): Point[] {
    // should be of CHALLENGE_DAYS size
    const points: Point[] = [];
    // FAKE DATA START
    // FAKE DATA END
    this.points = points;
    return points;
  }
}
