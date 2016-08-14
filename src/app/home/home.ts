import {Component} from '@angular/core';
import {Dealer} from "../shared/dealer";
import {Hand} from "../shared/hand";
import {Evaluator} from "../shared/evaluator/evaluator";
import {Card} from "../shared/card";
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
    let hand = this.dealer.deal();
    console.log(hand);
    this.hand = hand;
  }

  evaluate() {

    let evaluator = new Evaluator();

    evaluator.evaluate(this.hand);
  }

  dealEvaluate() {
    // this.dealer.addCard(new Card(Deck.ranks.Ace.toString(), "Club));
    // this.dealer.addCard(new Card(Deck.ranks.Ace.toString(), Deck.suits.Diamond.toString()));
    // this.dealer.addCard(new Card(Deck.ranks.Ace.toString(), Deck.suits.Spade.toString()));
    // this.dealer.addCard(new Card(Deck.ranks.Ace.toString(), Deck.suits.Heart.toString()));
    console.clear();
    this.deal();
    this.evaluate();
  }

}
