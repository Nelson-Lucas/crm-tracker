const db = require('../models/database');

exports.createAtendimento = (req, res) => {
  const { clienteId, descricao } = req.body;

  db.get('SELECT nome FROM clientes WHERE id = ?', [clienteId], (err, cliente) => {
    if (err || !cliente) {
      return res.status(400).json({ campo: 'clienteId', mensagem: 'Cliente inválido ou não encontrado.' });
    }

    const nomeCliente = cliente.nome;
    const query = 'INSERT INTO atendimentos (cliente_id, descricao) VALUES (?, ?)';

    db.run(query, [nomeCliente, descricao], function (err) {
      if (err) return res.status(500).json({ mensagem: 'Erro ao registrar atendimento.' });

      res.status(201).json({
        mensagem: 'Atendimento registrado com sucesso!',
        atendimentoId: this.lastID,
        cliente_id: nomeCliente,
        descricao
      });
    });
  });
};

exports.listByClient = (req, res) => {
  const { clienteId } = req.params;

  db.all('SELECT * FROM atendimentos WHERE cliente_id = ? ORDER BY id DESC', [clienteId], (err, rows) => {
    if (err) return res.status(500).json({ mensagem: 'Erro ao listar atendimentos.' });
    res.json(rows);
  });
};
