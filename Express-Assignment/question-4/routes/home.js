const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Custom 404 Demo',
    message: 'Try visiting a path that does not exist.'
  });
});

module.exports = router;
