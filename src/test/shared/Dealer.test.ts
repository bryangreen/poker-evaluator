import {expect} from "chai";
import {Dealer} from "../../app/shared/Dealer";
import {GameStore} from "../../app/services/GameStore";

describe("Dealer", ()=> {

  let dealer: Dealer;

  beforeEach(() => {
    dealer = new Dealer(new GameStore());
  });

  it("should start off with an empty array of cards", ()=> {
    expect(dealer.getGameStore().deck).to.be.empty;
  });

  it("should start off with an empty array of cards", ()=> {
    expect(dealer.getGameStore().deck).to.be.empty;
  });

});
