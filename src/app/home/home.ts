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
    let hand = this.dealer.deal();
    console.log(hand.toString());
    this.hand = hand;
  }

  evaluate() {

    let evaluator = new Evaluator();

    evaluator.evaluate(this.hand);
  }

  dealEvaluate() {
    this.dealer.addCard(new Card(Card.ranks.find(rank =>(rank.index == StandardRanks.Ace)),
      Card.suits.find(suit =>(suit.index == StandardSuits.Club))));
    this.dealer.addCard(new Card(Card.ranks.find(rank =>(rank.index == StandardRanks.Ten)),
      Card.suits.find(suit =>(suit.index == StandardSuits.Club))));
    this.dealer.addCard(new Card(Card.ranks.find(rank =>(rank.index == StandardRanks.King)),
      Card.suits.find(suit =>(suit.index == StandardSuits.Club))));
    this.dealer.addCard(new Card(Card.ranks.find(rank =>(rank.index == StandardRanks.Queen)),
      Card.suits.find(suit =>(suit.index == StandardSuits.Club))));
    this.dealer.addCard(new Card(Card.ranks.find(rank =>(rank.index == StandardRanks.Jack)),
      Card.suits.find(suit =>(suit.index == StandardSuits.Club))));
    // this.dealer.addCard(new Card(Card.ranks.find(rank =>(rank.index == StandardRanks.Nine)),
    //   Card.suits.find(suit =>(suit.index == StandardSuits.Club))));
    console.clear();
    this.deal();
    this.evaluate();
  }

}
