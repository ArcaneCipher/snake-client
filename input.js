// Stores the active TCP connection object.
let connection;

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
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }

  // Add user input handling for movement
  switch (key) {
    case 'w':
      connection.write("Move: up");
      break;
    case 'a':
      connection.write("Move: left");
      break;
    case 's':
      connection.write("Move: down");
      break;
    case 'd':
      connection.write("Move: right");
      break;
    case '\u0003':
      process.exit();
      break;
  }
  
};

module.exports = setupInput;
