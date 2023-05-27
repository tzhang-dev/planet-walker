import { Component, Input, OnInit } from '@angular/core';
import { Player } from './pixel-planet/utils/player';
import shared from './pixel-planet/utils/shared';
import { Challenge } from './pixel-planet/utils/challenge';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  @Input() player_id: number;
  @Input() challenge_id: number;
  public ready: boolean = false;
  constructor() {}
  async ngOnInit() {
    shared.player = await Player.get_player(this.player_id);
    shared.challenge = await Challenge.get_challenge(this.challenge_id);
    this.ready = true;
  }
}
