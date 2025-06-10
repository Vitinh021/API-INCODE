const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/usuarios', userController.getAll);
router.get('/usuarios/id/:id', userController.getById);
router.get('/usuarios/apelido/:apelido', userController.getByNickName);
router.post('/usuarios', userController.create);
router.put('/usuarios/:id', userController.update);
router.delete('/usuarios/:id', userController.delete);

module.exports = router;
