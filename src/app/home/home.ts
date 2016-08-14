import {Component} from '@angular/core';
import {Dealer} from "../shared/dealer";
import {Hand} from "../shared/hand";
import {Evaluator} from "../shared/evaluator/evaluator";
import {Card, StandardRanks, StandardSuits} from "../shared/card";
import {Deck} from "../shared/deck";

@Component({
  selector: 'home',
  pipes: [],
  providers: [],
  directives: [],
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {

  dealer: Dealer;
  hand: Hand;

  constructor() {
    this.dealer = new Dealer();
  }

  shuffle() {
    this.dealer.start();
  }

  deal() {
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Ten), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Jack), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Queen), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.King), Card.getSuitByIndex(StandardSuits.Heart)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Nine), Card.getSuitByIndex(StandardSuits.Club)));
  }


  evaluate() {

    let evaluator = new Evaluator();

    evaluator.evaluate(this.hand);
  }

  dealEvaluate() {
    console.clear();

    let hand = this.dealer.deal();
    console.log(hand.toString());
    this.hand = hand;

    this.evaluate();
  }

}
