import {Hand} from "../Hand";
import {Card} from "../Card";
import {HandRanking} from "./HandRanking";

export class WinningHand {

  constructor(public hand: Hand, public handRanking: HandRanking, public winningCards: Array<Array<Card>>) {

  }

}
