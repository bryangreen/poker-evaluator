import {Component, OnInit} from "@angular/core";
import {GameStore} from "../services/GameStore";
import {Dealer} from "../shared/Dealer";

@Component({
  selector: 'home',
  pipes: [],
  providers: [],
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home implements OnInit {

  dealer: Dealer;

  constructor(public gameStore: GameStore) {

  }

  ngOnInit(): any {
    this.dealer = new Dealer(this.gameStore);
  }

  getDealer() {
    return this.dealer;
  }

  deck() {
    this.getDealer().start();
  }

  evaluate() {
    this.getDealer().evaluateHand();
  }

  deal() {
    this.getDealer().deal();
  }

  shuffle() {
    this.getDealer().shuffle();
  }

  clear() {
    this.getDealer().clear();
  }

  dealAndEvaluate() {
    this.getDealer().deal();
    this.getDealer().evaluateHand();
  }

}
