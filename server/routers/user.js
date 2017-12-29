const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/create', (req, res) => {
    User.create(req.body);
    res.send(true);
})

router.post('/login', (req, res) => {
    res.send(User.login());
})

module.exports = router;