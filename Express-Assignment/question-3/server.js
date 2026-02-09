const express = require('express');
const path = require('path');

const contactRouter = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.redirect('/contact');
});

app.use('/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
