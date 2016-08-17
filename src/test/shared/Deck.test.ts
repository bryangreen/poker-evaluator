import {expect} from "chai";
import {Card} from "../../app/shared/Card";
import {Deck} from "../../app/shared/Deck";
import {Rank, StandardRanks} from "../../app/shared/Rank";
import {StandardSuits, Suit} from "../../app/shared/Suit";

describe("Deck", ()=> {

  let deck: Deck;

  beforeEach(() => {
    this.deck = new Deck();
  });

  it("should start off with an empty array of cards", ()=> {
    expect(this.deck.cards).to.be.empty;
  });


  it("should have a count of 0, when there are 0 cards", ()=> {
    expect(this.deck.count()).to.eq(0);
  });

  it("should have a count of 1, when 1 card is added", ()=> {
    this.deck.add(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Spade)));
    expect(this.deck.count()).to.eq(1);
  });

  it("should have a count of 0, when 1 card is added and then drawn", ()=> {
    this.deck.add(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Spade)));
    this.deck.draw();
    expect(this.deck.count()).to.eq(0);
  });

  it("should have a count of 0, after cleared", ()=> {
    this.deck.add(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Spade)));
    this.deck.clear();
    expect(this.deck.count()).to.eq(0);
  });

  it("should have a complete deck when a fresh deck is requested", ()=> {
    this.deck.fresh();
    expect(this.deck.count()).to.eq(this.deck.deckSize);
  });

  it("should have a complete deck when a test for available cards is run on an empty deck", ()=> {
    this.deck.satisfyAvailableCards(5);
    expect(this.deck.count()).to.eq(this.deck.deckSize);
  });

  it("should have a complete deck ", ()=> {
    this.deck.fill();
    expect(this.deck.count()).to.eq(this.deck.deckSize);
  });

});
