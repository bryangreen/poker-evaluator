import _ = require("lodash");
import forEach = require("core-js/fn/array/for-each");
import {Card} from "../card";
import {Hand} from "../hand";
import {HandRanking, Evaluator, StandardHands} from "./evaluator";
import {HandReducer} from "./handReducer";
import {WinningHand} from "./winningHand";

export class RankEvaluator {

  constructor(public evaluator: Evaluator, public hand: Hand) {

  }

  evaluate(): WinningHand {

    let result = HandReducer.same(this.hand, HandReducer.byRank, 2),
      handRanking: HandRanking;
    if (result.length > 0) {

      let twoPairs = this.countGroupings(result, 2);
      let threePair = this.countGroupings(result, 3);
      if (twoPairs == 0 && threePair == 0) {
        // Only evaluate four of a kind if there are no pairs or trios as the max cards is five.
        let fourPair = this.countGroupings(result, 4);
        if (fourPair == 1) {
          handRanking = this.evaluator.getHandRanking(StandardHands.FourOfAKind);
        }
      } else {
        switch (true) {
          case (twoPairs == 1 && threePair == 0):
            handRanking = this.evaluator.getHandRanking(StandardHands.Pair);
            break;
          case (twoPairs == 2 && threePair == 0):
            handRanking = this.evaluator.getHandRanking(StandardHands.TwoPair);
            break;
          case (twoPairs == 0 && threePair == 1):
            handRanking = this.evaluator.getHandRanking(StandardHands.ThreeOfAKind);
            break;
          case (twoPairs == 1 && threePair == 1):
            handRanking = this.evaluator.getHandRanking(StandardHands.FullHouse);
            break;
        }
      }
    }

    if (handRanking) {
      return new WinningHand(this.hand, handRanking, result);
    }

    return;
  }


  private countGroupings(groupings: Array<Array<Card>>, cardsInGroup: number = 2): number {
    let results = 0;
    for (let majorGrouping in groupings) {
      let cards = groupings[majorGrouping]
      if (cards.length == cardsInGroup) {
        results++;
      }
    }
    return results;
  }

}
