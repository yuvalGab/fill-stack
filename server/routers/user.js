const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/create', (req, res) => {
  User.create(req.body);
  res.send(true);
});

router.post('/login', (req, res) => {
  const isLogin = User.login(req.body);
  req.session.authenticated = isLogin;
  res.send(isLogin);
});

router.get('/logout', (req, res) => {
  req.session.authenticated = false;
  res.send(true);
});

router.get('/isLogedIn', (req, res) => {
  res.send(req.session.authenticated ? true : false);
});

router.get('/getFullName', (req, res) => {
  res.send(User.getFullName());
});

module.exports = router;
