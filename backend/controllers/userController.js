const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models/database');
require('dotenv').config();

exports.createUser = (req, res) => {
  const { nome, email, tipo, senha } = req.body;
  const hash = bcrypt.hashSync(senha, 10);

  const query = 'INSERT INTO usuarios (nome, email, tipo, senha) VALUES (?, ?, ?, ?)';
  db.run(query, [nome, email, tipo, hash], function (err) {
    if (err) {
      if (err.message.includes('usuarios.nome')) {
        return res.status(400).json({ campo: 'nome', mensagem: 'Usuário já existe.' });
      }
      if (err.message.includes('usuarios.email')) {
        return res.status(400).json({ campo: 'email', mensagem: 'Email já existe.' });
      }
      return res.status(500).json({ mensagem: 'Erro interno ao criar usuário.' });
    }

    res.status(201).json({
      mensagem: 'Usuário criado com sucesso!',
      usuarioId: this.lastID
    });
  });
};

exports.login = (req, res) => {
  const { email, senha } = req.body;

  db.get('SELECT * FROM usuarios WHERE email = ?', [email], (err, user) => {
    if (err || !user) {
      return res.status(401).json({ mensagem: 'Usuário não encontrado.' });
    }

    const isValid = bcrypt.compareSync(senha, user.senha);
    if (!isValid) {
      return res.status(403).json({ mensagem: 'Senha incorreta.' });
    }

    const payload = {
      id: user.id,
      nome: user.nome,
      tipo: user.tipo
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '2h'
    });

    console.log('Token gerado:', token);


    res.json({
      mensagem: 'Login realizado com sucesso!',
      token,
      usuario: payload
    });
  });
};
