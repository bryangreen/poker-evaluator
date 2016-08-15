import {Card} from "../Card";
import {CardSorter} from "./CardSorter";
import {Hand} from "../Hand";

export class SequenceEvaluator {

  constructor() {

  }

  isRankInSequence(hand: Hand): boolean {
    let sorter = new CardSorter(),
      sortedCards = sorter.sortAsc(hand.getCards());

    // Return a result with the ranks in order.
    let orderedRanks = sortedCards.reduce(function (result: Array<number>, card: Card): Array<number> {
      result.push(card.rank.ranking);
      return result;
    }, Array<number>());

    let start: number = orderedRanks[0];

    // Determine if every rank is in sequential order.
    return orderedRanks.every((value: number, index: number): boolean=> {
      return (value == index + start) ? true : false;
    });
  }

}
