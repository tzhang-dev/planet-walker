import { Component, Input, OnInit } from '@angular/core';
import { ThisPlayerService } from './pixel-planet/services/this-player.service';
import { ThisChallengeService } from './pixel-planet/services/this-challenge.service';
import { AllPlayersService } from './pixel-planet/services/all-players.service';

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
    private thisChallenge: ThisChallengeService,
    private allPlayers: AllPlayersService
  ) {}
  async ngOnInit() {
    this.thisPlayer.playerId = this.player_id;
    await this.thisChallenge.setChallengeId(this.challenge_id);
    this.allPlayers.setPlayers(await this.thisChallenge.getPlayers());
    await this.allPlayers.updateAll();
    this.ready = true;
  }
}
