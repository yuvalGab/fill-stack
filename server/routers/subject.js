const express = require('express');
const router = express.Router();
const Subject = require('../models/subject');

router.get('/getAll/:zone', (req, res) => {
  const { zone } = req.params;
  res.send(Subject.getAll(zone));
});

router.get('/getTitle/:subjectId', (req, res) => {
  const { subjectId } = req.params;
  res.send(Subject.getTitle(subjectId));
});

router.post('/add', (req, res) => {
  res.send(Subject.add(req.body));
});

router.put('/edit', (req, res) => {
  res.send(Subject.edit(req.body));
});

module.exports = router;
