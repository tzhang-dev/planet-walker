import { Component, OnInit } from '@angular/core';
import shared from '../pixel-planet/utils/shared';
import { Point } from '../pixel-planet/utils/point';
import { planet_names, PlanetNames } from '../pixel-planet/utils/planets';
import { CHALLENGE_DAYS } from '../pixel-planet/utils/config';

@Component({
  selector: 'app-universe',
  templateUrl: 'universe.page.html',
  styleUrls: ['universe.page.scss'],
})
export class UniversePage implements OnInit {
  grouped = {} as {
    [k in PlanetNames]: { left: Point[]; right: Point[] };
  };
  planet_names = planet_names;
  ready: boolean = false;
  constructor() {}
  async ngOnInit() {
    for (const planet_name of planet_names) {
      const left = [] as Point[];
      const right = [] as Point[];
      for (let i = 0; i < CHALLENGE_DAYS; i++) {
        left.push(new Point({ value: 0 }));
        right.push(new Point({ value: 0 }));
      }
      this.grouped[planet_name] = { left, right };
    }
    await this.update_all();
    this.ready = true;
  }
  async update_all() {
    const challenge = shared.challenge!;
    await challenge.get_players();
    const players = challenge.players;
    for (const player of players) {
      await player.get_points();
      if (player.planet_name && player.side) {
        this.grouped[player.planet_name][player.side!] = player.points;
      }
    }
  }
}
