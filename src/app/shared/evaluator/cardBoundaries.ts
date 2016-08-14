import {Card} from "../card";
import {Hand} from "../hand";
import * as _ from 'lodash';

/**
 * Created by Bryan Green on 8/14/2016.
 */

export class CardBoundaries {

  highestCard(hand: Hand): Card {
    return this.highestCard(hand.getCards());
  }

  highestCard(cards: Array<Card>): Card {
    return this.sorter(cards, this.ascendingRankSort);
  }

  lowestCard(hand: Hand): Card {
    return this.lowestCard(hand.getCards());
  }

  lowestCard(cards: Array<Card>): Card {
    return this.sorter(cards, this.descendingRankSort);
  }

  private sorter(cards: Array<Card>, comparator: Function) {
    return cards.slice(0).sort(comparator).pop();
  }

  private ascendingRankSort(a: Card, b: Card): number {
    if (a.rank.rank < b.rank.rank) {
      return -1;
    }
    if (a.rank.rank > b.rank.rank) {
      return 1;
    }
    if (a.rank.rank == b.rank.rank) {
      return 0;
    }
  }

  private descendingRankSort(a: Card, b: Card): number {
    if (a.rank.rank > b.rank.rank) {
      return -1;
    }
    if (a.rank.rank < b.rank.rank) {
      return 1;
    }
    if (a.rank.rank == b.rank.rank) {
      return 0;
    }
  }

}
