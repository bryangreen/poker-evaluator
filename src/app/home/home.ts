import {Component} from "@angular/core";
import {GameService} from "../GameService";

@Component({
  selector: 'home',
  pipes: [],
  providers: [GameService],
  directives: [],
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {

  constructor(private gameService: GameService) {

  }

  getDealer() {
    return this.gameService.dealer;
  }

  deck() {
    this.getDealer().start();
  }

  evaluate() {
    this.gameService.dealer.evaluateHand();
  }

  hand() {
    this.gameService.dealer.deal();
  }

  newHandEvaluate() {
    this.hand();
    this.evaluate();
  }

}
