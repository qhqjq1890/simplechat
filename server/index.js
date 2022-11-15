const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const prismaSaveMessage = require("./services/prisma-save-message");
const prismaGetMessage = require("./services/prisma-get-message");

app.use(cors());

const server = http.createServer(app);
const CHAT_BOT = "ChatBot";
let chatRoom = "";
let allUsers = [];

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on("join_room", (data) => {
    const { username, room } = data;
    socket.join(room);

    prismaGetMessage(room).then((lastMessages) => {
      socket.emit("last_messages", lastMessages);
    });

    chatRoom = room;
    allUsers.push({ id: socket.id, username, room });
    chatRoomUsers = allUsers.filter((user) => user.room === room);
    socket.to(room).emit("chatroom_users", chatRoomUsers);
    socket.emit("chatroom_users", chatRoomUsers);

    let __createdtime__ = Date.now();
    socket.to(room).emit("receive_message", {
      message: `${username} has joined the chat room`,
      username: CHAT_BOT,
      __createdtime__,
    });

    socket.emit("receive_message", {
      message: `Welecome ${username}`,
      username: CHAT_BOT,
      __createdtime__,
    });

    socket.on("send_message", (data) => {
      const { message, username, room, __createdtime__ } = data;
      let initTime = new Date(__createdtime__);
      io.in(room).emit("receive_message", data);
      prismaSaveMessage(message, username, room, initTime)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    });
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(4000, () => "Server is running on port 4000");
