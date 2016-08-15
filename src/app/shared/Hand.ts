import {Injectable} from "@angular/core";
import {Card} from "./Card";

@Injectable()
export class Hand {

  cards: Array<Card> = [];

  constructor() {

  }

  addCard(card: Card) {
    this.cards.push(card);
  }

  getCards(): Array<Card> {
    return this.cards;
  }

  toString(): string {
    return this.cards.reduce((result: Array<string>, card: Card): Array<string> => {
      result.push(card.toString());
      return result;
    }, Array<string>()).join(', ');
  }

}
