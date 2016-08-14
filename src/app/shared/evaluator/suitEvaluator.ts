import {Card, StandardRanks} from "../card";
import {CardSorter} from "./cardBoundaries";
import {Hand} from "../hand";
import {HandRanking, Evaluator, StandardHands} from "./evaluator";
import {HandReducer} from "./handReducer";
import {WinningHand} from "./winningHand";
import {SequenceEvaluator} from "./sequenceEvaluator";

export class SuitEvaluator {

  constructor(public evaluator: Evaluator, public hand: Hand) {

  }

  evaluate(): WinningHand {
    let result: Array<Array<Card>> = HandReducer.same(this.hand, HandReducer.bySuit, 5),
      handRanking: HandRanking;

    if (result.length > 0) {
      // The hand has all cards with the same suit.

      let sequenceEvaluator = new SequenceEvaluator(this.evaluator, this.hand),
        sequence: boolean = sequenceEvaluator.isSequence();

      if (sequence) {
        let cardBoundaries: CardSorter = new CardSorter(),
          highestCard: Card = cardBoundaries.highestCard(result[0]);

        if (highestCard.rank.index == StandardRanks.Ace) {
          // Highest card is an Ace in a sequence with all same suit.
          handRanking = this.evaluator.getHandRanking(StandardHands.RoyalFlush);
        } else {
          // Highest card is NOT an Ace but still in a sequence with all same suit.
          handRanking = this.evaluator.getHandRanking(StandardHands.StraightFlush);
        }
      } else {
        // Five cards of the same suit but not in a sequence.
        handRanking = this.evaluator.getHandRanking(StandardHands.Flush);
      }

      return new WinningHand(this.hand, handRanking, result);
    }

    return;
  }

}
