import {Card} from "../Card";

/**
 * Created by Bryan Green on 8/14/2016.
 */

export class CardSorter {

  highestCard(cards: Array<Card>): Card {
    return this.sorter(cards, this.ascendingRankSort).pop();
  }

  lowestCard(cards: Array<Card>): Card {
    return this.sorter(cards, this.descendingRankSort).pop();
  }

  sortAsc(cards: Array<Card>): Array<Card> {
    return cards.sort(this.ascendingRankSort);
  }

  sortDesc(cards: Array<Card>): Array<Card> {
    return cards.sort(this.descendingRankSort);
  }

  private sorter(cards: Array<Card>, comparator: any) {
    return cards.slice(0).sort(comparator);
  }

  private ascendingRankSort(a: Card, b: Card): number {
    if (a.rank.ranking < b.rank.ranking) {
      return -1;
    }
    if (a.rank.ranking > b.rank.ranking) {
      return 1;
    }
    if (a.rank.ranking == b.rank.ranking) {
      return 0;
    }
  }

  private descendingRankSort(a: Card, b: Card): number {
    if (a.rank.ranking > b.rank.ranking) {
      return -1;
    }
    if (a.rank.ranking < b.rank.ranking) {
      return 1;
    }
    if (a.rank.ranking == b.rank.ranking) {
      return 0;
    }
  }

}
