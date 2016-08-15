import {Deck} from "./Deck";
import {Hand} from "./Hand";
import {Card} from "./Card";

export class Dealer {

  cardsPerHand: number = 5;
  deck: Deck;

  constructor() {

  }

  start() {
    this.deck = new Deck();
    this.deck.fresh();
  }

  deal(): Hand {
    let hand: Hand = new Hand();

    if (this.deck.cards.length < this.cardsPerHand) {
      // Too few cards in deck.
      this.deck.fresh();
    }

    for (let i = 0; i < this.cardsPerHand; i++) {
      hand.addCard(this.deck.draw());
    }

    return hand;
  }

  addCard(card: Card) {
    this.deck.add(card);
  }

}

