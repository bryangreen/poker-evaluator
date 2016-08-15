import {Card} from "../Card";
import {Hand} from "../Hand";

export class HandReducer {

  static same(hand: Hand, reducer: any, minMatches: number): Array<Array<Card>> {
    let reduced: Array<Array<Card>>
      = hand.getCards().reduce(reducer, []);

    return reduced.filter(function (value) {
      return value.length >= minMatches;
    });
  }

  static byRank(result: Array<Array<Card>>, card: Card): Array<Array<Card>> {
    (result[card.rank.index] || (result[card.rank.index] = Array<Card>())).push(card);
    return result;
  }

  static bySuit(result: Array<Array<Card>>, card: Card): Array<Array<Card>> {
    (result[card.suit.index] || (result[card.suit.index] = Array<Card>())).push(card);
    return result;
  }

}
