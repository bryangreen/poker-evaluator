import {Card} from "./Card";
import {shuffle} from "lodash";
import {Suit} from "./Suit";
import {Rank} from "./Rank";

export class Deck {

  deckSize: number = 52;
  cards: Array<Card> = [];

  constructor() {

  }

  fresh() {
    this.clear();
    this.fill();
    this.shuffle();
  }

  draw(): Card {
    return this.cards.shift();
  }

  add(card: Card) {
    this.cards.unshift(card);
  }

  satisfyAvailableCards(amount: number) {
    if (this.cards.length < amount) {
      // Too few cards in deck.
      this.fresh();
    }
  }

  count(): number {
    return this.cards.length;
  }

  clear() {
    this.cards = [];
  }

  fill() {
    for (let suit of Suit.suits) {
      for (let rank of Rank.ranks) {
        this.cards.push(new Card(Rank.build(rank), Suit.build(suit)));
      }
    }
  }

  shuffle() {
    if (this.cards.length == this.deckSize) {
      this.cards = shuffle(this.cards);
    }
  }

}
