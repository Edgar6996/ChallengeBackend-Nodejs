'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Personaje.init({
    imagen: DataTypes.BLOB,
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    peso: DataTypes.FLOAT,
    historia: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Personaje',
  });
  return Personaje;
};