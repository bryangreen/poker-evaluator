import {Suit} from "./Suit";
import {Rank} from "./Rank";

export class Card {

  constructor(public rank: Rank, public suit: Suit) {

  }

  toString() {
    return `${this.rank.name} of ${this.suit.name}s`;
  }

}

