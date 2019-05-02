const express = require('express');
const router = express.Router();

router.get('/signup', function (req, res, next) {
    return res.render('signup');
});

router.get('/signin', function (req, res, next) {
    return res.render('signin');
});

module.exports = router;
