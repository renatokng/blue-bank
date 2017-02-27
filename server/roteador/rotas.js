'use strict'

const routes = [
  require('./rotas/correntistas'),
  require('./rotas/operacoes')
];


// Add access to the app and db objects to each route
module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};