import {Hand} from "../Hand";
import {Card} from "../Card";
import {CardRankEvaluator} from "./CardRankEvaluator";
import {WinningHand} from "./WinningHand";
import {CardSuitEvaluator} from "./CardSuitEvaluator";
import {CardSorter} from "./CardSorter";
import {CardRankSequenceEvaluator} from "./CardRankSequenceEvaluator";
import {HandRanking, StandardHands} from "./HandRanking";
export class Evaluator {

  constructor() {

  }

  evaluate(hand: Hand): WinningHand {
    let winningHand: WinningHand,
      boundaries = new CardSorter(),
      handRanking: HandRanking = new HandRanking(),
      highestCard: Card,
      rank: CardRankEvaluator = new CardRankEvaluator(handRanking);

    highestCard = boundaries.highestCard(hand.getCards());

    // One pair, two pair and three of a kind are the most likely outcomes.
    winningHand = rank.assess(hand);

    // Typescript cannot test an object to see if it is an instanceof an interface.
    if (typeof winningHand != 'object') {
      let sequence = new CardRankSequenceEvaluator(),
        suit: CardSuitEvaluator = new CardSuitEvaluator(handRanking),
        isSequence: boolean = sequence.isRankInSequence(hand);

      // Winning hand was not a rank-based win. Test suits.
      winningHand = suit.assess(hand);

      if (typeof winningHand != 'object') {
        // No winning hand, yet, test for a sequence.
        if (isSequence) {
          winningHand = new WinningHand(hand, handRanking.getHandRanking(StandardHands.Straight), Array<Array<Card>>(hand.getCards()));
        } else {
          winningHand = new WinningHand(hand, handRanking.getHandRanking(StandardHands.HighCard), Array<Array<Card>>([highestCard]));
        }
      }
    }

    if (typeof winningHand == 'object') {
      console.log(`Winning hand was '${winningHand.handRanking.name}' with rank of ${winningHand.handRanking.rank}.`);
    }

    return winningHand;
  }

}
