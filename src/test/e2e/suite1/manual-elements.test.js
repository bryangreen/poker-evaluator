var chai = require('chai');
var promised = require('chai-as-promised');
chai.use(promised)

var expect = chai.expect;

describe('Poker hand evaluator', function () {

  beforeEach(function () {
    this.timeout(15000);
    browser.get('/')
    browser.waitForAngular();

    var manual = element(by.css('a#manual-cards'));
    manual.click();
  });

  describe('add a card manually page', function () {
    it('should have a title in the browser tab', function () {
      expect(browser.getTitle()).to.eventually.eq('Poker hand evaluator');
    });

    it('should have a royal flush button', function () {
      expect(browser.isElementPresent(element(by.css('button#royal-flush')))).to.eventually.be.true;
    });

    it('should have a straight flush button', function () {
      expect(browser.isElementPresent(element(by.css('button#straight-flush')))).to.eventually.be.true;
    });

    it('should have a four of a kind button', function () {
      expect(browser.isElementPresent(element(by.css('button#four-of-a-kind')))).to.eventually.be.true;
    });

    it('should have a full house button', function () {
      expect(browser.isElementPresent(element(by.css('button#full-house')))).to.eventually.be.true;
    });

    it('should have a flush button', function () {
      expect(browser.isElementPresent(element(by.css('button#flush')))).to.eventually.be.true;
    });

    it('should have a straight button', function () {
      expect(browser.isElementPresent(element(by.css('button#straight')))).to.eventually.be.true;
    });

    it('should have a three of a kind button', function () {
      expect(browser.isElementPresent(element(by.css('button#three-of-a-kind')))).to.eventually.be.true;
    });

    it('should have a two pair button', function () {
      expect(browser.isElementPresent(element(by.css('button#two-pair')))).to.eventually.be.true;
    });

    it('should have a pair button', function () {
      expect(browser.isElementPresent(element(by.css('button#pair')))).to.eventually.be.true;
    });

    it('should have a high card button', function () {
      expect(browser.isElementPresent(element(by.css('button#high-card')))).to.eventually.be.true;
    });

    it('should have a two of diamonds link', function () {
      expect(browser.isElementPresent(element(by.css('a#add-2D')))).to.eventually.be.true;
    });

    it('should have a two of hearts link', function () {
      expect(browser.isElementPresent(element(by.css('a#add-2H')))).to.eventually.be.true;
    });

    it('should have a two of clubs link', function () {
      expect(browser.isElementPresent(element(by.css('a#add-2C')))).to.eventually.be.true;
    });

    it('should have a two of spades link', function () {
      expect(browser.isElementPresent(element(by.css('a#add-2S')))).to.eventually.be.true;
    });


  });
});
