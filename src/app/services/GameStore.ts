import {Injectable} from "@angular/core";
import {Deck} from "../shared/Deck";
import {Hand} from "../shared/Hand";
import {WinningHand} from "../shared/evaluator/WinningHand";

@Injectable()
export class GameStore {

  deck: Deck;
  hand: Hand;
  winningHand: WinningHand;

  constructor() {

  }
}
