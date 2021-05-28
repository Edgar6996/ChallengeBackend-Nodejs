'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelicula_o_Serie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pelicula_o_Serie.init({
    imagen: DataTypes.BLOB,
    titulo: DataTypes.STRING,
    fecha_de_creacion: DataTypes.DATE,
    calificacion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pelicula_o_Serie',
  });
  return Pelicula_o_Serie;
};