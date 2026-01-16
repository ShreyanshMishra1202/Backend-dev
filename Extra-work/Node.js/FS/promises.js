function userDetails(userId) {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation, e.g., fetching user details from a database
        setTimeout(() => {
            const users = {
                1: { name: 'Alice', age: 30 },
                2: { name: 'Bob', age: 25 },
                3: { name: 'Charlie', age: 35 }
            };

            const user = users[userId];
            if (user) {
                resolve(user);
            } else {
                reject(new Error('User not found'));
            }
        }, 1000);
    });
}
console.log("Promises.js file loaded successfully.");

userDetails(2)
    .then(user => {
        console.log("User details received:", user);
    })
    .catch(error => {
        console.error("Error fetching user details:", error.message);
    });

