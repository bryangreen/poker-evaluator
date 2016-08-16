import {Component} from "@angular/core";
import {GameService} from "../GameService";

@Component({
  selector: 'about',
  pipes: [],
  providers: [],
  directives: [],
  styleUrls: ['./about.css'],
  templateUrl: './about.html'
})
export class About {

  constructor(public gameService: GameService) {
  }

}
