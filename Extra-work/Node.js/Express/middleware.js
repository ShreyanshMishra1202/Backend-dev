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

    next();
};

export { logfun, userValidation };

import express from 'express';


const app=express();
let mid1=(req,res,next)=>{
    console.log("middleware1")
    next()
}
let mid2=(req,res,next)=>{
    console.log("middleware2")
    next()
}
app.use(mid2)
app.use(mid1)
app.get('/',mid1,mid2,(req,res)=>{
    console.log("req-url->" +req.url)
    res.send("server is running")
})


app.listen(3001,()=>{
    console.log("server is running")
})
