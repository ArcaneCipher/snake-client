const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function (playerName) {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8"); // interpret incoming data as text

  // handle connection errors to provide useful information
  conn.on("error", (err) => {
    console.log("Failed to connect to server:", err.message);
    process.exit();
  });

  // unexpected server disconnects to client provide feedback to the player.
  conn.on("end", () => {
    console.log("Disconnected from the server");
    process.exit();
  });

  // register a "data" event handler to receive messages from the server
  conn.on("data", (data) => {
    console.log("the server says:", data);
  });

  // register a "connect" event handler to print a message when connection is established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");

    // Send the player name to the server
    conn.write(`Name: ${playerName}`);
  });

  return conn;
};

module.exports = connect;
