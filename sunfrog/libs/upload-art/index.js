/* @flow weak */
'use strict';

var By = require('selenium-webdriver').By;

module.exports = (browser, config, callback) => {

  browser
    .get(`file://${__dirname}/form.html`);

  browser
    .findElement(By.name('AiFile'))
    .sendKeys(config.design.art);

  browser
    .findElement(By.name('submit1'))
    .click();

  browser
    .isElementPresent(By.name('submit2'))
    .then((existed) => {
      if (existed) {
        callback(null, 'Upload Art thành công!');
      } else {
        callback(Error('Upload Art thất bại!'));
        }
    });
};
