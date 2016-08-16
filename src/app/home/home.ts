import {Component} from "@angular/core";
import {Dealer} from "../shared/Dealer";
import {Hand} from "../shared/Hand";
import {Evaluator} from "../shared/evaluator/Evaluator";
import {Card} from "../shared/Card";
import {Suit, StandardSuits} from "../shared/Suit";
import {Rank, StandardRanks} from "../shared/Rank";

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
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.King), Suit.createFromIndex(StandardSuits.Heart)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Nine), Suit.createFromIndex(StandardSuits.Club)));
  }

  royalFlush() {
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.King), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

  straightFlush() {
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.King), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Nine), Suit.createFromIndex(StandardSuits.Club)));
  }

  fourOfAKind() {
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Diamond)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Heart)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Nine), Suit.createFromIndex(StandardSuits.Club)));
  }

  fullHouse() {
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Diamond)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Heart)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club)));
  }

  flush() {
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
  }

  straight() {
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Five), Suit.createFromIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Six), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Seven), Suit.createFromIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Heart)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Nine), Suit.createFromIndex(StandardSuits.Club)));
  }

  threeOfAKind() {
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Heart)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Heart)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

  twoPair() {
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Heart)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

  pair() {
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Heart)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

  highCard() {
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Six), Suit.createFromIndex(StandardSuits.Heart)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
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
