const express = require('express');
const router = express.Router();
const Topic = require('../models/topic');

router.get('/getAll/:subjectId', (req, res) => {
  const { subjectId } = req.params;
  res.send(Topic.getAll(subjectId));
});

router.post('/add', (req, res) => {
  res.send(Topic.add(req.body));
});

router.put('/edit', (req, res) => {
  res.send(Topic.edit(req.body));
});

router.delete('/delete/:topicId', (req, res) => {
  const { topicId } = req.params; 
  res.send(Topic.delete(+topicId));
});

module.exports = router;
