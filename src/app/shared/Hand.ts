import {Card} from "./Card";

export class Hand {

  cards: Array<Card> = [];

  constructor() {

  }

  addCard(card: Card) {
    this.cards.push(card);
  }

  setCards(cards: Array<Card>) {
    this.cards = cards;
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
