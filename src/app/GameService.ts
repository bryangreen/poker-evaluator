import {Injectable} from "@angular/core";
import {Dealer} from "./shared/Dealer";
import {GameModel} from "./GameModel";

@Injectable()
export class GameService {

  dealer: Dealer;

  constructor() {
    this.dealer = new Dealer(new GameModel());
  }

}
