/* @flow weak */
'use strict';

var sunfrog = require('./sunfrog');

sunfrog({
  account: {
    user: 'Your Username',
    pass:'Your Password'
  },
  info: {
    title: 'Title',
    description: 'Description',
    category: 12,
    tags: 'tag1, tag2, tag3',
    price: {
      shirts: 22.95,
      hoodies: 39.95
    },
  },
  design: {
    art: `${__dirname}/Art.png`,
    mockup: 'All Ladies',
    color: 'Dark',
    setting: {
      light: {
        guys: ['Sports Grey', 'Light Blue', 'White', 'Yellow', 'Light Pink'],
        ladies: ['Sports Grey', 'Light Blue', 'White', 'Yellow', 'Light Pink'],
        hoodies: ['Sports Grey', 'White']
      },
      dark: {
        guys: ['Dark Grey', 'Black', 'Navy Blue', 'Red', 'Royal Blue', 'Forest', 'Green'],
        ladies: ['Dark Grey', 'Black', 'Navy Blue', 'Red', 'Purple', 'Forest', 'Green'],
        hoodies: ['Black', 'Navy Blue', 'Maroon', 'Forest', 'Red', 'Charcoal']
      }
    }
  }
});
