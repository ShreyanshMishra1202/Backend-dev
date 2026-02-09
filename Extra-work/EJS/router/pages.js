app.get("/", (req, res) => {
  res.render("index");
});

//render edit page
app.get("/editpage/:id",(req,res)=>{
  const id = req.params.id;

  const user = userData.find((ele)=> ele.id==id);
  console.log(user)

  res.render("edit",{userData:[user]})
})

// get user
app.get("/user", (req, res) => {
  res.render("user", { userData });
});