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

  constructor(public name: string, public code: string, public color: string, public index: number) {

  }

  static build(suit: SuitInterface): Suit {
    return new Suit(suit.name, suit.code, suit.color, suit.index);
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
    return `${this.name}`;
  }

}
