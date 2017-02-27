'use strict';

module.exports = (app, db) => {
  // GET all operacoes
  app.get('/operacoes', (req, res) => {
    db.operacoes.findAll()
      .then(operacoes => {
        res.json(operacoes);
      });
  });

  // GET um op por id
  app.get('/operacao/:id', (req, res) => {
    const id = req.params.id;
    db.operacoes.find({
      where: { id: id}
    })
      .then(operacao => {
        res.json(operacao);
      });
  });

  // POST fazer OP
  app.post('/operacao', (req, res) => {
    console.log('gravando um', req.body)
    const name = req.body.name;
    const correntista_id = req.body.correntista_id;
    const type = req.body.type;
    db.operacoes.create({
      name: name,
      correntista_id: correntista_id,
      type: type
    })
      .then(newOp => {
      res.json(newOp);
    });
  });

}