import {expect} from "chai";
import {Hand} from "../../../app/shared/Hand";
import {Card} from "../../../app/shared/Card";
import {StandardRanks, Rank} from "../../../app/shared/Rank";
import {StandardSuits, Suit} from "../../../app/shared/Suit";
import {HandReducer} from "../../../app/shared/evaluator/HandReducer";

describe('CardSorter', ()=> {

  let hand: Hand = new Hand(),
    card1: Card,
    card2: Card,
    card3: Card,
    card4: Card,
    card5: Card;

  beforeEach(()=> {
    hand = new Hand();

  });

  it('should have two ranked cards', () => {
    card1 = new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Club));
    card2 = new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Heart));
    card3 = new Card(Rank.createFromIndex(StandardRanks.Three), Suit.createFromIndex(StandardSuits.Club));
    card4 = new Card(Rank.createFromIndex(StandardRanks.Three), Suit.createFromIndex(StandardSuits.Diamond));
    card5 = new Card(Rank.createFromIndex(StandardRanks.Three), Suit.createFromIndex(StandardSuits.Club));
    hand.setCards([card1, card2, card3, card4, card5]);

    let reduced = HandReducer.same(hand, HandReducer.byRank, 2);
    expect(reduced[0].length).to.be.eq(2);
  });

  it('should have three ranked cards', () => {
    card1 = new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Club));
    card2 = new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Heart));
    card3 = new Card(Rank.createFromIndex(StandardRanks.Three), Suit.createFromIndex(StandardSuits.Club));
    card4 = new Card(Rank.createFromIndex(StandardRanks.Three), Suit.createFromIndex(StandardSuits.Diamond));
    card5 = new Card(Rank.createFromIndex(StandardRanks.Three), Suit.createFromIndex(StandardSuits.Club));
    hand.setCards([card1, card2, card3, card4, card5]);

    let reduced = HandReducer.same(hand, HandReducer.byRank, 3);
    expect(reduced[0].length).to.be.eq(3);
  });

  it('should have include the three of clubs', () => {
    card1 = new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Club));
    card2 = new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Heart));
    card3 = new Card(Rank.createFromIndex(StandardRanks.Three), Suit.createFromIndex(StandardSuits.Club));
    card4 = new Card(Rank.createFromIndex(StandardRanks.Three), Suit.createFromIndex(StandardSuits.Diamond));
    card5 = new Card(Rank.createFromIndex(StandardRanks.Three), Suit.createFromIndex(StandardSuits.Club));
    hand.setCards([card1, card2, card3, card4, card5]);

    let reduced = HandReducer.same(hand, HandReducer.byRank, 3);
    expect(reduced[0].find((card: Card)=>card == card3)).to.be.eq(card3);
  });


  it('should include all cards', () => {
    card1 = new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Club));
    card2 = new Card(Rank.createFromIndex(StandardRanks.Three), Suit.createFromIndex(StandardSuits.Club));
    card3 = new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club));
    card4 = new Card(Rank.createFromIndex(StandardRanks.Five), Suit.createFromIndex(StandardSuits.Club));
    card5 = new Card(Rank.createFromIndex(StandardRanks.Six), Suit.createFromIndex(StandardSuits.Club));
    hand.setCards([card1, card2, card3, card4, card5]);

    let reduced = HandReducer.same(hand, HandReducer.bySuit, 5);
    expect(reduced[0].length).to.be.eq(5);
  });

});
