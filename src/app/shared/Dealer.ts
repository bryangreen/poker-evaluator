import {Deck} from "./Deck";
import {Hand} from "./Hand";
import {Card} from "./Card";
import {Evaluator} from "./evaluator/Evaluator";
import {GameStore} from "../services/GameStore";

export class Dealer {

  cardsPerHand: number = 5;

  constructor(private gameStore: GameStore) {

  }

  getGameStore(): GameStore {
    return this.gameStore;
  }

  start() {
    this.getGameStore().deck = new Deck();
    this.getGameStore().deck.fresh();
  }

  clear() {
    this.getGameStore().deck.clear();
  }

  shuffle() {
    this.getGameStore().deck.shuffle();
  }

  deal() {
    let hand: Hand = new Hand(),
      deck: Deck = this.getGameStore().deck;

    deck.satisfyAvailableCards(this.cardsPerHand);

    for (let i = 0; i < this.cardsPerHand; i++) {
      hand.addCard(deck.draw());
    }

    this.getGameStore().hand = hand;
  }

  evaluateHand() {
    let evaluator = new Evaluator(),
      winningHand = evaluator.evaluate(this.getGameStore().hand);

    this.getGameStore().winningHand = winningHand;
  }

  addCard(card: Card) {
    this.getGameStore().deck.add(card);
  }

}
