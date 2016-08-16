import {Suit} from "./Suit";
import {Rank} from "./Rank";

export class Card {

  constructor(public rank: Rank, public suit: Suit) {

  }

  toString() {
    return `${this.rank.name} of ${this.suit.name}s`;
  }

  getImageFileName() {
    return `images/card/${ this.rank.name.toLowerCase() }_of_${this.suit.name.toLowerCase() }s.png`;
  }

  getCardCode() {
    return `${ this.rank.code.toUpperCase() }${this.suit.name.toLowerCase() }`;
  }

}
