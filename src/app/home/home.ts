import {Component} from "@angular/core";
import {Dealer} from "../shared/Dealer";
import {Hand} from "../shared/Hand";
import {Evaluator} from "../shared/evaluator/Evaluator";
import {Card, StandardRanks, StandardSuits} from "../shared/Card";

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

  royalFlush() {
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Ten), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Jack), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Queen), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.King), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Ace), Card.getSuitByIndex(StandardSuits.Club)));
  }

  straightFlush() {
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Ten), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Jack), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Queen), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.King), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Nine), Card.getSuitByIndex(StandardSuits.Club)));
  }

  fourOfAKind() {
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Ten), Card.getSuitByIndex(StandardSuits.Diamond)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Ten), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Ten), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Ten), Card.getSuitByIndex(StandardSuits.Heart)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Nine), Card.getSuitByIndex(StandardSuits.Club)));
  }

  fullHouse() {
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Two), Card.getSuitByIndex(StandardSuits.Diamond)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Two), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Two), Card.getSuitByIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Queen), Card.getSuitByIndex(StandardSuits.Heart)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Queen), Card.getSuitByIndex(StandardSuits.Club)));
  }

  flush() {
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Four), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Four), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Four), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Four), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Four), Card.getSuitByIndex(StandardSuits.Club)));
  }

  straight() {
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Five), Card.getSuitByIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Six), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Seven), Card.getSuitByIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Eight), Card.getSuitByIndex(StandardSuits.Heart)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Nine), Card.getSuitByIndex(StandardSuits.Club)));
  }

  threeOfAKind() {
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Eight), Card.getSuitByIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Eight), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Eight), Card.getSuitByIndex(StandardSuits.Heart)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Two), Card.getSuitByIndex(StandardSuits.Heart)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Ace), Card.getSuitByIndex(StandardSuits.Club)));
  }

  twoPair() {
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Jack), Card.getSuitByIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Jack), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Four), Card.getSuitByIndex(StandardSuits.Heart)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Four), Card.getSuitByIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Ace), Card.getSuitByIndex(StandardSuits.Club)));
  }

  pair() {
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Queen), Card.getSuitByIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Queen), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Two), Card.getSuitByIndex(StandardSuits.Heart)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Four), Card.getSuitByIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Ace), Card.getSuitByIndex(StandardSuits.Club)));
  }

  highCard() {
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Jack), Card.getSuitByIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Four), Card.getSuitByIndex(StandardSuits.Club)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Six), Card.getSuitByIndex(StandardSuits.Heart)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Eight), Card.getSuitByIndex(StandardSuits.Spade)));
    this.dealer.addCard(new Card(Card.getRankByIndex(StandardRanks.Ace), Card.getSuitByIndex(StandardSuits.Club)));
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
