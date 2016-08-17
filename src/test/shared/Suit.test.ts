import {expect} from "chai";
import {Suit, StandardSuits} from "../../app/shared/Suit";

describe("Suit", ()=> {

  it("should have proper toString", ()=> {
    let suit: Suit = new Suit("Heart", "H", 'Red', 0);
    expect("Heart").to.eq(suit.toString());
  });

  it("should be able to create suit from standard suit", ()=> {
    let suit: Suit = Suit.createFromIndex(StandardSuits.Heart);
    expect(suit).to.not.be.empty;
  });

  it("should have proper toString from standard suit", ()=> {
    let suit: Suit = Suit.createFromIndex(StandardSuits.Heart);
    expect("Heart").to.eq(suit.toString());
  });

  it("should be able to build a suit from the suits", ()=> {
    let suit: Suit = Suit.build(Suit.suits[0]);
    expect(suit.name).to.not.be.empty;
  });

});
