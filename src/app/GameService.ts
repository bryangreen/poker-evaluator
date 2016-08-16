import {Injectable} from "@angular/core";
import {Dealer} from "./shared/Dealer";
import {Hand} from "./shared/Hand";

@Injectable()
export class GameService {

  dealer: Dealer = new Dealer();
  hand: Hand;

}
