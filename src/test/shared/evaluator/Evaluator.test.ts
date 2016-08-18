import {expect} from "chai";
import {Hand} from "../../../app/shared/Hand";
import {Card} from "../../../app/shared/Card";
import {StandardRanks, Rank} from "../../../app/shared/Rank";
import {StandardSuits, Suit} from "../../../app/shared/Suit";
import {HandReducer} from "../../../app/shared/evaluator/HandReducer";
import {Evaluator} from "../../../app/shared/evaluator/Evaluator";
import {WinningHand} from "../../../app/shared/evaluator/WinningHand";
import {HandRanking, StandardHandRankings} from "../../../app/shared/evaluator/HandRanking";

describe('Evaluator', ()=> {

  let hand: Hand = new Hand(),
    card1: Card,
    card2: Card,
    card3: Card,
    card4: Card,
    card5: Card;

  beforeEach(()=> {
    hand = new Hand();

  });

  it('should find royal flush winning hand', () => {
    card1 = new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Diamond));
    card2 = new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Diamond));
    card3 = new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Diamond));
    card4 = new Card(Rank.createFromIndex(StandardRanks.King), Suit.createFromIndex(StandardSuits.Diamond));
    card5 = new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Diamond));
    hand.setCards([card1, card2, card3, card4, card5]);

    let evaluator: Evaluator = new Evaluator();
    let winningHand: WinningHand = evaluator.evaluate(hand);
    expect(winningHand.handRanking.name).to.be.eq(HandRanking.createFromIndex(StandardHandRankings.RoyalFlush).name);
  });


  it('should find straight flush winning hand', () => {
    card1 = new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Heart));
    card2 = new Card(Rank.createFromIndex(StandardRanks.Three), Suit.createFromIndex(StandardSuits.Heart));
    card3 = new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Heart));
    card4 = new Card(Rank.createFromIndex(StandardRanks.Five), Suit.createFromIndex(StandardSuits.Heart));
    card5 = new Card(Rank.createFromIndex(StandardRanks.Six), Suit.createFromIndex(StandardSuits.Heart));
    hand.setCards([card1, card2, card3, card4, card5]);

    let evaluator: Evaluator = new Evaluator();
    let winningHand: WinningHand = evaluator.evaluate(hand);
    expect(winningHand.handRanking.name).to.be.eq(HandRanking.createFromIndex(StandardHandRankings.StraightFlush).name);
  });

  it('should find four of a kind hand ranking', () => {
    card1 = new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club));
    card2 = new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Heart));
    card3 = new Card(Rank.createFromIndex(StandardRanks.Three), Suit.createFromIndex(StandardSuits.Club));
    card4 = new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Diamond));
    card5 = new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club));
    hand.setCards([card1, card2, card3, card4, card5]);

    let evaluator: Evaluator = new Evaluator();
    let winningHand: WinningHand = evaluator.evaluate(hand);
    expect(winningHand.handRanking.name).to.be.eq(HandRanking.createFromIndex(StandardHandRankings.FourOfAKind).name);
  });

  it('should find full house winning hand', () => {
    card1 = new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Club));
    card2 = new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Heart));
    card3 = new Card(Rank.createFromIndex(StandardRanks.Three), Suit.createFromIndex(StandardSuits.Club));
    card4 = new Card(Rank.createFromIndex(StandardRanks.Three), Suit.createFromIndex(StandardSuits.Diamond));
    card5 = new Card(Rank.createFromIndex(StandardRanks.Three), Suit.createFromIndex(StandardSuits.Club));
    hand.setCards([card1, card2, card3, card4, card5]);

    let evaluator: Evaluator = new Evaluator();
    let winningHand: WinningHand = evaluator.evaluate(hand);
    expect(winningHand.handRanking.name).to.be.eq(HandRanking.createFromIndex(StandardHandRankings.FullHouse).name);
  });

  it('should find flush winning hand', () => {
    card1 = new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Club));
    card2 = new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club));
    card3 = new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club));
    card4 = new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club));
    card5 = new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club));
    hand.setCards([card1, card2, card3, card4, card5]);

    let evaluator: Evaluator = new Evaluator();
    let winningHand: WinningHand = evaluator.evaluate(hand);
    expect(winningHand.handRanking.name).to.be.eq(HandRanking.createFromIndex(StandardHandRankings.Flush).name);
  });

});
