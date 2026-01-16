const express=require('express');
const app=express();
const port =3000;

app.get('/',(req,res)=>{
    res.status(200).send('Server is running');
});

app.get('/about',(req,res)=>{
    // send json data
    const data={message:"This is the about page",version:"1.0.0"};
    res.status(200).json(data);
});

app.get('/user',(req,res)=>{
    const user={name:"John",age:30};
    res.status(200).json(user);
});

app.get('/error',(req,res)=>{
    try{
        throw new Error('Intentional Error for testing');
    }catch(err){
        res.status(500).json({error:err.message});
    }
});

app.get('/delay',(req,res)=>{
    setTimeout(()=>{
        res.status(200).send('This response was delayed by 5 seconds');
    },5000);
});

app.get('/headers',(req,res)=>{
    const headers=req.headers;
    res.status(200).json(headers);
});

app.listen(3000,()=>{
    console.log(`Server is listening on port ${port}`);
});