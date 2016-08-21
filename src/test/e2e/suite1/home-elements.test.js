var Rx = require('rxjs');
var chai = require('chai');
var promised = require('chai-as-promised');
chai.use(promised)

var expect = chai.expect;

describe('Poker hand evaluator', function () {

  beforeEach(function () {
    this.timeout(15000);
    browser.get('/');
    browser.waitForAngular();
  });

  describe('home page', function () {
    it('should have a title in the browser', function () {
      expect(browser.getTitle()).to.eventually.eq('Poker hand evaluator');
    });

    it('should have a new deck button', function () {
      expect(browser.isElementPresent(element(by.css('button#new-deck')))).to.eventually.be.true;
    });

    it('should have a clear deck button', function () {
      expect(browser.isElementPresent(element(by.css('button#clear-deck')))).to.eventually.be.true;
    });

    it('should have a shuffle deck button', function () {
      expect(browser.isElementPresent(element(by.css('button#shuffle-deck')))).to.eventually.be.true;
    });

    it('should have a deal and evaluate button', function () {
      expect(browser.isElementPresent(element(by.css('button#deal-evaluate')))).to.eventually.be.true;
    });

    it('should have a just deal button', function () {
      expect(browser.isElementPresent(element(by.css('button#just-deal')))).to.eventually.be.true;
    });

    it('should have a just evaluate button', function () {
      expect(browser.isElementPresent(element(by.css('button#just-evaluate')))).to.eventually.be.true;
    });

  });
});
