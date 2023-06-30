import { Component, OnInit } from '@angular/core';
import { ThisPlayerService } from './pixel-planet/services/this-player.service';
import { AllPlayersService } from './pixel-planet/services/all-players.service';
import { ConfigService } from './pixel-planet/services/config.service';
import { API_configApiSettings } from './pixel-planet/utils/api';

type Portfolio = {
  challengeId: number;
  playerId: number;
  circleId: number;
  authenticationKey: string;
};

const exampleChallengePortfolio: Portfolio[] = [
  {
    // name: 'mars left',
    // email: 'info+planetwalker1@gamebus.eu',
    challengeId: 9713,
    playerId: 1,
    circleId: 105431,
    authenticationKey: ""},
];

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public ready: boolean = false;
  constructor(
    private thisPlayer: ThisPlayerService,
    private allPlayers: AllPlayersService,
    private config: ConfigService
  ) {}
  ngOnInit() {
    // To merge to game bus, provide all data in config
    this.appInit({
      portfolio: exampleChallengePortfolio[0],
      baseUrl: 'https://api.gamebus.eu/v2/',
      updateInterval: 10000,
    });
  }

  async appInit(config: {
    portfolio: Portfolio;
    baseUrl: string;
    updateInterval: number;
  }) {
    const { portfolio, baseUrl, updateInterval } = config;
    API_configApiSettings(baseUrl, portfolio.authenticationKey);
    this.config.thisPlayerId = portfolio.playerId;
    this.config.challengeId = portfolio.challengeId;
    this.config.circleId = portfolio.circleId;
    await this.config.updateChallengeSettings();
    const players = await this.config.getPlayers();
    players.forEach((player) => {
      this.allPlayers.setPlayerId(player);
    });
    this.ready = true;
    this.allPlayers.startScheduledUpdate(updateInterval);
  }
}
