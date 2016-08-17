import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {GameService} from "./GameService";

@Component({
  selector: 'app',
  pipes: [],
  providers: [GameService],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './app.html',
})
export class App implements OnInit {

  constructor(private gameService: GameService) {

  }

  getGameService() {
    return this.gameService;
  }

  ngOnInit() {
    this.getGameService();
  }

}
