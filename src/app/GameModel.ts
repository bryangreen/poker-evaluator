import {Hand} from "./shared/Hand";
import {Dealer} from "./shared/Dealer";

export class GameModel {
  hand: Hand;

  constructor(public  dealer: Dealer = new Dealer()) {

  }
}
