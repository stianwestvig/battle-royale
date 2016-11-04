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

module.exports = router;