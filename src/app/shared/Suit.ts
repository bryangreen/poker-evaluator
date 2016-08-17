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

  static build(suit: {name: string, code: string, color: string, index: number}|SuitInterface): Suit {
    let handRanking = new Suit();
    handRanking.name = suit.name;
    handRanking.code = suit.code;
    handRanking.color = suit.color;
    handRanking.index = suit.index;
    return handRanking;
  }

  static createFromIndex(index: number): Suit {
    return Suit.build(Suit.suits.find(suit => suit.index == index));
  }

  static getSuitByCode(code: string): SuitInterface {
    return Suit.build(Suit.suits.find(suit => suit.code == code));
  }


  static suits: Array <SuitInterface> = [
    {name: "Diamond", code: "D", color: "Red", index: StandardSuits.Diamond},
    {name: "Heart", code: "H", color: "Red", index: StandardSuits.Heart},
    {name: "Club", code: "C", color: "Black", index: StandardSuits.Club},
    {name: "Spade", code: "S", color: "Black", index: StandardSuits.Spade}
  ];

  toString(): string {
    return `${name}`;
  }

}
