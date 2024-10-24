const net = require("net");
const config = {
  host: "localhost", // IP address here,
  port: 50541, // PORT number here,
};

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection(config); // gives us a Socket

  conn.setEncoding("utf8"); // interpret incoming data as text

  // register a "data" event handler to receive messages from the server
  conn.on("data", (data) => {
    console.log("the server says:", data);
  });

  // register a "connect" event handler to print a message when connection is established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  // register a "name" to print a name
  conn.write("Name: SNK"); // Replace 'SNK' with your desired three-character name

  return conn;
};

module.exports = connect