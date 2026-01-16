console.log("This is the errorhandling.js file in the Stream directory.");

// Example function to demonstrate error handling in streams
const { Readable } = require('stream');

const readableStream = new Readable({
  read(size) {
    // Simulate an error condition
    this.emit('error', new Error('An error occurred in the stream!'));
  }
});

readableStream.on('data', (chunk) => {
  console.log(`Received chunk: ${chunk}`);
});

readableStream.on('error', (err) => {
  console.error(`Stream error: ${err.message}`);
});

// Start reading from the stream
readableStream.read();