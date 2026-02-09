const express = require('express');
const path = require('path');

const pingRouter = require('./routes/ping');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use((req, res, next) => {
  const start = process.hrtime.bigint();

  res.on('finish', () => {
    const durationMs = Number(process.hrtime.bigint() - start) / 1e6;
    console.log(`${req.method} ${req.originalUrl} - ${durationMs.toFixed(2)} ms`);
  });

  next();
});

app.get('/', (req, res) => {
  res.render('index', { title: 'Response Time Logger' });
});

app.use('/ping', pingRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
