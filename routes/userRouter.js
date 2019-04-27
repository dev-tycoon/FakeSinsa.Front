const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/', userController.getUsers);
router.get('/page/signup', userController.redirectSignUp);




module.exports = router;