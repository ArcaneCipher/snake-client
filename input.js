const { MOVEMENTS, CHAT_MESSAGES } = require("./constants");

let connection; // Stores the active TCP connection object.

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn; // Store the passed connection object for later use
  const stdin = process.stdin; // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput); // explicit: js stdin.on("data", (key) => handleUserInput(key));
  return stdin; // return the stdin object so we can use it elsewhere in the program
};

// specify what happens when "data" is received from stdin
const handleUserInput = function (key) {
  // \u0003 maps Ctrl + C to exit the process
  if (key === "\u0003") {
    process.exit();
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
