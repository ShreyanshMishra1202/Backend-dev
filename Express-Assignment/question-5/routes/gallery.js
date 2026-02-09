const express = require('express');
const router = express.Router();

const photos = [
  { file: '/images/photo-1.svg', title: 'City Lights' },
  { file: '/images/photo-2.svg', title: 'Morning Hills' }
];

router.get('/', (req, res) => {
  res.render('gallery', {
    title: 'Photo Gallery',
    photos
  });
});

module.exports = router;
