const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve Path to your Angular build
const staticPath = path.join(
  __dirname,
  "../whiteboard-frontend/dist/whiteboard-frontend/browser"
);
app.use(express.static(staticPath));

// Health check
app.get("/health", (req, res) => res.json({ ok: true }));

// Catch-all route
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// WebSocket setup
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let canvasState = [];
let chatHistory = [];

wss.on("connection", (ws) => {
  // Send initial canvas and chat state
  ws.send(JSON.stringify({ type: "init", payload: canvasState }));
  ws.send(JSON.stringify({ type: "chat-init", payload: chatHistory }));

  ws.on("message", (message) => {
    const msg = JSON.parse(message);
    switch (msg.type) {
      case "draw":
        canvasState.push(msg.payload);
        broadcast({ type: "draw", payload: msg.payload }, ws);
        break;
      case "clear":
        canvasState = [];
        broadcast({ type: "clear" }, ws);
        break;
      case "chat":
        chatHistory.push(msg.payload);
        broadcast({ type: "chat", payload: msg.payload }, ws);
        break;
    }
  });
});

function broadcast(msg, sender) {
  const data = JSON.stringify(msg);
  wss.clients.forEach((c) => {
    if (c !== sender && c.readyState === WebSocket.OPEN) {
      c.send(data);
    }
  });
}

// Catch-all route for Angular routing
app.use((req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`WebSocket server running on ws://localhost:${PORT}`);
});
