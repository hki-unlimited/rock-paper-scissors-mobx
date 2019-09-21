import { createContext } from 'react'
import { decorate, observable, action } from 'mobx';
import { GameStatus } from "../models/GameStatus";
import { RockPaperScissors } from '../models/RockPaperScissors';
import { generateComputerPlayerSelectedSign } from '../utils/generateComputerPlayerSelectedSign';
import { GameResult } from '../models/GameResult';
import { gameWinsToWinMatch } from "../assets/constants/gameWinsToWinMatch"
import { MatchResult } from '../models/MatchResult';
import { MatchStatus } from '../models/MatchStatus';

class PlayStore {
  currentRound: number = 1;
  currentHumanPlayerSelectedSign: RockPaperScissors | null = null;
  currentComputerSelectedSign: RockPaperScissors | null = null;
  humanPlayerWins: number = 0;
  computerPlayerWins: number = 0;
  gameStatus: GameStatus = GameStatus.INITIAL;
  gameResult: GameResult | null = null;
  matchStatus: MatchStatus = MatchStatus.INITIAL;
  matchResult: MatchResult | null = null;
  gameFinished = (result: GameResult) => {;
    this.gameResult = result;
    if (this.gameResult === GameResult.HUMAN_WON) {
      this.humanPlayerWins++;
      if (this.humanPlayerWins >= gameWinsToWinMatch) {
        this.matchResult = MatchResult.HUMAN_WON;
        this.matchStatus = MatchStatus.FINISHED;
      }
    } else if (this.gameResult === GameResult.COMPUTER_WON) {
      this.computerPlayerWins++;
      if (this.computerPlayerWins >= gameWinsToWinMatch) {
        this.matchResult = MatchResult.COMPUTER_WON;
        this.matchStatus = MatchStatus.FINISHED;
      }
    }

    this.gameStatus = GameStatus.FINISHED;
    this.currentRound++;
  }
  runMatch = (humanPlayerSelectedSign: RockPaperScissors) => {
    this.currentHumanPlayerSelectedSign = humanPlayerSelectedSign;
    this.currentComputerSelectedSign = generateComputerPlayerSelectedSign();
    switch (this.currentHumanPlayerSelectedSign) {
      case RockPaperScissors.ROCK:
        if (this.currentComputerSelectedSign === RockPaperScissors.SCISSORS) {
          this.gameFinished(GameResult.HUMAN_WON);
        } else if (this.currentComputerSelectedSign === RockPaperScissors.PAPER) {
          this.gameFinished(GameResult.COMPUTER_WON);
        } else {
          this.gameFinished(GameResult.DRAW);
        }
        break;
      case RockPaperScissors.PAPER:
        if (this.currentComputerSelectedSign === RockPaperScissors.SCISSORS) {
          this.gameFinished(GameResult.COMPUTER_WON);
        } else if (this.currentComputerSelectedSign === RockPaperScissors.ROCK) {
          this.gameFinished(GameResult.HUMAN_WON);
        } else {
          this.gameFinished(GameResult.DRAW);
        } 
        break;
      case RockPaperScissors.SCISSORS:
        if (this.currentComputerSelectedSign === RockPaperScissors.ROCK) {
          this.gameFinished(GameResult.COMPUTER_WON);
        } else if (this.currentComputerSelectedSign === RockPaperScissors.PAPER) {
          this.gameFinished(GameResult.HUMAN_WON);
        } else {
          this.gameFinished(GameResult.DRAW);
        }
        break;
    }
  }
  resetValues = () => {
    this.currentRound = 1;
    this.currentHumanPlayerSelectedSign = null;
    this.currentComputerSelectedSign = null;
    this.humanPlayerWins = 0;
    this.computerPlayerWins = 0;
    this.gameStatus = GameStatus.INITIAL;
    this.gameResult = null;
    this.matchStatus = MatchStatus.INITIAL;
    this.matchResult = null;
  }
}

decorate(PlayStore, {
  currentRound: observable,
  currentHumanPlayerSelectedSign: observable,
  currentComputerSelectedSign: observable,
  humanPlayerWins: observable,
  computerPlayerWins: observable,
  gameStatus: observable,
  gameResult: observable,
  matchStatus: observable,
  matchResult: observable,
  runMatch: action
});

export default createContext(new PlayStore());