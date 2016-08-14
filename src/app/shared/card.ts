/**
 * Created by Bryan Green on 8/12/2016.
 */

import {Injectable} from '@angular/core';

interface SuitInterface {
  name: string;
  code: string;
  color: string;
  index: number;
}

interface RankInterface {
  name: string;
  code: string;
  rank: number;
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


@Injectable()
export class Card {

  static suits: Array<SuitInterface> = [
    {name: "Diamond", code: "D", color: "Red", index: StandardSuits.Diamond},
    {name: "Heart", code: "H", color: "Red", index: StandardSuits.Heart},
    {name: "Club", code: "C", color: "Black", index: StandardSuits.Club},
    {name: "Spade", code: "S", color: "Black", index: StandardSuits.Spade}
  ];

  static ranks: Array<RankInterface> = [
    {name: "Two", code: "2", rank: 1, index: StandardRanks.Two},
    {name: "Three", code: "3", rank: 2, index: StandardRanks.Three},
    {name: "Four", code: "4", rank: 3, index: StandardRanks.Four},
    {name: "Five", code: "5", rank: 4, index: StandardRanks.Five},
    {name: "Six", code: "6", rank: 5, index: StandardRanks.Six},
    {name: "Seven", code: "7", rank: 6, index: StandardRanks.Seven},
    {name: "Eight", code: "8", rank: 7, index: StandardRanks.Eight},
    {name: "Nine", code: "9", rank: 8, index: StandardRanks.Nine},
    {name: "Ten", code: "10", rank: 9, index: StandardRanks.Ten},
    {name: "Jack", code: "J", rank: 10, index: StandardRanks.Jack},
    {name: "Queen", code: "Q", rank: 11, index: StandardRanks.Queen},
    {name: "King", code: "K", rank: 12, index: StandardRanks.King},
    {name: "Ace", code: "A", rank: 13, index: StandardRanks.Ace}];

  /**
   *
   * @param rank
   * @param suit
   */
  constructor(public rank: RankInterface, public suit: SuitInterface) {
  }

  // static getRank(card: Card): string {
  //   return card.rank;
  // }
  //
  // static getSuit(card: Card): string {
  //   return card.suit;
  // }

  // getNumericRank(): number {
  //   return Card.ranks[this.rank];
  // }

  /**
   *
   * @returns {string}
   */
  toString() {
    return this.rank.name + " of " + this.suit.name + "s";
  }

}

