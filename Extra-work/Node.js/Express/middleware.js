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