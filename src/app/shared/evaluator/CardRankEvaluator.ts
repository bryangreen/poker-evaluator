import {Card} from "../Card";
import {Hand} from "../Hand";
import {HandReducer} from "./HandReducer";
import {WinningHand} from "./WinningHand";
import {HandRanking, StandardHandRankings} from "./HandRanking";

export class CardRankEvaluator {

  constructor() {

  }

  assess(hand: Hand): WinningHand {
    let result = HandReducer.same(hand, HandReducer.byRank, 2);

    if (result.length > 0) {
      let twoSameRank = this.countGroupings(result, 2),
        threeSameRank = this.countGroupings(result, 3),
        fourSameRank = this.countGroupings(result, 4),
        handRanking: HandRanking = this.assessPairs(twoSameRank, threeSameRank, fourSameRank);

      if (handRanking) {
        return this.buildWinningHand(hand, handRanking, result);
      }
    }
  }

  private buildWinningHand(hand: Hand, handRanking: HandRanking, result: Array<Array<Card>>) {
    return new WinningHand(hand, handRanking, result);
  }

  private assessPairs(twoCards: number, threeCards: number, fourCards: number): HandRanking {
    switch (true) {
      case (twoCards == 1 && threeCards == 0):
        return HandRanking.createFromIndex(StandardHandRankings.Pair);
      case (twoCards == 2 && threeCards == 0):
        return HandRanking.createFromIndex(StandardHandRankings.TwoPair);
      case (twoCards == 0 && threeCards == 1):
        return HandRanking.createFromIndex(StandardHandRankings.ThreeOfAKind);
      case (twoCards == 1 && threeCards == 1):
        return HandRanking.createFromIndex(StandardHandRankings.FullHouse);
      case (fourCards == 1):
        return HandRanking.createFromIndex(StandardHandRankings.FourOfAKind);
    }
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
