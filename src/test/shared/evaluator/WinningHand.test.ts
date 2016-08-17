/**
 * Created by Bryan Green on 8/17/2016.
 */
import {expect} from "chai";
import {WinningHand} from "../../../app/shared/evaluator/WinningHand";
import {Hand} from "../../../app/shared/Hand";
import {HandRanking, StandardHandRankings} from "../../../app/shared/evaluator/HandRanking";
import {Card} from "../../../app/shared/Card";
import {StandardRanks, Rank} from "../../../app/shared/Rank";
import {StandardSuits, Suit} from "../../../app/shared/Suit";

describe('WinningHand', ()=> {

  let hand: Hand = new Hand(),
    card1: Card,
    card2: Card,
    card3: Card,
    card4: Card,
    card5: Card,
    handRanking: HandRanking,
    winningHand: WinningHand;

  beforeEach(()=> {
    hand = new Hand();
    card1 = new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Club));
    card2 = new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Heart));
    card3 = new Card(Rank.createFromIndex(StandardRanks.Three), Suit.createFromIndex(StandardSuits.Club));
    card4 = new Card(Rank.createFromIndex(StandardRanks.Three), Suit.createFromIndex(StandardSuits.Diamond));
    card5 = new Card(Rank.createFromIndex(StandardRanks.Six), Suit.createFromIndex(StandardSuits.Club));
    hand.setCards([card1, card2, card3, card4, card5]);

    handRanking = HandRanking.createFromIndex(StandardHandRankings.FullHouse);
    winningHand = new WinningHand(hand, handRanking, [[card1, card2], [card3, card4]]);
  });

  it('should have a winning card1', () => {
    expect(winningHand.isWinningCard(card1)).to.be.true
  });

  it('should have a winning card2', () => {
    expect(winningHand.isWinningCard(card2)).to.be.true
  });

  it('should have a winning card3', () => {
    expect(winningHand.isWinningCard(card3)).to.be.true
  });

  it('should have a winning card4', () => {
    expect(winningHand.isWinningCard(card4)).to.be.true
  });

  it('should not have a winning card5', () => {
    expect(winningHand.isWinningCard(card5)).to.be.false
  });

});
