const connect = require("./client");
const setupInput = require("./input");

// Get the player name from the command-line arguments
const playerName = process.argv[2];

// Validate the player name to be max 3 characters
if (!playerName || playerName.length > 3) {
  console.log("Error: Player name must be provided and be 3 characters or fewer.");
  process.exit();
}

console.log("Connecting ...");
const conn = connect(playerName); // Store the connection object
setupInput(conn); // Pass the connection to setupInput