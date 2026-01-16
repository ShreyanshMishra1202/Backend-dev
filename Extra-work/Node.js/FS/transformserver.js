// Load required modules
const fs = require("fs");
const path = require("path");
const http = require("http");

// Define file paths relative to this script
const inputPath = path.join(__dirname, "input.txt");
const outputPath = path.join(__dirname, "output.txt");

// Create a read stream (input.txt must exist in the same folder)
const readStream = fs.createReadStream(inputPath, { encoding: "utf-8" });

// Create a write stream (append mode)
const writeStream = fs.createWriteStream(outputPath, { encoding: "utf-8", flags: "a" });

// Pipe data from input.txt to output.txt
readStream.pipe(writeStream);

// Handle stream events
readStream.on("error", (err) => {
    console.error("Error reading file:", err.message);
});

writeStream.on("error", (err) => {
    console.error("Error writing file:", err.message);
});

writeStream.on("finish", () => {
    console.log("Data copied successfully from input.txt to output.txt");
});

// Optional: Create a simple HTTP server to serve the output file
const server = http.createServer((req, res) => {
    fs.readFile(outputPath, "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error reading output file");
            return;
        }
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});