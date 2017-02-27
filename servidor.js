'use strict';

const express = require('express')
const bodyParser = require('body-parser')
  db = require('./server/config/db.js'),
  router = require('./server/roteador/rotas');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

router(app, db);

//drop and resync with { force: true }
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('Express rodando na porta:', PORT);
  });
});