const express = require('express');
const router = express.Router();
const Resource = require('../models/resource');

router.get('/getAll/:topicId', async (req, res) => {
  const { topicId } = req.params;
  res.send(await Resource.getAll(topicId));
});

router.post('/add', async (req, res) => {
  res.send(await Resource.add(req.body));
});

router.delete('/delete/:resourceId', async (req, res) => {
  const { resourceId } = req.params; 
  res.send(await Subject.delete(resourceId));
});

module.exports = router;
