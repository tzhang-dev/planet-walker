import { Player } from './player';
import { PLAYER_NUMBER } from './config';

export interface ChallengeData {
  challenge_id: number;
  start_date: Date;
}

export class Challenge implements ChallengeData {
  challenge_id: number;
  start_date: Date;
  players: Player[] = [];

  constructor(challengeData: ChallengeData) {
    this.challenge_id = challengeData.challenge_id;
    this.start_date = challengeData.start_date;
    this.get_players();
  }
  static async get_challenge(challenge_id: number): Promise<Challenge> {
    // TODO: call api
    return new Challenge({
      challenge_id: challenge_id,
      start_date: new Date(),
    });
  }
  async get_players(): Promise<Player[]> {
    // should be of PLAYER_NUMBER size
    const players: Player[] = [];
    // TODO: call api
    // FAKE DATA START
    for (let i = 0; i < PLAYER_NUMBER; i++) {
      players.push(await Player.get_player(i));
    }
    // FAKE DATA END
    this.players = players;
    return players;
  }
}
