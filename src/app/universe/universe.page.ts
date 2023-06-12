import { Component, OnInit } from '@angular/core';
import { Point } from '../pixel-planet/utils/point';
import { planet_names, PlanetNames } from '../pixel-planet/utils/planets';
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
    this.initGrouped();
    this.allPlayers.players.subscribe((players) => {
      this.grouped = this.makeGroup(players);
    });
  }
  async ngOnInit() {}
  makeGroup(players: Player[]) {
    const grouped = this.grouped;
    for (const player of players) {
      if (player.planetName && player.side) {
        grouped[player.planetName][player.side!] = player.points;
      }
    }
    return grouped;
  }

  initGrouped() {
    const grouped = {} as {
      [k in PlanetNames]: { left: Point[]; right: Point[] };
    };
    for (const planet_name of planet_names) {
      grouped[planet_name] = {
        left: Array(20).fill(new Point({value: 0, date: new Date()})),
        right: Array(20).fill(new Point({value: 0, date: new Date()}))
      };
    }
    this.grouped = grouped;
  }
}
