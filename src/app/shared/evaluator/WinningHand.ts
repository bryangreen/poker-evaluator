import {Hand} from "../Hand";
import {Card} from "../Card";
import {HandRanking} from "./HandRanking";

export class WinningHand {

  constructor(public hand: Hand, public handRanking: HandRanking, public winningCards: Array<Array<Card>>) {

  }

  isWinningCard(card: Card): boolean {
    return this.winningCards.some((setOfWinningCards: Array<Card>): boolean => {
      if (setOfWinningCards.some((winningCard: Card): boolean =>
          card.getCardCode() == winningCard.getCardCode()
        )) {
        console.log('winning card = ' + card.getCardCode());
        return true;
      }
    });
  }

  toString(): string {
    return `'${this.handRanking.name}' with rank of ${this.handRanking.rank}.`;
  }

}
