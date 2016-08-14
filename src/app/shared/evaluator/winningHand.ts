import {HandRanking} from "./evaluator";
import {Hand} from "../hand";
import {Card} from "../card";
/**
 * Created by Bryan Green on 8/14/2016.
 */

export class WinningHand {

  constructor(public hand: Hand, public handRanking: HandRanking, public winningCards: Array<Array<Card>>) {
  }

}
