export interface SuitInterface {
  name: string;
  code: string;
  color: string;
  index: number;
}

export const enum StandardSuits {
  Diamond,
  Heart,
  Club,
  Spade
}

export class Suit implements SuitInterface {

  name: string;
  code: string;
  color: string;
  index: number;

  // static build(rank: SuitInterface): Suit {
  //   return Suit.build(rank.name, rank.code, rank.color, rank.index);
  // }

  static build(suit: {name: string, code: string, color: string, index: number}|SuitInterface): Suit {
    let handRanking = new Suit();
    handRanking.name = suit.name;
    handRanking.code = suit.code;
    handRanking.color = suit.color;
    handRanking.index = suit.index;
    return handRanking;
  }

  static suits: Array <SuitInterface> = [
    {name: "Diamond", code: "D", color: "Red", index: StandardSuits.Diamond},
    {name: "Heart", code: "H", color: "Red", index: StandardSuits.Heart},
    {name: "Club", code: "C", color: "Black", index: StandardSuits.Club},
    {name: "Spade", code: "S", color: "Black", index: StandardSuits.Spade}
  ];


  static createFromIndex(index: number): Suit {
    return Suit.build(Suit.suits.find(suit => suit.index == index));
  }

  static getSuitByCode(code: string): SuitInterface {
    return Suit.build(Suit.suits.find(suit => suit.code == code));
  }

  toString(): string {
    return `${name}`;
  }

}
