import http from "node:http";
import path from "node:path";

import express from "express";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.get("/ping", (req, res) => {
  res.send("PONG!");
});

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.emit("chatMessage", "Welcome to Chat!");
  socket.broadcast.emit("chatMessage", "New user connected");

  socket.on("chatMessage", (message) => {
    const data = JSON.parse(message);

    socket.emit("chatMessage", `You: ${data.message}`);
    socket.broadcast.emit("chatMessage", `${data.nickname}: ${data.message}`);
  });
});

server.listen(8080, () => {
  console.log("Server started on port 8080");
});
