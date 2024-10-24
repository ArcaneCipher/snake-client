const connect = require("./client");
const setupInput = require("./input");

// Get the player name from the command-line arguments
const playerName = process.argv[2]?.trim(); // Trim whitespace

// Ensure the name is non-empty, has 3 or fewer characters, and is alphanumeric
if (
  !playerName ||
  playerName.length > 3 ||
  !/^[a-zA-Z0-9]+$/.test(playerName)
) {
  console.log("Error: Player name must be 1 to 3 alphanumeric characters.");
  process.exit();
}

console.log("Connecting ...");
const conn = connect(playerName); // Store the connection object
setupInput(conn); // Pass the connection to setupInput
