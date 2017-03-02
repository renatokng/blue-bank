'use strict'

const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite://db.sqlite');

//objeto do banco
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Modelos schemas do sequelize
db.correntistas = require('../modelos/correntistas-sc.js')(sequelize, Sequelize);
db.operacoes = require('../modelos/operacoes-sc.js')(sequelize, Sequelize);

//Relacionamento
db.operacoes.belongsTo(db.correntistas);
db.correntistas.hasMany(db.operacoes);

module.exports = db;