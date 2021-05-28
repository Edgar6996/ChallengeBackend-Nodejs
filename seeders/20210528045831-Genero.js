'use strict';

const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let generos = [];

    for (let i = 1; i <= 20; i++) {
      generos = [
        ...generos,
        {
          nombre: faker.random.arrayElement(['Terror', 'Comedia', 'romanticas','ficción']),
          imagen: faker.image.image(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    }

    return queryInterface.bulkInsert('Generos', generos, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Generos', null, {})
  }
};
