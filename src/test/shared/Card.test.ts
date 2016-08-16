import {expect} from "chai";
import {Card, StandardRanks, StandardSuits} from "../../app/shared/Card";

describe("Card class", ()=> {
  card:Card;

  before("setup a card", ()=> {
    this.card = new Card(Card.getRankByIndex(StandardRanks.Ace), Card.getSuitByIndex(StandardSuits.Spade));
  });

  it("should have proper toString", ()=> {
    expect("Ace of Spades").to.eq(this.card.toString());
  });

  it("should return Jack from 'J'", () => {
    expect("Jack").to.eq(Card.getRankByCode("J").name);
  });

  it("should return Diamond from 'D'", () => {
    expect("Diamond").to.eq(Card.getSuitByCode("D").name);
  });

  it("should return Ten from index", () => {
    expect("Ten").to.eq(Card.getRankByIndex(StandardRanks.Ten).name);
  });

  it("should return Spade from index", () => {
    expect("Spade").to.eq(Card.getSuitByIndex(StandardSuits.Spade).name);
  });

});
