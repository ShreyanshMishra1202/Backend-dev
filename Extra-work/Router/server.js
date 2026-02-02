import express from 'express';
import userRoute from './router/userRoute.js';
import regRoute from './router/RegistrationRoute.js';

const app = express();
const PORT = 3000;

app.use('/api', userRoute);
app.use('/auth', regRoute);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
