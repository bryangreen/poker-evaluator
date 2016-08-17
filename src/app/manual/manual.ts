import {Component} from "@angular/core";
import {Card} from "../shared/Card";
import {Suit, StandardSuits} from "../shared/Suit";
import {Rank, StandardRanks} from "../shared/Rank";
import {GameStore} from "../services/GameStore";

@Component({
  selector: 'manual',
  pipes: [],
  providers: [],
  directives: [],
  styleUrls: ['./manual.css'],
  templateUrl: './manual.html'
})
export class Manual {

  constructor(public gameStore: GameStore) {
  }

  royalFlush() {
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.King), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

  straightFlush() {
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.King), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Nine), Suit.createFromIndex(StandardSuits.Club)));
  }

  fourOfAKind() {
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Diamond)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Heart)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Nine), Suit.createFromIndex(StandardSuits.Club)));
  }

  fullHouse() {
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Diamond)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Heart)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club)));
  }

  flush() {
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
  }

  straight() {
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Five), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Six), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Seven), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Heart)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Nine), Suit.createFromIndex(StandardSuits.Club)));
  }

  threeOfAKind() {
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Heart)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Heart)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

  twoPair() {
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Heart)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

  pair() {
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Heart)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

  highCard() {
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Six), Suit.createFromIndex(StandardSuits.Heart)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameStore.deck.add(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

}
