const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const clientController = require('../controllers/clientController');
const atendimentoController = require('../controllers/atendimentoController');

const { verifyToken } = require('../middlewares/auth');

router.post('/login', userController.login);
router.post('/users', userController.createUser);

router.post('/clients', clientController.createClient);
router.get('/clients', clientController.listClients);
router.delete('/clients/:id', clientController.deleteClient);

router.post('/atendimentos', verifyToken, atendimentoController.createAtendimento); 
router.get('/atendimentos/:clienteId', atendimentoController.listByClient);

module.exports = router;
