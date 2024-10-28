const connect = require("./client");
const setupInput = require("./input");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to prompt the user for their name
const promptPlayer = () => {
  rl.question("Enter your player name (max 3 characters): ", (playerName) => {
    // Validate player name immediately
    if (
      !playerName ||
      playerName.length > 3 ||
      !/^[a-zA-Z0-9]+$/.test(playerName)
    ) {
      console.log("Error: Player name must be 1 to 3 alphanumeric characters.");
      rl.close();
      process.exit();
    }

    console.log(`Starting game as ${playerName}.`);

    rl.close(); // Close the readline interface

    // Connect to the server and set up input with the chosen player name
    console.log("Connecting ...");
    const conn = connect(playerName); // Store the connection object
    setupInput(conn); // Pass the connection to setupInput
  });
};

// Start the player prompt
promptPlayer();
