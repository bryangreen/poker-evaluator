import {expect} from "chai";
import {Card} from "../../app/shared/Card";
import {StandardRanks, Rank} from "../../app/shared/Rank";
import {StandardSuits, Suit} from "../../app/shared/Suit";

describe("Rank", ()=> {

  it("should have proper toString", ()=> {
    let card: Card = new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Heart));
    expect("Eight of Hearts").to.eq(card.toString());
  });

  it("should return Ten from index", () => {
    let card: Card = new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Heart));
    expect("Ten").to.eq(card.rank.name);
  });

  it("should return J from rank code", () => {
    let card: Card = new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Heart));
    expect("J").to.eq(card.rank.code);
  });

  it("should return Diamond from suit name", () => {
    let card: Card = new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Diamond));
    expect("Diamond").to.eq(card.suit.name);
  });

  it("should return S from suit code", () => {
    let card: Card = new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Spade));
    expect("S").to.eq(card.suit.code);
  });

});
