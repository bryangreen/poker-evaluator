import {Card} from "../card";
import {Hand} from "../hand";
/**
 * Created by Bryan Green on 8/12/2016.
 */

export class HandReducer {

  static same(hand: Hand, reducer: any, minMatches: number): Array<Array<Card>> {
    let reduced: Array<Array<Card>>,
      results: Array<Array<Card>>;
    reduced = hand.getCards().reduce(reducer, []);

    results = reduced.filter(function (value) {
      return value.length >= minMatches;
    });
    console.log(results);
    return results;
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
