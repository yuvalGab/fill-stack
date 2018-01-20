const express = require('express');
const router = express.Router();
const Topic = require('../models/topic');

router.get('/getAll/:subjectId', async (req, res) => {
  const { subjectId } = req.params;
  res.send(await Topic.getAll(subjectId));
});

router.get('/getOne/:topicId', async (req, res) => {
  const { topicId } = req.params;
  res.send(await Topic.getOne(topicId));
});

router.post('/add', async (req, res) => {
  res.send(await Topic.add(req.body));
});

router.put('/edit', async (req, res) => {
  console.log(req.body);
  res.send(await Topic.edit(req.body));
});

router.delete('/delete/:topicId', async (req, res) => {
  const { topicId } = req.params; 
  res.send(await Topic.delete(topicId));
});

module.exports = router;
