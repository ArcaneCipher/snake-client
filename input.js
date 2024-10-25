const { MOVEMENTS, CHAT_MESSAGES } = require("./constants");

let connection; // Stores the active TCP connection object.
let currentDirection = null;
let movementInterval = null;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn; // Store passed connection object for later use
  const stdin = process.stdin; // create variable for stdin object
  stdin.setRawMode(true); // Raw Mode allows listening for keypresses
  stdin.setEncoding("utf8"); // interpret incoming data as text
  stdin.resume(); // resume stdin so program listens for input
  stdin.on("data", handleUserInput);

  return stdin; // return stdin object to use it elsewhere
};

// specify what happens when "data" is received from stdin
const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit(); // Ctrl + C to exit the process
  }

  // Check for movement keys (w, a, s, d)
  if (MOVEMENTS[key]) {
    connection.write(MOVEMENTS[key]);
  }

  // Check for chat message keys (1, 2, 3, etc.)
  if (CHAT_MESSAGES[key]) {
    connection.write(CHAT_MESSAGES[key]);
  }
};

module.exports = setupInput;
