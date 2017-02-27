'use strict'

module.exports = (sequelize, DataTypes) => {
  const Operacoes = sequelize.define('operacoes', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    nameOperacao: {
      type: DataTypes.STRING,
      required: true
    },
    correntista_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
     correntista_destino_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
     valor:{
        type: DataTypes.REAL,
    },
    type: {
      type: DataTypes.ENUM,
      values: ['debito', 'credito']
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
  return Operacoes;
};