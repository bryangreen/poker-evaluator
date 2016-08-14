/**
 * Created by Bryan Green on 8/12/2016.
 */

import {Injectable} from '@angular/core';
import {Card} from "./card";

@Injectable()
export class Hand {

  cards: Array<Card> = [];

  // constructor() {
  //   this._store = [];
  //
  // }

  addCard(card: Card) {
    this.cards.push(card);

  }

  getCards(): Array<Card> {
    return this.cards;
  }

}
