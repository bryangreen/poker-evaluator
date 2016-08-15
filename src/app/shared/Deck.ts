import {Card} from "./Card";
import {shuffle} from "lodash";

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


  private clear() {
    this.cards = new Array();
  }

  private create() {
    console.log(Card.suits);
    console.log(Card.ranks);
    for (let suite of Card.suits) {
      for (let rank of Card.ranks) {
        console.log(suite.toString(), rank.toString());
        this.cards.push(new Card(rank, suite));
      }
    }
  }

  private shuffle() {
    if (this.cards.length == this.totalCards) {
      this.cards = shuffle(this.cards);
    }
  }

}

