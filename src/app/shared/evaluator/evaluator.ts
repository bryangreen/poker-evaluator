import * as _ from 'lodash';
import {Hand} from "../hand";
import {Card} from "../card";
import {RankEvaluator} from "./rankEvaluator";
import {WinningHand} from "./winningHand";
import {SuitEvaluator} from "./suitEvaluator";
import {CardSorter} from "./cardBoundaries";
import {SequenceEvaluator} from "./sequenceEvaluator";

/**
 * Created by Bryan Green on 8/12/2016.
 */

export interface HandRanking {
  name: string;
  rank: number;
  index: number;
}

export enum StandardHands {
  RoyalFlush,
  StraightFlush,
  FourOfAKind,
  FullHouse,
  Flush,
  Straight,
  ThreeOfAKind,
  TwoPair,
  Pair,
  HighCard
}

export class Evaluator {

  private handRankings: Array<HandRanking> = [
    {name: "Royal Flush", index: StandardHands.RoyalFlush, rank: 1},
    {name: "Straight Flush", index: StandardHands.StraightFlush, rank: 2},
    {name: "Four of a Kind", index: StandardHands.FourOfAKind, rank: 3},
    {name: "Full House", index: StandardHands.FullHouse, rank: 4},
    {name: "Flush", index: StandardHands.Flush, rank: 5},
    {name: "Straight", index: StandardHands.Straight, rank: 6},
    {name: "Three of a Kind", index: StandardHands.ThreeOfAKind, rank: 7},
    {name: "Two Pair", index: StandardHands.TwoPair, rank: 8},
    {name: "Pair", index: StandardHands.Pair, rank: 9},
    {name: "High Card", index: StandardHands.HighCard, rank: 10}
  ];

  constructor() {

  }

  evaluate(hand: Hand) {
    let winningHand: WinningHand,
      boundaries = new CardSorter(),
      highestCard = boundaries.highestCard(hand.getCards()),
      rankEvaluator: RankEvaluator = new RankEvaluator(this, hand);

    // One pair, two pair and three of a kind are the most likely outcomes.
    winningHand = rankEvaluator.evaluate()

    // Typescript cannot test an object to see if it is an instanceof an interface.
    if (typeof winningHand != 'object') {

      let sequenceEvaluator = new SequenceEvaluator(this, hand),
        isSequence: boolean = sequenceEvaluator.isSequence();

      // Winning hand was not a rank-based win. Test suits.
      let suitEvaluator: SuitEvaluator = new SuitEvaluator(this, hand);
      winningHand = suitEvaluator.evaluate();

      if (typeof winningHand != 'object') {
        // No winning hand, yet, test for a sequence.
        if (isSequence) {
          winningHand = new WinningHand(hand, this.getHandRanking(StandardHands.Flush), Array<Array<Card>>(hand.getCards()));
        } else {
          winningHand = new WinningHand(hand, this.getHandRanking(StandardHands.HighCard), Array<Array<Card>>([highestCard]));
        }
      }
    }

    if (typeof winningHand == 'object') {
      console.log(`Winning hand was '${winningHand.handRanking.name}' with rank of ${winningHand.handRanking.rank}.`);
    }
  }


  getHandRankings(): Array<HandRanking> {
    return this.handRankings;
  }

  getHandRanking(handIndex: number): HandRanking {
    return this.handRankings.find(function (winningHand: HandRanking): boolean {
      if (winningHand.index == handIndex) {
        return true;
      }
    });
  }

  addHandRanking(winningHand: HandRanking) {
    this.handRankings.push(winningHand);
  }

  // replaceWinningHand(winningHand: WinningHand) {
  //   this.handRankings.spush(winningHand);
  // }


}
