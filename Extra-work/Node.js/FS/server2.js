const fs=require("fs");
const http=require("http");

// fs.readFile("../steam/input.txt","utf-8",(err,data)=>{
//     if(err){
//         console.error("Error reading file:",err);
//         return;
//     }
//     console.log("File content:",data);
// });






// const readSteam=fs.createReadStream("../steam/input.txt","utf-8",{highWaterMark:64*1024});

// readSteam.on("data",(chunk)=>{
//     console.log("New chunk received:");
//     console.log(chunk);
// });

// readSteam.on("end",()=>{
//     console.log("No more data to read.");
// });

// readSteam.on("error",(err)=>{
//     console.error("Error reading stream:",err);
// });





const writeSteam=fs.createWriteStream("output.txt","utf-8");

writeSteam.write("Hello, this is the first line.\n");
writeSteam.write("This is the second line.\n");
writeSteam.end("This is the last line.\n");

writeSteam.on("finish",()=>{
    console.log("All data has been written to output.txt");
});

writeSteam.on("error",(err)=>{
    console.error("Error writing to stream:",err);
});







// // append
// const writeSteam=fs.createWriteStream("output.txt","utf-8",{encoding:"utf-8",flags:"a"});
// fs.appendFile('output.txt', '\nAppended line.', (err) => {
//     if (err) {
//         console.error('Error appending to file:', err);
//         return;
//     }
//     console.log('Data appended successfully.');
// });







// // delete
// fs.unlink('output.txt', (err) => {
//     if (err) {
//         console.error('Error deleting file:', err);
//         return;
//     }
//     console.log('File deleted successfully.');
// });

