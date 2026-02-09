const express = require('express');
const router = express.Router();

const users = [
  { id: 1, name: 'Alice Carter' },
  { id: 2, name: 'Bob Miller' },
  { id: 3, name: 'Charlie Singh' },
  { id: 4, name: 'Diana Lopez' }
];

router.get('/', (req, res) => {
  const rawName = req.query.name || '';
  const name = rawName.trim().toLowerCase();

  const filtered = name
    ? users.filter((user) => user.name.toLowerCase().includes(name))
    : users;

  res.render('users', {
    title: 'Users',
    nameQuery: rawName,
    users: filtered
  });
});

module.exports = router;
