import {Component} from "@angular/core";
import {Card} from "../shared/Card";
import {Suit, StandardSuits} from "../shared/Suit";
import {Rank, StandardRanks} from "../shared/Rank";
import {GameService} from "../GameService";

@Component({
  selector: 'manual',
  pipes: [],
  providers: [],
  directives: [],
  styleUrls: ['./manual.css'],
  templateUrl: './manual.html'
})
export class Manual {

  constructor(public gameService: GameService) {
  }

  royalFlush() {
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.King), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

  straightFlush() {
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.King), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Nine), Suit.createFromIndex(StandardSuits.Club)));
  }

  fourOfAKind() {
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Diamond)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ten), Suit.createFromIndex(StandardSuits.Heart)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Nine), Suit.createFromIndex(StandardSuits.Club)));
  }

  fullHouse() {
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Diamond)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Heart)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club)));
  }

  flush() {
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
  }

  straight() {
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Five), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Six), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Seven), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Heart)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Nine), Suit.createFromIndex(StandardSuits.Club)));
  }

  threeOfAKind() {
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Heart)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Heart)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

  twoPair() {
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Heart)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

  pair() {
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Queen), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Two), Suit.createFromIndex(StandardSuits.Heart)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

  highCard() {
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Jack), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Four), Suit.createFromIndex(StandardSuits.Club)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Six), Suit.createFromIndex(StandardSuits.Heart)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Eight), Suit.createFromIndex(StandardSuits.Spade)));
    this.gameService.dealer.addCard(new Card(Rank.createFromIndex(StandardRanks.Ace), Suit.createFromIndex(StandardSuits.Club)));
  }

}
