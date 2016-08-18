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
    this.create();
    this.fill();
    this.shuffle();
  }

  create() {
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
    if (this.cards.length > 0) {
      this.cards = shuffle(this.cards);
    }
  }

  count(): number {
    return this.cards.length;
  }

  draw(): Card {
    return this.cards.shift();
  }

  add(card: Card) {
    this.cards.unshift(card);
  }

  addByCode(rank: string, suit: string) {
    this.cards.unshift(new Card(Rank.createFromCode(rank), Suit.createFromCode(suit)));
  }

  satisfyAvailableCards(amount: number) {
    if (this.cards.length < amount) {
      // Too few cards in deck.
      this.fresh();
    }
  }

}
