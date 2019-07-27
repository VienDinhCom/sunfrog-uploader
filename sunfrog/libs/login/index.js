/* @flow weak */
'use strict';

var By = require('selenium-webdriver').By;

module.exports = (browser, config, callback) => {

  browser
    .get(`file://${__dirname}/form.html`);

  browser
    .findElement(By.name('username'))
    .sendKeys(config.account.user);

  browser
    .findElement(By.name('password'))
    .sendKeys(config.account.pass);

  browser
    .findElement(By.name('login'))
    .click();

  browser
    .isElementPresent(By.id('showAffiliateID'))
    .then((existed) => {
      if (existed) {
        callback(null, 'Đăng nhập thành công!');
      } else {
        callback(Error('Đăng nhập thất bại!'));
      }
    });
};
