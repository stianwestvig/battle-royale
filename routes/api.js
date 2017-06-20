const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const file = require('../data/search.json');

router.use(bodyParser.json());

router.get('/count', (req, res) => {
  const value = file.data.search.recipes.total || null;
  res.json({ value });
});

// get one hit based on id
// req.body: { "index": 3 }
router.post('/hit', (req, res) => {
  const index = req.body.index || 0;
  const value = file.data.search.recipes.hits[index] || null;
  res.json({ value });
});

router.post('/echo', (req, res) => {
  res.json(Object.assign({}, req.body, { server: true }));
});

router.all('*', (req, res) => {
  const url = req.url;
  const time = Date.now();
  console.log('REQUEST:', url, 'TIME:', time);
  res.json({ request: url, time});
});

module.exports = router;