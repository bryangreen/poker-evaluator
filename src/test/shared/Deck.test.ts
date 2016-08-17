import {expect} from "chai";
import {Card} from "../../app/shared/Card";
import {Deck} from "../../app/shared/Deck";
import {Rank, StandardRanks} from "../../app/shared/Rank";
import {StandardSuits, Suit} from "../../app/shared/Suit";

describe("Deck", ()=> {

  let deck: Deck;

  beforeEach(() => {
    deck = new Deck();
  });

  it("should start off with an empty array of cards", ()=> {
    expect(deck.cards).to.be.empty;
  });


  it("should have a count of 0, when there are 0 cards", ()=> {
    expect(deck.count()).to.eq(0);
  });

  it("should have a count of 1, when 1 card is added", ()=> {
    deck.add(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Spade)));
    expect(deck.count()).to.eq(1);
  });

  it("should have a count of 0, when 1 card is added and then drawn", ()=> {
    deck.add(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Spade)));
    deck.draw();
    expect(deck.count()).to.eq(0);
  });

  it("should have a count of 0, after cleared", ()=> {
    deck.add(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Spade)));
    deck.create();
    expect(deck.count()).to.eq(0);
  });

  it("should have a complete deck when a fresh deck is requested", ()=> {
    deck.fresh();
    expect(deck.count()).to.eq(deck.deckSize);
  });

  it("should have a complete deck when a test for available cards is run on an empty deck", ()=> {
    deck.satisfyAvailableCards(5);
    expect(deck.count()).to.eq(deck.deckSize);
  });

  it("should have a complete deck ", ()=> {
    deck.fill();
    expect(deck.count()).to.eq(deck.deckSize);
  });

});
