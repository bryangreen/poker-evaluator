export interface HandRankingInterface {
  name: string;
  rank: number;
  index: number;
}

export const enum StandardHandRankings {
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

export class HandRanking implements HandRankingInterface {

  constructor(public name: string, public rank: number, public index: number) {

  }

  static build(rank: HandRankingInterface): HandRanking {
    return new HandRanking(rank.name, rank.rank, rank.index);
  }

  static createFromIndex(index: number): HandRanking {
    return HandRanking.build(HandRanking.pokerHands.find(hand => hand.index == index));
  }

  static pokerHands: Array<HandRankingInterface> = [
    {name: "Royal Flush", index: StandardHandRankings.RoyalFlush, rank: 1},
    {name: "Straight Flush", index: StandardHandRankings.StraightFlush, rank: 2},
    {name: "Four of a Kind", index: StandardHandRankings.FourOfAKind, rank: 3},
    {name: "Full House", index: StandardHandRankings.FullHouse, rank: 4},
    {name: "Flush", index: StandardHandRankings.Flush, rank: 5},
    {name: "Straight", index: StandardHandRankings.Straight, rank: 6},
    {name: "Three of a Kind", index: StandardHandRankings.ThreeOfAKind, rank: 7},
    {name: "Two Pair", index: StandardHandRankings.TwoPair, rank: 8},
    {name: "Pair", index: StandardHandRankings.Pair, rank: 9},
    {name: "High Card", index: StandardHandRankings.HighCard, rank: 10}
  ];

  getHandRanking(handIndex: number): HandRanking {
    return HandRanking.build(HandRanking.pokerHands.find(function (winningHand: HandRankingInterface): boolean {
      if (winningHand.index == handIndex) {
        return true;
      }
    }));
  }

}
