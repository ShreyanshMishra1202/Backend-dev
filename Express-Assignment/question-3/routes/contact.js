const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('contact', {
    title: 'Contact Us',
    error: null,
    form: { name: '', email: '', message: '' }
  });
});

router.post('/', (req, res) => {
  const name = (req.body.name || '').trim();
  const email = (req.body.email || '').trim();
  const message = (req.body.message || '').trim();

  if (!name || !email || !message) {
    return res.status(400).render('contact', {
      title: 'Contact Us',
      error: 'All fields are required.',
      form: { name, email, message }
    });
  }

  res.render('thank-you', {
    title: 'Thanks for reaching out',
    name,
    email,
    message
  });
});

module.exports = router;
