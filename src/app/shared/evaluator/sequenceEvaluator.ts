import {Card, StandardRanks} from "../card";
import {CardBoundaries} from "./cardBoundaries";
import {Hand} from "../hand";
import {HandRanking, Evaluator, StandardHands} from "./evaluator";
import {HandReducer} from "./handReducer";
import {WinningHand} from "./winningHand";

export class SuitEvaluator {

  constructor(public evaluator: Evaluator, public hand: Hand) {

  }

  evaluate(): WinningHand {
    console.log('same by suit...');
    let result: Array<Array<Card>> = HandReducer.same(this.hand, HandReducer.bySuit, 5),
      handRanking: HandRanking;

    if (result.length > 0) {
      // The hand has all cards with the same suit.

      if (sequence) {
        let cardBoundaries: CardBoundaries = new CardBoundaries(),
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
