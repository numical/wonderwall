'use strict';
/* eslint-env mocha */

const webdriver = require('selenium-webdriver');
const { By, until } = webdriver;
const { expect } = require('chai');
const driver = new webdriver.Builder().forBrowser('chrome').build();

describe('Initial webpage ', function () {
  this.timeout(5000);

  before((done) => {
    driver
      .navigate().to('http://localhost:8080')
      .then(done);
  });

  it('should say Hello World!', function *() {
    driver.wait(until.elementLocated(By.xpath('//div[1]')));
    expect(yield driver.findElement(By.xpath('//div[1]')).getText()).to.equal('Hello World!');
  });

  after((done) => {
    driver
      .quit()
      .then(done);
  });
});
