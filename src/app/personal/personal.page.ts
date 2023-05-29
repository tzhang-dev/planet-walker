import { Component, OnInit } from '@angular/core';
import { Player } from '../pixel-planet/utils/player';
import { ThisPlayerService } from '../pixel-planet/services/this-player.service';
import { ConfigService } from '../pixel-planet/services/config.service';
import * as moment from 'moment';

@Component({
  selector: 'app-personal',
  templateUrl: 'personal.page.html',
  styleUrls: ['personal.page.scss'],
})
export class PersonalPage implements OnInit {
  public thisPlayer: ThisPlayerService;
  public showNotification: boolean = false;
  constructor(thisPlayer: ThisPlayerService, private config: ConfigService) {
    this.thisPlayer = thisPlayer;
  }
  async ngOnInit() {}
  get player(): Player {
    return this.thisPlayer.player;
  }
  get todayPoint() {
    const today = moment(new Date());
    let point = this.thisPlayer.player.points.find((point) =>
      today.isSame(point.date, 'date')
    );
    point = point ? point : this.thisPlayer.player.points[0];
    return point;
  }
  protected readonly DAILY_BONUS_GRANT = this.config.DAILY_BONUS_GRANT;
  protected readonly DAILY_SUPER_GRANT = this.config.DAILY_SUPER_GRANT;
}
