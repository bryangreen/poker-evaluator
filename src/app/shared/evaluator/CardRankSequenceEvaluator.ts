import {Card} from "../Card";
import {CardSorter} from "./CardSorter";
import {Hand} from "../Hand";

export class CardRankSequenceEvaluator {

  constructor() {

  }

  isRankInSequence(hand: Hand): boolean {
    let sortedCards: Array<Card> = this.sort(hand),
      orderedRanks: Array<number> = this.orderedRanks(sortedCards),
      firstRankInOrder: number = orderedRanks[0];

    return this.isSequentialOrder(orderedRanks, firstRankInOrder);
  }

  isSequentialOrder(orderedRanks: Array<number>, firstRankInOrder: number): boolean {
    // Determine if every rank is in sequential order.
    return orderedRanks.every((value: number, index: number): boolean=> {
      return (value == index + firstRankInOrder) ? true : false;
    });
  }

  orderedRanks(sortedCards: Array<Card>): Array<number> {
    // Return a result with the ranks in order.
    return sortedCards.reduce(function (result: Array<number>, card: Card): Array<number> {
      result.push(card.rank.ranking);
      return result;
    }, Array<number>());
  }

  sort(hand: Hand): Array<Card> {
    return new CardSorter().sortAsc(hand.getCards());
  }

}
