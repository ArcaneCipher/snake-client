const IP = "localhost";
const PORT = 50541;

// Movement mappings for WASD keys
const MOVEMENTS = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
};

// Chat messages mapped to specific keys
const CHAT_MESSAGES = {
  1: "Say: Hello!",
  2: "Say: Watch out!",
  3: "Say: Nice move!",
  4: "Say: Oops!",
  5: "Say: I'm coming for you!",
  6: "Say: GG!",
};

module.exports = {
  IP,
  PORT,
  MOVEMENTS,
  CHAT_MESSAGES
};
