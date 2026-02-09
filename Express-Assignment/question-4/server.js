const express = require('express');
const path = require('path');

const homeRouter = require('./routes/home');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', homeRouter);

app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Page Not Found',
    url: req.originalUrl
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
