import express from "express";
import methodOverride from "method-override"

const app = express();

app.set("view engine", "ejs");
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended:true}))


let userData = [
  { id: 1, name: "amit", age: 23,},
];

// render index page


// add user
app.post("/api/user",(req,res)=>{

    const {name, age} = req.body;

    let newUserData = {
        id: userData.length+1,
        name,
        age
    }
    userData.push(newUserData);
    res.redirect('/user')

})

//delete user
app.delete("/api/user/:id",(req,res)=>{

    const userid = req.params.id;

    const useridx = userData.findIndex((ele)=> ele.id==userid);

    if(useridx == -1){
        return res.send("user not found")
    }

    userData.splice(useridx,1);

    res.redirect("/user")

})

app.put("/api/user/:id",(req,res)=>{
    const {name,age} = req.body;
})

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000/");
});


// staic server
//csr
//ssr
// template engine
// ejs, pug, hbs
//seo friendly
