import {Hand} from "../Hand";
import {Card} from "../Card";
import HandRanking = Rankings.HandRanking;

export class WinningHand {

  constructor(public hand: Hand, public handRanking: HandRanking, public winningCards: Array<Array<Card>>) {

  }

}
