const fs = require("fs");

// Function to perform synchronous file operations
function performFileSyncOperations() {
    try {
        // Synchronously read the content of 'input.txt'
        const inputData = fs.readFileSync("input.txt", "utf-8");
        console.log(`Content read from 'input.txt':\n${inputData}`);

        // Synchronously write the content to 'output.txt'
        fs.writeFileSync("output.txt", inputData);

        console.log("Content successfully written to 'output.txt'.");
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Call the synchronous file operations function
performFileSyncOperations();
