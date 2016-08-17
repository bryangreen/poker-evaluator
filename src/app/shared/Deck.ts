import {Card} from "./Card";
import {shuffle} from "lodash";
import {Suit} from "./Suit";
import {Rank} from "./Rank";

export class Deck {

  totalCards: number = 52;
  cards: Array<Card>;

  constructor() {

  }

  fresh() {
    this.clear();
    this.create();
    this.shuffle();
  }

  draw(): Card {
    return this.cards.shift();
  }

  add(card: Card) {
    this.cards.unshift(card);
  }

  ensureAvailableCards(amount: number) {
    if (this.cards.length < amount) {
      // Too few cards in deck.
      this.fresh();
    }
  }

  count(): number {
    if (this.cards !== undefined) {
      return this.cards.length;
    } else {
      return 0;
    }
  }

  private clear() {
    this.cards = [];
  }

  private shuffle() {
    if (this.cards.length == this.totalCards) {
      this.cards = shuffle(this.cards);
    }
  }

  private create() {
    for (let suit of Suit.suits) {
      for (let rank of Rank.ranks) {
        this.cards.push(new Card(Rank.build(rank), Suit.build(suit)));
      }
    }
  }

}
