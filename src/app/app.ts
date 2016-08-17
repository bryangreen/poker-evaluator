import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {GameStore} from "./services/GameStore";

@Component({
  selector: 'app',
  pipes: [],
  providers: [GameStore],
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ['./app.css'],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.html'
})
export class App implements OnInit {

  constructor(public gameStore: GameStore) {

  }

  getGameStore() {
    return this.gameStore;
  }

  ngOnInit() {
    this.getGameStore();
  }

}
