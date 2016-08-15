import {Card} from "../Card";
import {Hand} from "../Hand";
import {HandReducer} from "./HandReducer";
import {WinningHand} from "./WinningHand";
import HandRankings = Rankings.HandRankings;

export class CardRankEvaluator {

  constructor() {

  }

  assess(hand: Hand, rankings: HandRankings): WinningHand {
    let result = HandReducer.same(hand, HandReducer.byRank, 2);

    if (result.length > 0) {
      let twoPairs = this.countGroupings(result, 2),
        threePair = this.countGroupings(result, 3),
        handRanking: Rankings.HandRanking;

      if (twoPairs == 0 && threePair == 0) {
        // Only evaluate four of a kind if there are no pairs or three of a kinds as the max cards is five.
        let fourPair = this.countGroupings(result, 4);
        if (fourPair == 1) {
          handRanking = rankings.getHandRanking(Rankings.StandardHands.FourOfAKind);
        }
      } else {
        switch (true) {
          case (twoPairs == 1 && threePair == 0):
            handRanking = rankings.getHandRanking(Rankings.StandardHands.Pair);
            break;
          case (twoPairs == 2 && threePair == 0):
            handRanking = rankings.getHandRanking(Rankings.StandardHands.TwoPair);
            break;
          case (twoPairs == 0 && threePair == 1):
            handRanking = rankings.getHandRanking(Rankings.StandardHands.ThreeOfAKind);
            break;
          case (twoPairs == 1 && threePair == 1):
            handRanking = rankings.getHandRanking(Rankings.StandardHands.FullHouse);
            break;
        }
      }

      if (handRanking) {
        return new WinningHand(hand, handRanking, result);
      }
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
