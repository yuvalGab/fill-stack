const express = require('express');
const router = express.Router();
const Topic = require('../models/topic');

router.get('/getAll/:subjectId', async (req, res) => {
  const { userId } = req.session;
  const { subjectId } = req.params;
  res.send(await Topic.getAll(userId, subjectId));
});

router.get('/getOne/:topicId', async (req, res) => {
  const { userId } = req.session;
  const { topicId } = req.params;
  res.send(await Topic.getOne(userId, topicId));
});

router.post('/add', async (req, res) => {
  const { userId } = req.session;
  res.send(await Topic.add(userId, req.body));
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
