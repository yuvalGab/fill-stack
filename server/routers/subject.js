const express = require('express');
const router = express.Router();
const Subject = require('../models/subject');

router.get('/getAll/:zone', (req, res) => {
  const { zone } = req.params;
  res.send(Subject.getAll(zone));
});

router.post('/add', (req, res) => {
  res.send(Subject.add(req.body));
});

module.exports = router;
