import {Component} from "@angular/core";
import {Evaluator} from "../shared/evaluator/Evaluator";
import {GameModel} from "../GameModel";
import {GameService} from "../GameService";

@Component({
  selector: 'home',
  pipes: [],
  providers: [],
  directives: [],
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {

  gameModel: GameModel = new GameModel();

  constructor(public gameService: GameService) {

  }

  deck() {
    this.gameService.dealer.start();
  }

  evaluate() {
    let evaluator = new Evaluator();
    this.gameService.winningHand = evaluator.evaluate(this.gameService.hand);
  }

  hand() {
    let hand = this.gameService.dealer.deal();
    this.gameService.hand = hand;
  }

  newHandEvaluate() {
    this.hand();
    this.evaluate();
  }

}
