import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 8080 });

const clients = [];

server.on("connection", (socket) => {
  console.log("Client connected");

  clients.push(socket);

  for (const client of clients) {
    if (client === socket) {
      client.send("Welcome to Chat!");
    } else {
      client.send("New user connected");
    }
  }

  socket.on("message", (event) => {
    const data = JSON.parse(event.toString("utf-8"));

    for (const client of clients) {
      if (client === socket) {
        client.send(`You: ${data.message}`);
      } else {
        client.send(`${data.nickname}: ${data.message}`);
      }
    }
  });

  socket.on("close", () => {
    for (const client of clients) {
      if (client !== socket) {
        client.send(`User disconnected`);
      }
    }
  });
});

console.log("Server started on port 8080");
