/* @flow weak */
'use strict';

var selenium = require('selenium-webdriver'),
    browser = new selenium.Builder()
      .forBrowser('firefox')
      .build();

var login = require('./libs/login'),
    uploadArt = require('./libs/upload-art'),
    uploadMockupBase = require('./libs/upload-mockup-base');

function main(config) {

  login(browser, config, (err, res) => {
    if (err) throw err;
    console.log(res);
  });

  uploadArt(browser, config, (err, res) => {
    if (err) throw err;
    console.log(res);
  });

  uploadMockupBase(browser, config, (err, res) => {
    if (err) throw err;
    console.log(res);
  });

  browser.quit();
};

module.exports = main;
