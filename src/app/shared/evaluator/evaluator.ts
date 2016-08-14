import * as _ from 'lodash';
import {Hand} from "../hand";
import {Card} from "../card";
import {RankEvaluator} from "./rankEvaluator";
import {WinningHand} from "./winningHand";
import {SuitEvaluator} from "./suitEvaluator";
import {CardBoundaries} from "./cardBoundaries";

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
    let rankEvaluator: RankEvaluator = new RankEvaluator(this, hand),
      winningHand: WinningHand;

    // One pair, two pair and three of a kind are the most likely outcomes.
    winningHand = rankEvaluator.evaluate()

    // Typescript cannot test an object to see if it is an instanceof an interface.
    if (typeof winningHand != 'object') {

      // Winning hand was not a rank-based win. Test suits.
      let suitEvaluator: SuitEvaluator = new SuitEvaluator(this, hand);
      winningHand = suitEvaluator.evaluate();

      if (typeof winningHand != 'object') {

      }
    }

    if (typeof winningHand == 'object') {
      console.log(`Winning hand was '${winningHand.handRanking.name}' with rank of ${winningHand.handRanking.rank}.`);
    }

    console.log('same by suit...');

//    let sameSuit = this.same(hand, HandReducer.bySuit);

    let boundaries = new CardBoundaries();
    let highestCard = boundaries.highestCard(hand);
    console.log(`Highest card = '${highestCard.rank.name}'`);

    // if (sameSuit.length == 5) {
    //   return true;
    // } else {
    //   return false;
    // }
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
