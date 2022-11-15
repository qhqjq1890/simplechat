const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
  },
});

const CHAT_BOT = "ChatBot";
let chatRoom = "";
let allUsers = [];

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on("new_message", (data) => {
    socket.broadcast.emit("message", data);
    console.log(data);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(4000, () => "Server is running on port 4000");
