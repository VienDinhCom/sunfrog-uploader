/* @flow weak */
'use strict';

var path = require('path'),
    By = require('selenium-webdriver').By;

module.exports = (browser, config, callback) => {

  let color, mockup;

  if (config.design.mockup === 'All Guys' || config.design.mockup === 'Guys') {
    color = (config.design.color === 'Light') ? config.design.setting.light.guys[0] : config.design.setting.dark.guys[0];
    mockup = path.resolve(`${__dirname}/../../mockups/Guys/${color}.jpg`);
  } else {
    color = (config.design.color === 'Light') ? config.design.setting.light.ladies[0] : config.design.setting.dark.ladies[0];
    mockup = path.resolve(`${__dirname}/../../mockups/Ladies/${color}.jpg`);
  }

  browser
    .get(`file://${__dirname}/form.html`);

  browser
    .findElement(By.name('ProductColor'))
    .findElement(By.css(`[value="${color}"]`))
    .click();

  browser
    .findElement(By.name('JPGFile'))
    .sendKeys(mockup);

  browser
    .findElement(By.name('submit2'))
    .click();

  browser
    .isElementPresent(By.name('submit3'))
    .then((existed) => {
        if (existed) {
          callback(null, 'Upload Base Mockup thành công!');
        } else {
          callback(Error('Upload Base Mockup thất bại!'));
        }
    });
};
