const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

router.get('/hello', (req, res) => {
  res.json({ hello: 'world'});
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