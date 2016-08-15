import {Card, StandardRanks} from "../Card";
import {CardSorter} from "./CardSorter";
import {Hand} from "../Hand";
import {HandReducer} from "./HandReducer";
import {WinningHand} from "./WinningHand";
import {SequenceEvaluator} from "./SequenceEvaluator";
import HandRankings = Rankings.HandRankings;
import HandRanking = Rankings.HandRanking;

export class CardSuitEvaluator {

  constructor() {

  }

  assess(hand: Hand, rankings: HandRankings): WinningHand {
    let result: Array<Array<Card>> = HandReducer.same(hand, HandReducer.bySuit, 5);

    if (result.length > 0) {
      // The hand has all cards with the same suit.
      let sequenceEvaluator = new SequenceEvaluator(),
        isSequence: boolean = sequenceEvaluator.isRankInSequence(hand),
        handRanking: HandRanking;

      if (isSequence) {
        let cardBoundaries: CardSorter = new CardSorter(),
          highestCard: Card = cardBoundaries.highestCard(result[0]);

        if (highestCard.rank.index == StandardRanks.Ace) {
          // Highest card is an Ace in a sequence with all same suit.
          handRanking = rankings.getHandRanking(Rankings.StandardHands.RoyalFlush);
        } else {
          // Highest card is NOT an Ace but still in a sequence with all same suit.
          handRanking = rankings.getHandRanking(Rankings.StandardHands.StraightFlush);
        }
      } else {
        // Five cards of the same suit but not in a sequence.
        handRanking = rankings.getHandRanking(Rankings.StandardHands.Flush);
      }

      return new WinningHand(hand, handRanking, result);
    }

    return;
  }

}
