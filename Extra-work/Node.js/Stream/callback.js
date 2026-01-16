console.log("Callback.js file loaded successfully.");

function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "Sample Data" };
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log("Data received:", data);
}

fetchData(displayData);