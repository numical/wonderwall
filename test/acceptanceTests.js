'use strict';
/* eslint-env mocha */

const webdriver = require('selenium-webdriver');
const { By, until } = webdriver;
const { expect } = require('chai');
const driver = new webdriver.Builder().forBrowser('chrome').build();

function wait (locator) {
  driver.wait(until.elementLocated(locator));
}

function getText (locator) {
  return driver.findElement(locator).getText();
}

describe('Acceptance Test ', function () {
  this.timeout(5000);

  before((done) => {
    driver
      .navigate().to('http://localhost:8080')
      .then(done);
  });

  it('Home Page says Hello World!', function *() {
    const locator = By.className('page-title');
    wait(locator);
    expect(yield getText(locator)).to.equal('Hello World!');
  });

  it('Home Page can navigate to Config Page', function *() {
    const linkLocator = By.linkText('Configure');
    const titleLocator = By.className('page-title');
    wait(linkLocator);
    driver.findElement(linkLocator).click();
    wait(titleLocator);
    expect(yield getText(titleLocator)).to.equal('Config Page');
  });

  it('Config Page says Config Page', function *() {
    const locator = By.className('page-title');
    wait(locator);
    expect(yield getText(locator)).to.equal('Config Page');
  });

  it('Config Page can navigate to Home Page', function *() {
    const linkLocator = By.linkText('Back to Wall');
    const titleLocator = By.className('page-title');
    wait(linkLocator);
    driver.findElement(linkLocator).click();
    wait(titleLocator);
    expect(yield getText(titleLocator)).to.equal('Hello World!');
  });

  after((done) => {
    driver
      .quit()
      .then(done);
  });
});
