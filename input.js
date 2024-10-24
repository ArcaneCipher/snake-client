const { MOVEMENTS, CHAT_MESSAGES } = require("./constants");

let connection; // Stores the active TCP connection object.

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn; // Store passed connection object for later use
  const stdin = process.stdin; // create variable for stdin object
  stdin.setRawMode(true); // Raw Mode allows listening for keypresses
  stdin.setEncoding("utf8"); // interpret incoming data as text
  stdin.resume(); // resume stdin so program listens for input
  stdin.on("data", handleUserInput); // could be explicit: js stdin.on("data", (key) => handleUserInput(key));
  return stdin; // return stdin object to use it elsewhere
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
