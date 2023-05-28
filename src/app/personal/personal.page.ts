import { Component, OnInit } from '@angular/core';
import { Player } from '../pixel-planet/utils/player';
import { ThisPlayerService } from '../pixel-planet/services/this-player.service';
import {
  DAILY_BONUS_GRANT,
  DAILY_SUPER_GRANT,
} from '../pixel-planet/utils/config';

@Component({
  selector: 'app-personal',
  templateUrl: 'personal.page.html',
  styleUrls: ['personal.page.scss'],
})
export class PersonalPage implements OnInit {
  public thisPlayer: ThisPlayerService;
  constructor(thisPlayer: ThisPlayerService) {
    this.thisPlayer = thisPlayer;
  }
  async ngOnInit() {}
  get player(): Player {
    return this.thisPlayer.player;
  }
  get todayPoint() {
    const today = new Date();
    let point = this.thisPlayer.player.points.find(
      (point) => point.date === today
    );
    point = point ? point : this.thisPlayer.player.points[0];
    return point;
  }

  protected readonly DAILY_BONUS_GRANT = DAILY_BONUS_GRANT;

  protected readonly DAILY_SUPER_GRANT = DAILY_SUPER_GRANT;
}
