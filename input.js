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
  switch (key) {
    case "\u0003": // \u0003 maps Ctrl + C to exit the process
      process.exit();
      break;

    // Add user input handling for movement
    case "w":
      connection.write("Move: up");
      break;
    case "a":
      connection.write("Move: left");
      break;
    case "s":
      connection.write("Move: down");
      break;
    case "d":
      connection.write("Move: right");
      break;

    // Canned chat messages
    case "1":
      connection.write("Say: Hello!");
      break;
    case "2":
      connection.write("Say: Watch out!");
      break;
    case "3":
      connection.write("Say: Nice move!");
      break;
    case "4":
      connection.write("Say: Oops!");
      break;
    case "5":
      connection.write("Say: I'm coming for you!");
      break;
    case "6":
      connection.write("Say: GG!");
      break;

    default:
      // Handle any other unexpected input (optional)
      break;
  }
};

module.exports = setupInput;
