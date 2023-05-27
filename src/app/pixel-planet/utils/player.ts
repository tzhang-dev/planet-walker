import { PlanetNames } from './planets';
import { Point } from './point';

export interface PlayerData {
  player_id: number;
  planet_name?: PlanetNames;
  side?: 'left' | 'right';
}

export class Player implements PlayerData {
  player_id: number;
  planet_name?: PlanetNames;
  side?: 'left' | 'right';
  points: Point[] = [];

  constructor(playerData: PlayerData) {
    this.player_id = playerData.player_id;
    this.planet_name = playerData.planet_name;
    this.side = playerData.side;
  }
  static async get_player(player_id: number): Promise<Player> {
    // TODO: call api
    // FAKE DATA START
    const data = {
      player_id: player_id,
      planet_name: 'mars',
      side: 'left',
    } as PlayerData;
    // FAKE DATA END
    return new Player(data);
  }
  async set_planet(planet_name: PlanetNames, side: 'left' | 'right') {
    this.planet_name = planet_name;
    this.side = side;
    // TODO: call api
    return this;
  }
  async get_points(): Promise<Point[]> {
    // should be of CHALLENGE_DAYS size
    const points: Point[] = [];
    // TODO: call api
    // FAKE DATA START
    const test_data = [
      0, 13, 10, 3, 15, 0, 6, 13, 0, 10, 1, 13, 3, 15, 4, 9, 6, 13, 4, 6,
    ];
    for (let i = 0; i < test_data.length; i++) {
      points.push(new Point({ value: test_data[i] }));
    }
    // FAKE DATA END
    this.points = points;
    return points;
  }
}
