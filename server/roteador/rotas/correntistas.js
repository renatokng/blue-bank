'use strict';

module.exports = (app, db) => {

  // GET all correntistas
  app.get('/correntistas', (req, res) => {
    db.correntistas.findAll()
      .then(correntista => {
        res.json(correntista);
      });
  });

  // GET um correntista por id
  app.get('/correntista/:id', (req, res) => {
    const id = req.params.id;
    db.correntistas.find({
      where: { id: id}
    })
      .then(correntista => {
        res.json(correntista);
      });
  });

  // POST salvar um correntista
  app.post('/correntista', (req, res) => {
    const name = req.body.name;
    const cpf  = req.body.cpf;
    const senha  = req.body.senha;
    const conta  = req.body.conta;
    const agencia  = req.body.agencia;
    const saldo = req.body.saldo;
    const role = req.body.role;

    db.correntistas.create({
      name: name,
      cpf: cpf,
      senha: senha,
      conta: conta,
      agencia: agencia,
      saldo: saldo,
      role: role
    })
      .then(newCorrent => {
        res.json(newCorrent);
      })
  });


  app.patch('/correntista/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.correntista.find({
      where: { id: id }
    })
      .then(correntista => {
        return correntista.updateAttributes(updates)
      })
      .then(updateCorrent => {
        res.json(updatedCorrent);
      });
  });

  // DELETE um correntista
  app.delete('/correntista/:id', (req, res) => {
    const id = req.params.id;
    db.correntista.destroy({
      where: { id: id }
    })
      .then(deletedCorrentista => {
        res.json(delCorrentista);
      });
  });
};