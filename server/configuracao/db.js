'use strict'

const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite://db.sqlite');

//objeto do banco
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Modelos schemas do sequelize
db.correntista = require('../modelos/correntista.js')(sequelize, Sequelize);
db.operacoes = require('../modelos/operacoes.js')(sequelize, Sequelize);

//Relacionamento
db.operacoes.belongsTo(db.correntistas);
db.correntista.hasMany(db.operacoes);

module.exports = db;