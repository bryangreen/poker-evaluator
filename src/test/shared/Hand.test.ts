import {expect} from "chai";
import {Hand} from "../../app/shared/Hand";
import {Rank, StandardRanks} from "../../app/shared/Rank";
import {Suit, StandardSuits} from "../../app/shared/Suit";
import {Card} from "../../app/shared/Card";

describe('Hand', ()=> {

  it('should be instantiated', () => {
    let hand: Hand = new Hand();
    expect(hand).to.not.be.empty;
  });

  it('should be able to add one card', () => {
    let hand: Hand = new Hand(),
      card: Card = new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club));
    hand.addCard(card);
    expect(hand.getCards()[0]).to.be.eq(card);
  });

  it('should have a valid toString', () => {
    let hand: Hand = new Hand(),
      card: Card = new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club));
    hand.addCard(card);
    expect(hand.toString()).to.be.eq('Queen of Clubs');
  });

});
