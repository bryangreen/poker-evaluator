export interface RankInterface {
  name: string;
  code: string;
  ranking: number;
  index: number;
}

export const enum StandardRanks {
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

export class Rank implements RankInterface {

  name: string;
  code: string;
  ranking: number;
  index: number;

  static build(rank: {name: string, code: string, ranking: number, index: number} | RankInterface): Rank {
    let handRanking = new Rank();
    handRanking.name = rank.name;
    handRanking.code = rank.code;
    handRanking.ranking = rank.ranking;
    handRanking.index = rank.index;
    return handRanking;
  }

  static createFromIndex(index: number): Rank {
    return Rank.build(Rank.ranks.find(rank => rank.index == index));
  }

  static createFromCode(code: string): Rank {
    return Rank.build(Rank.ranks.find(rank => rank.code == code));
  }

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

  toString(): string {
    return `${name}`;
  }

}
