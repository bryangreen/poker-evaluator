import {expect} from "chai";
import {Rank, StandardRanks} from "../../app/shared/Rank";

describe("Rank", ()=> {

  it("should have proper toString", ()=> {
    let rank: Rank = new Rank("One", "1", 1, 0);
    expect("One").to.eq(rank.toString());
  });

  it("should be able to create rank from standard rank", ()=> {
    let rank: Rank = Rank.createFromIndex(StandardRanks.Two);
    expect(rank).to.not.be.empty;
  });

  it("should have proper toString from standard rank", ()=> {
    let rank: Rank = Rank.createFromIndex(StandardRanks.Two);
    expect("Two").to.eq(rank.toString());
  });

  it("should have proper toString from create from code", ()=> {
    let rank: Rank = Rank.createFromCode('2');
    expect("Two").to.eq(rank.toString());
  });

  it("should be able to build a rank from the ranks", ()=> {
    let rank: Rank = Rank.build(Rank.ranks[0]);
    expect(rank.name).to.not.be.empty;
  });

});
