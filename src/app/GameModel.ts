import {Deck} from "./shared/Deck";
import {Hand} from "./shared/Hand";
import {WinningHand} from "./shared/evaluator/WinningHand";

export class GameModel {

  deck: Deck;
  hand: Hand;
  winningHand: WinningHand;

  constructor() {
    this.deck = new Deck();
    this.hand = new Hand();
  }
}
