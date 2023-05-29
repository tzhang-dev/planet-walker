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
    playerId: 106393,
    circleId: 105431,
    authenticationKey:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZ2FtZWJ1c19hcGkiXSwidXNlcl9uYW1lIjoiaW5mbytwbGFuZXR3YWxrZXIxQGdhbWVidXMuZXUiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiLCJ0cnVzdCIsImRlbGV0ZTphY3Rpdml0eSJdLCJleHAiOjE3NjMxNDkwOTYsImF1dGhvcml0aWVzIjpbIlVTRVIiXSwianRpIjoiZHNtTnZOMVktb0F0THFtRDl2NDBaUlhLX09nIiwiY2xpZW50X2lkIjoiZ2FtZWJ1c19iYXNlX2FwcCJ9.JlxBespk1WiljdBh3lX6M1HebUomavphwml8lIEBNhsgQukzhfF84mMIobY0NoCm625e2XBNiri8hF4sI-ZQ5DewsuG0VQnnnY_05cntdRG36kqJ6aiMUadb40xSU35-hPXIi3ZUQy6MCZjLvKjwToRa6E2qREAnq9IQushEGm6jdrpzvI3ZG8SKnBWoTes79LKv9Wm_HY99-S2jWQveafwylCk3wP-jOCFNt-LfEioKVAueIUJEgqWEqauWarDvx5khBiHpjeMW8SJx1-Edv0S-R2r1EQyXLGH0Bka3dmFZbegZn-SjTEqHOyZ4SLZNdW3t72C36qwD5-NSTxkhqQ',
  },
  {
    // name: 'jupiter right',
    // email: 'info+planetwalker2@gamebus.eu',
    challengeId: 9713,
    playerId: 106394,
    circleId: 105431,
    authenticationKey:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZ2FtZWJ1c19hcGkiXSwidXNlcl9uYW1lIjoiaW5mbytwbGFuZXR3YWxrZXIyQGdhbWVidXMuZXUiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiLCJ0cnVzdCIsImRlbGV0ZTphY3Rpdml0eSJdLCJleHAiOjE3NjMxNDkyMTQsImF1dGhvcml0aWVzIjpbIlVTRVIiXSwianRpIjoiXzNDLWZPVFp6TE9IWVR6aWpxcjJHR1NHTnRzIiwiY2xpZW50X2lkIjoiZ2FtZWJ1c19iYXNlX2FwcCJ9.YYBixgXPbyIUbG7fyLyvsljzk19GzuY2SVTpQRU5GdVP-ieHdelyNFtPu5oyDUoAzNlrDfJkZrFdQRxZtcWwfd-YaCYLuMq4YNj6LHAefdFq4e35-PWIvkni9FyDDJo2qKCaOWeVDcUsLt7dtcCbt7rzQA6ZAIJdWG2M6CnGiOa2m1VLYs4534feIfeZlu1znF18cZ7GszlhYJoeFS45pRsRa0o_kpzaPfb_KfWU0fbhYhpJ31C3-Gm97lfg5aVWHP6wEfM_s_mE6Pk7wgiErDfMQgMXopoUZgYPJz1Nv0kYb_3JyI068l9UKAQCs_9--4DLb-GNrArtPX5D-K4yPw',
  },
  {
    // name: 'neptune left',
    // email: 'info+planetwalker3@gamebus.eu',
    challengeId: 9713,
    playerId: 106395,
    circleId: 105431,
    authenticationKey:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZ2FtZWJ1c19hcGkiXSwidXNlcl9uYW1lIjoiaW5mbytwbGFuZXR3YWxrZXIzQGdhbWVidXMuZXUiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiLCJ0cnVzdCIsImRlbGV0ZTphY3Rpdml0eSJdLCJleHAiOjE3NjMxNDkzMDMsImF1dGhvcml0aWVzIjpbIlVTRVIiXSwianRpIjoidlhBdTRsZ2hGRUpISzBfUlFoMGQ4WVQzNnV3IiwiY2xpZW50X2lkIjoiZ2FtZWJ1c19iYXNlX2FwcCJ9.dYNIaS5DrXOQ-HqIEsRqK2DOmO2zapWNWUIv84esNTn38S-15lU7DsKakoJ0Pv76B0fqDuqr18JS5lhcpBJ_3x3-MMZTxHDbDi-n13kq5dOMkOnFBz0Za1Rt6AqOfwiiFsDbKzFgqgvUrH7ALCBvTD2MN1gfNIYHtGeDEUti7DTZ8xVrSH1qRvQJFRZW628DRXyFNbIgz3jBW26K_j_gu02VwV1gHnkmeJWv5lCMHHm60h6d46A8cWYwHk1Sf4cYQeg6bEHKGldO3O3SAQkioU6jUUxT0cjZQMiMWq0l5OOnbq12gOtyS_m6Kh1p_DGUxdP3nEaDSmsMLj8-wfZLJg',
  },
  {
    // name: 'earth right',
    // email: 'info+planetwalker4@gamebus.eu',
    challengeId: 9713,
    playerId: 106396,
    circleId: 105431,
    authenticationKey:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZ2FtZWJ1c19hcGkiXSwidXNlcl9uYW1lIjoiaW5mbytwbGFuZXR3YWxrZXI0QGdhbWVidXMuZXUiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiLCJ0cnVzdCIsImRlbGV0ZTphY3Rpdml0eSJdLCJleHAiOjE3NjMxMTQ4MDMsImF1dGhvcml0aWVzIjpbIlVTRVIiXSwianRpIjoiclZNZEY1QjJDUHU2aWMzQVpPNmZEbjBaLWdvIiwiY2xpZW50X2lkIjoiZ2FtZWJ1c19iYXNlX2FwcCJ9.D2EgScQ7f8ygMQCIVP9FxBIFeciTRrfBK-h1ekkBWOk--daXKVcYPi9JACSfVDm74VZp3fFOleY5TZDaZ0FN9NSnpwH4upGJb5cm-5w55POsiR-CkzeROXHKeMM9j2bc9KfaQYCsdCNVM_25XhDM_0lPgrgDy-xrmrPMnSV9glZvC5sD61AOJDms1Uj63uF1Uv2GcCW94LXLnZR-rjAQEQuWHajwX84kauTPDcPqsGAMflTqLaPbMx1O61shlIi4UM9mLiY1INUXk_wLHnL7XV78PFYB-npTUK-GRHGvTtYS0hhTICfhw8CIjPkhV3_2D6WQhAEAJt-0qVPfQ2cn2w',
  },
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
