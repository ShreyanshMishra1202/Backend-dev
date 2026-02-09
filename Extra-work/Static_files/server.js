import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
const app=express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send("Home routing")
});

app.listen(3456,()=>{
    console.log("server is running on port 3456")
})