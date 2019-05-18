const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/', userController.getUsers);
router.post('/signin', userController.signIn);

module.exports = router;