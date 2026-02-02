import express from 'express';
const router = express.Router();

let logging = (req, res, next) => {
    console.log(`Console log in middleware`);
    next();
};

router.use(logging);

router.get('/', logging,(req, res) => {
    res.send('Welcome to the API');
});
router.get('/user',logging, (req, res) => {
    res.send('User route');
});

// Remove the following line
// router.listen(3000,() => {
//     console.log(`Server running at http://localhost:3000/`);
// });

export default router;