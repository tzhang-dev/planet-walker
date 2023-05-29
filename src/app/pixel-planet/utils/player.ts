import { PlanetNames } from './planets';
import { Point } from './point';

export interface PlayerData {
  playerId: number | undefined;
  planetName?: PlanetNames;
  side?: 'left' | 'right';
  points?: Point[];
}

export class Player implements PlayerData {
  public playerId: number | undefined;
  public planetName?: PlanetNames;
  public side?: 'left' | 'right';
  public points: Point[] = [];

  constructor(playerData: PlayerData) {
    this.playerId = playerData.playerId;
    this.planetName = playerData.planetName;
    this.side = playerData.side;
  }
}
