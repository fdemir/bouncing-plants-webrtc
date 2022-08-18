import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const PORT = 3030;

app.get("/", (req, res) => {
  res.send(
    "A connection is established through a discovery and negotiation process called signaling!"
  );
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(PORT, () => console.log(`listening on *:${PORT}`));
