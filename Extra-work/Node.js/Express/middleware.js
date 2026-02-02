import fs from "fs";

const logfun = (req, res, next) => {
    let logText = `timestamp: ${new Date().toString()} url ${req.url} method ${req.method}\n`;
    fs.appendFileSync("./log.txt", logText);
    console.log(logText);
    next();
};

const userValidation = (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: "username and password required"
        });
    }

    if (password.length < 6) {
        return res.status(400).json({
            message: "password is too small"
        });
    }

    next(); // ✅ VERY IMPORTANT
};

export { logfun, userValidation };