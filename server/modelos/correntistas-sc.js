'use strict'

module.exports = (sequelize, DataTypes) => {
  const Correntista = sequelize.define('correntista', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      required: true
    },
    cpf:{
        type: DataTypes.INTEGER,
    },
    senha:{
        type: DataTypes.INTEGER,
    },
    conta:{
        type: DataTypes.INTEGER,
    },
    agencia:{
        type: DataTypes.INTEGER,
    },
    saldo:{
        type: DataTypes.REAL,
    },
    role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin', 'disabled']

    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    paranoid: true,
    underscored: true
  });
  return Correntista;
};