import {Component} from "@angular/core";
import {Evaluator} from "../shared/evaluator/Evaluator";
import {Card} from "../shared/Card";
import {Suit, StandardSuits} from "../shared/Suit";
import {Rank, StandardRanks} from "../shared/Rank";
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


  shuffle() {
    this.gameService.dealer.start();
  }

  deal() {
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.King), Suit.createFromIndex(StandardSuits.Heart)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Nine), Suit.createFromIndex(StandardSuits.Club)));
  }

  evaluate() {
    let evaluator = new Evaluator();

    evaluator.evaluate(this.gameService.hand);
  }

  dealEvaluate() {
    console.clear();

    let hand = this.gameService.dealer.deal();
    console.log(hand.toString());
    this.gameService.hand = hand;

    this.evaluate();
  }

}
