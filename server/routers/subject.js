const express = require('express');
const router = express.Router();
const Subject = require('../models/subject');

router.get('/getAll/:zone', async (req, res) => {
  const { userId } = req.session;
  const { zone } = req.params;
  res.send(await Subject.getAll(userId, zone));
});

router.get('/getTitle/:subjectId', async (req, res) => {
  const { subjectId } = req.params;
  res.send(await Subject.getTitle(subjectId));
});

router.post('/add', async (req, res) => {
  const { userId } = req.session;
  res.send(await Subject.add(userId, req.body));
});

router.put('/edit', async (req, res) => {
  res.send(await Subject.edit(req.body));
});

router.delete('/delete/:subjectId', async (req, res) => {
  const { subjectId } = req.params; 
  res.send(await Subject.delete(subjectId));
});

module.exports = router;
