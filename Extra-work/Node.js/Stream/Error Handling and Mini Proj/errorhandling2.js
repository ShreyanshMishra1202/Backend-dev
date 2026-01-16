// console.log("Executing a.js in the Stream directory.");
// const { error } = require("console");


// try {
//   throw new Error("This is a thrown error from a.js in the Stream directory.");
// } catch (err) {
//   console.error(`Caught an error: ${err.message}`);
// }

const http=require("http");

const server=http.createServer((req,res)=>{

    console.log(req.url);
    try{
        throw new Error("This is a thrown error from a.js in the Stream directory.");
    }catch(err){
        console.error(`Caught an error: ${err.message}`);
    }
    res.end("Hello World");
});

server.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});