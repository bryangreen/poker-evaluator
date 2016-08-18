import {Component, OnInit} from "@angular/core";
import {Card} from "../shared/Card";
import {Suit, StandardSuits, SuitInterface} from "../shared/Suit";
import {Rank, StandardRanks, RankInterface} from "../shared/Rank";
import {GameStore} from "../services/GameStore";
import {Deck} from "../shared/Deck";

@Component({
  selector: 'manual',
  pipes: [],
  providers: [],
  directives: [],
  styleUrls: ['./manual.css'],
  templateUrl: './manual.html'
})
export class Manual implements OnInit {
  cards: Array<Card>;

  constructor(public gameStore: GameStore) {
  }

  ngOnInit(): any {
    this.cards = [];
    for (let suit of Suit.suits) {
      for (let rank of Rank.ranks) {
        this.cards.push(new Card(Rank.build(rank), Suit.build(suit)));
      }
    }
  }

  getGameStore(): GameStore {
    return this.gameStore;
  }

  addCard(card: Card) {
    if (!this.getGameStore().deck) {
      this.getGameStore().deck = new Deck();
    }
    this.getGameStore().deck.add(card);
  }

  ensureDeckExists() {
    if (!this.getGameStore().deck) {
      this.getGameStore().deck = new Deck();
      this.getGameStore().deck.create();
    }
  }

  royalFlush() {
    this.ensureDeckExists();
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.King), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

  straightFlush() {
    this.ensureDeckExists();
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.King), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Nine), Suit.createFromIndex(StandardSuits.Club)));
  }

  fourOfAKind() {
    this.ensureDeckExists();
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Diamond)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Heart)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Nine), Suit.createFromIndex(StandardSuits.Club)));
  }

  fullHouse() {
    this.ensureDeckExists();
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Diamond)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Spade)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Heart)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club)));
  }

  flush() {
    this.ensureDeckExists();
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
  }

  straight() {
    this.ensureDeckExists();
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Five), Suit.createFromIndex(StandardSuits.Spade)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Six), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Seven), Suit.createFromIndex(StandardSuits.Spade)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Heart)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Nine), Suit.createFromIndex(StandardSuits.Club)));
  }

  threeOfAKind() {
    this.ensureDeckExists();
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Spade)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Heart)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Heart)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

  twoPair() {
    this.ensureDeckExists();
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Spade)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Heart)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Spade)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

  pair() {
    this.ensureDeckExists();
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Spade)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Heart)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Spade)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

  highCard() {
    this.ensureDeckExists();
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Spade)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Six), Suit.createFromIndex(StandardSuits.Heart)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Spade)));
    this.getGameStore().deck.add(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

}
