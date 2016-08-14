/**
 * Created by Bryan Green on 8/12/2016.
 */

import {Injectable} from '@angular/core';
import {Deck} from "./deck";
import {Hand} from "./hand";
import {Card} from "./card";

@Injectable()
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
      this.deck.fresh();
    }

    for (let i = 0; i < this.cardsPerHand; i++) {
      hand.addCard(this.deck.draw());
    }

    return hand;
  }

  addCard(card:Card){
    this.deck.add(card);
  }

}

