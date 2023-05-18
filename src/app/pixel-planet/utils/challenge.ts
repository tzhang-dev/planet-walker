import { Player } from './player';

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

  get_players(): Player[] {
    // should be of PLAYER_NUMBER size
    const players: Player[] = [];
    // FAKE DATA START
    // FAKE DATA END
    this.players = players;
    return players;
  }
}
