interface SuitInterface {
  name: string;
  code: string;
  color: string;
  index: number;
}

interface RankInterface {
  name: string;
  code: string;
  ranking: number;
  index: number;
}

export enum StandardRanks {
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
  Ace
}

export enum StandardSuits {
  Diamond,
  Heart,
  Club,
  Spade
}

export class Card {

  static suits: Array<SuitInterface> = [
    {name: "Diamond", code: "D", color: "Red", index: StandardSuits.Diamond},
    {name: "Heart", code: "H", color: "Red", index: StandardSuits.Heart},
    {name: "Club", code: "C", color: "Black", index: StandardSuits.Club},
    {name: "Spade", code: "S", color: "Black", index: StandardSuits.Spade}
  ];

  static ranks: Array<RankInterface> = [
    {name: "Two", code: "2", ranking: 1, index: StandardRanks.Two},
    {name: "Three", code: "3", ranking: 2, index: StandardRanks.Three},
    {name: "Four", code: "4", ranking: 3, index: StandardRanks.Four},
    {name: "Five", code: "5", ranking: 4, index: StandardRanks.Five},
    {name: "Six", code: "6", ranking: 5, index: StandardRanks.Six},
    {name: "Seven", code: "7", ranking: 6, index: StandardRanks.Seven},
    {name: "Eight", code: "8", ranking: 7, index: StandardRanks.Eight},
    {name: "Nine", code: "9", ranking: 8, index: StandardRanks.Nine},
    {name: "Ten", code: "10", ranking: 9, index: StandardRanks.Ten},
    {name: "Jack", code: "J", ranking: 10, index: StandardRanks.Jack},
    {name: "Queen", code: "Q", ranking: 11, index: StandardRanks.Queen},
    {name: "King", code: "K", ranking: 12, index: StandardRanks.King},
    {name: "Ace", code: "A", ranking: 13, index: StandardRanks.Ace}];

  constructor(public rank: RankInterface, public suit: SuitInterface) {
  }

  toString() {
    return `${this.rank.name} of ${this.suit.name}s`;
  }

  static getRankByIndex(index: number): RankInterface {
    return Card.ranks.find(rank =>(rank.index == index));
  }

  static getSuitByIndex(index: number): SuitInterface {
    return Card.suits.find(suit =>(suit.index == index));
  }

}

