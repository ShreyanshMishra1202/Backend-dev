import express from 'express';
const router = express.Router();

let authorization = (req, res,next) => {
    let token = req.query.token;
    if (token === "admin123") {
        next();
    }
    else{
        return res.status(401).send('Unauthorized access');
    }
};

router.get('/login',authorization, (req, res) => {
    res.send('Login route');
});

router.get('/register', (req, res) => {
    res.send('Register route');
});

export default router;