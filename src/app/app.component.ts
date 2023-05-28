import { Component, OnInit } from '@angular/core';
import { ThisPlayerService } from './pixel-planet/services/this-player.service';
import { AllPlayersService } from './pixel-planet/services/all-players.service';
import { ConfigService } from './pixel-planet/services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  player_id: number = 0;
  challenge_id: number = 0;
  public ready: boolean = false;
  constructor(
    private thisPlayer: ThisPlayerService,
    private allPlayers: AllPlayersService,
    private config: ConfigService
  ) {}
  async ngOnInit() {
    this.thisPlayer.playerId = this.player_id;
    await this.config.setChallengeId(this.challenge_id);
    this.allPlayers.setPlayers(await this.config.getPlayers());
    await this.allPlayers.updateAll();
    this.ready = true;
  }
}
