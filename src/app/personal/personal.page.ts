import { Component, OnInit } from '@angular/core';
import { Player } from '../pixel-planet/utils/player';
import shared from '../pixel-planet/utils/shared';

@Component({
  selector: 'app-personal',
  templateUrl: 'personal.page.html',
  styleUrls: ['personal.page.scss'],
})
export class PersonalPage implements OnInit {
  player: Player;
  ready: boolean = false;
  constructor() {}
  async ngOnInit() {
    this.player = shared.player!;
    await this.player.get_points();
    this.ready = true;
  }
}
