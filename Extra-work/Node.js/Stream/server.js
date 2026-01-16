// // fs module
// // import the fs module

const fs = require('fs');

// // readFile method
// // read the contents of a file named 'example.txt' and log it to the console

// // fs.readFile('example.txt', 'utf8', read)


// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File contents:', data);
// });

// // write

// const dataToWrite = 'Hello, this is a sample text written to the file.';

// fs.writeFile('output.txt', dataToWrite, (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//         return;
//     }
//     console.log('Data written to file successfully.');
// });


// // append

// const dataToAppend = '\nThis text is appended to the file.';

// fs.appendFile('output.txt', dataToAppend, (err) => {
//     if (err) {
//         console.error('Error appending to file:', err);
//         return;
//     }
//     console.log('Data appended to file successfully.');
// });

// // delete

// fs.unlink('output.txt', (err) => {
//     if (err) {
//         console.error('Error deleting file:', err);
//         return;
//     }
//     console.log('File deleted successfully.');
// });

// // Note: Ensure that 'example.txt' exists in the same directory as this script for the readFile operation to work.// Promises module
// // import the promises.js module

// const { userDetails } = require('./promises');

// // use the userDetails function to fetch user details for userId 2

// userDetails(2)
//     .then(user => {
//         console.log("User details received:", user);
//     })
//     .catch(error => {
//         console.error("Error fetching user details:", error.message);
//     });


// console.log("Promises.js module loaded successfully.");

// // readLogFile()
// function readLogFile() {
//     fs.readFile('log.txt', 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading log file:', err);
//             return;
//         }
//         console.log('Log file contents:', data);
//     });
// }

// // call readLogFile function to read contents of log.txt

// readLogFile();

// // writeLogFile()
// function writeLogFile(message) {
//     fs.writeFile('log.txt', message, (err) => {
//         if (err) {
//             console.error('Error writing to log file:', err);
//             return;
//         }
//         console.log('Log file written successfully.');
//     });
// }

// // call writeLogFile function to write a message to log.txt

// writeLogFile('This is a log message.');

// // appendLogFile()
// function appendLogFile(message) {
//     fs.appendFile('log.txt', message, (err) => {
//         if (err) {
//             console.error('Error appending to log file:', err);
//             return;
//         }
//         console.log('Log file appended successfully.');
//     });
// }

// // call appendLogFile function to append a message to log.txt

// appendLogFile('\nThis is an appended log message.');

// // deleteLogFile()
// function deleteLogFile() {
//     fs.unlink('log.txt', (err) => {
//         if (err) {
//             console.error('Error deleting log file:', err);
//             return;
//         }
//         console.log('Log file deleted successfully.');
//     });
// }

// // call deleteLogFile function to delete log.txt

// deleteLogFile();

// Note: Ensure that 'log.txt' exists in the same directory as this script for the readLogFile operation to work.

// sync version of readFile

// readFileSync method

try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log('Synchronous file contents:', data);
} catch (err) {
    console.error('Error reading file synchronously:', err);
}
// writeFileSync method

const syncDataToWrite = 'This is synchronous write to the file.';

try {
    fs.writeFileSync('syncOutput.txt', syncDataToWrite);
    console.log('Data written to file synchronously successfully.');
} catch (err) {
    console.error('Error writing to file synchronously:', err);
}

// appendFileSync method

const syncDataToAppend = '\nThis is synchronous append to the file.';

try {
    fs.appendFileSync('syncOutput.txt', syncDataToAppend);
    console.log('Data appended to file synchronously successfully.');
} catch (err) {
    console.error('Error appending to file synchronously:', err);
}