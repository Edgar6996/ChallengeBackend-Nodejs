'use strict';

const faker = require('faker');

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
    let usuarios = [];

    for (let i = 1; i <= 20; i++) {
      usuarios = [
        ...usuarios,
        {
          nombre: faker.name.firstName(),
          apellido: faker.name.lastName(),
          correo: faker.internet.email().toLowerCase(),
          contraseña: '$2y$10$HxMsOSs9AusOTGYTyElCSu1KRiPf1XL2E7GGoPwg9j26cBNA4.5x.', // baNaNa
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    }
    return queryInterface.bulkInsert('Usuarios', usuarios, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Usuarios', null, {});
  }

};




