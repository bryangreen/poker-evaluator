import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {GameService} from "./GameService";

@Component({
  selector: 'app',
  pipes: [],
  providers: [GameService],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './app.html',
})
export class App {


}
