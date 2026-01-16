const express=require('express');
const app=express();
const port =3000;
const user=require('./data');

app.get('/',(req,res)=>{
    res.status(200).send('Hello World from Express.js');
});


app.get('/userdetails',(req,res)=>{
    res.json(user);
});

app.get('/userdetails/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const userdetails=user.find(user=>user.id===id);
    if(!userdetails){
        res.status(404).json({message:"User not found"});
    }
    else{
        res.json(userdetails);
    }
});


app.get('/searchage',(req,res)=>{
    const filteredUsers=user.filter(user=>user.age>=25);
    res.json(filteredUsers);
});

app.get('/nameWithMr',(req,res)=>{
    const modifiedUsers=user.map(user=>{
        return {...user,name:`Mr. ${user.name}`};
    })
    res.json(modifiedUsers);
});

// create a route which display user with if user is male add "Mr." before name and if female add "Ms." before name
app.get('/nameWithTitle',(req,res)=>{
    const modifiedUsers=user.map(user=>{
        if(user.gender=="Male"){
            return {...user,name:`Mr. ${user.name}`};
        }
        else{
            return {...user,name:`Ms. ${user.name}`};
        }
    })
    res.json(modifiedUsers);
});

app.get('/user/profile',(req,res)=>{
    res.json({message:"This is user profile"});
});

app.get('/user/page',(req,res)=>{
    const page=req.query.page;
    const limit=req.query.limit;
    const startindex=(page-1)*limit;
    const endindex=page*limit;
    const paginatedUsers=user.slice(startindex,endindex);
    res.json(paginatedUsers);
});

app.get('/user/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const userdetails=user.find(user=>user.id===id);
    if(!userdetails){
        res.status(404).json({message:"User not found"});
    }
    else{
        res.json(userdetails);
    }
});

app.get('/users/:id/profile',(req,res)=>{
    const id=parseInt(req.params.id);
    const tab=req.query.tab;
    const lang=req.query.lang;
    if(tab=="settings"){
        res.json({message:`language is ${lang}`});
    }
    else if(tab=="posts"){
        res.json({message:`tab is ${tab}`});
    }
    else if(tab=="info"){
        res.json({message:`User ID is ${id}`});
    }
    else{
        res.json({message:"Invalid tab"});
    }
});


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});