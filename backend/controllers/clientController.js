const db = require('../models/database');

exports.createClient = (req, res) => {
  const { nome, email, telefone } = req.body;
  const tipoUsuario = req.user?.tipo;

  if (tipoUsuario === 'Atendente') {
    return res.status(403).json({ mensagem: 'Atendentes não têm permissão para cadastrar clientes.' });
  }

  db.get('SELECT id FROM clientes WHERE nome = ?', [nome], (err, result) => {
    if (err) return res.status(500).json({ mensagem: 'Erro ao verificar nome.' });
    if (result) return res.status(400).json({ campo: 'nome', mensagem: 'Nome já está em uso.' });

    db.get('SELECT id FROM clientes WHERE email = ?', [email], (err, result) => {
      if (err) return res.status(500).json({ mensagem: 'Erro ao verificar email.' });
      if (result) return res.status(400).json({ campo: 'email', mensagem: 'Email já está em uso.' });

      db.get('SELECT id FROM clientes WHERE telefone = ?', [telefone], (err, result) => {
        if (err) return res.status(500).json({ mensagem: 'Erro ao verificar telefone.' });
        if (result) return res.status(400).json({ campo: 'telefone', mensagem: 'Telefone já está em uso.' });

        const query = 'INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)';
        db.run(query, [nome, email, telefone], function (err) {
          if (err) return res.status(500).json({ mensagem: 'Erro ao cadastrar cliente.' });

          res.status(201).json({
            mensagem: 'Cliente cadastrado com sucesso!',
            clienteId: this.lastID
          });
        });
      });
    });
  });
};

exports.listClients = (req, res) => {
  db.all('SELECT * FROM clientes', [], (err, rows) => {
    if (err) return res.status(500).json({ mensagem: 'Erro ao listar clientes.' });
    res.json(rows);
  });
};

exports.deleteClient = (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM clientes WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ mensagem: 'Erro ao deletar cliente.' });
    res.json({ mensagem: 'Cliente deletado com sucesso!' });
  });
};
