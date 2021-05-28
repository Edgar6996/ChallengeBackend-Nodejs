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
    let personajes = []
    for (let i = 1; i <= 20; i++) {
      personajes = [
          ...personajes,
        {
          imagen: faker.image.image(),
          nombre: faker.name.firstName(),
          edad: faker.datatype.number({min:1,max:80}),
          peso: faker.datatype.float({min:10, max:100}),
          historia: faker.lorem.paragraphs(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    }
    return queryInterface.bulkInsert('Personajes', personajes, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Personajes', null, {})
  }
};
