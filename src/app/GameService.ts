import {Injectable} from "@angular/core";
import {Dealer} from "./shared/Dealer";
import {Hand} from "./shared/Hand";
import {WinningHand} from "./shared/evaluator/WinningHand";

@Injectable()
export class GameService {

  dealer: Dealer = new Dealer();
  hand: Hand = new Hand();
  winningHand: WinningHand;

}
