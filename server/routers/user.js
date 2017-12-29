const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => {
    res.send('user create works!');
})

router.post('/login', (req, res) => {
    res.send('user login work');
})

module.exports = router;