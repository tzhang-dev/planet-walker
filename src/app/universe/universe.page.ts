import { Component, OnInit } from '@angular/core';
import { Point } from '../pixel-planet/utils/point';
import { planet_names, PlanetNames } from '../pixel-planet/utils/planets';
import { CHALLENGE_DAYS } from '../pixel-planet/utils/config';
import { AllPlayersService } from '../pixel-planet/services/all-players.service';
import { Player } from '../pixel-planet/utils/player';

@Component({
  selector: 'app-universe',
  templateUrl: 'universe.page.html',
  styleUrls: ['universe.page.scss'],
})
export class UniversePage implements OnInit {
  planet_names = planet_names;
  grouped: {
    [k in PlanetNames]: { left: Point[]; right: Point[] };
  };

  constructor(private allPlayers: AllPlayersService) {
    this.allPlayers.players.subscribe((players) => {
      this.grouped = this.makeGroup(players);
    });
  }
  async ngOnInit() {}
  makeGroup(players: Player[]) {
    const grouped = {} as {
      [k in PlanetNames]: { left: Point[]; right: Point[] };
    };
    for (const player of players) {
      const points = player.points;
      if (player.planet_name && player.side) {
        grouped[player.planet_name] = grouped[player.planet_name] || {};
        grouped[player.planet_name][player.side!] = player.points;
      }
    }
    return grouped;
  }
}
