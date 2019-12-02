'use strict';
var faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    let data = [];
    let amount = 100;
    while(amount--) {
      data.push({
        title: faker.commerce.color,
        artist: faker.name.findName(),
        liked: false,
        cover: faker.image.imageUrl(),
        length:,
        song:
      })
    }
    return queryInterface.bulkInsert('Songs', data, {});

  },

  down: (queryInterface, Sequelize) => {

  }
};
