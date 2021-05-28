'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Personajes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imagen: {
        type: Sequelize.BLOB
      },
      nombre: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
      },
      peso: {
        type: Sequelize.FLOAT
      },
      historia: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Personajes');
  }
};