import {Deck} from "./Deck";
import {Hand} from "./Hand";
import {Card} from "./Card";
import {Evaluator} from "./evaluator/Evaluator";
import {GameModel} from "../GameModel";

export class Dealer {

  cardsPerHand: number = 5;

  constructor(private gameModel: GameModel) {

  }

  start() {
    this.gameModel.deck.fresh();
  }

  deal() {
    let hand: Hand = new Hand(),
      deck: Deck = this.gameModel.deck;

    deck.ensureAvailableCards(this.cardsPerHand);

    for (let i = 0; i < this.cardsPerHand; i++) {
      hand.addCard(deck.draw());
    }

    this.gameModel.hand = hand;
  }

  evaluateHand() {
    let evaluator = new Evaluator(),
      winningHand = evaluator.evaluate(this.gameModel.hand);

    this.gameModel.winningHand = winningHand;
  }

  addCard(card: Card) {
    this.gameModel.deck.add(card);
  }

}
