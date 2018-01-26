const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/create', async (req, res) => {
  const error = await User.create(req.body);
  res.send({error});
});

router.post('/login', async (req, res) => {
  const { error, userId } = await User.login(req.body);
  if (!error) {
    req.session.authenticated = true;
    req.session.userId = userId;
    if (req.body.rememberMe) {
      req.session.cookie.maxAge = 60480000; // week
    } else {
      req.session.cookie.maxAge = false;
    }
  }
 
  res.send({error});
});

router.get('/logout', (req, res) => {
  req.session.authenticated = false;
  res.send(true);
});

router.get('/isLogedIn', (req, res) => {
  res.send(req.session.authenticated ? true : false);
});

router.get('/getFullName', async (req, res) => {
  res.send(await User.getFullName(req.session.userId));
});

module.exports = router;
