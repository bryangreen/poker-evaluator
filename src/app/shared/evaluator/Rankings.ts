
module Rankings {

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

  export class HandRankings {

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

  }

}
