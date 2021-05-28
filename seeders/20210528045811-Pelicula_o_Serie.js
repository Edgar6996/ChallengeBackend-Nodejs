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
    let peli_serie = []
    for (let i = 1; i <= 20; i++) {
      peli_serie = [
        ...peli_serie,
        {
          imagen: faker.image.image(),
          titulo: faker.name.title(),
          fecha_de_creacion: faker.date.past(),
          calificacion: faker.random.arrayElement([1,2,3,4,5]),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    }
    return queryInterface.bulkInsert('Pelicula_o_Series', peli_serie, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Pelicula_o_Series', null, {})
  }
};
