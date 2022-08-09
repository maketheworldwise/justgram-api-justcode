const http = require("http");
const express = require("express");
const { sendProducts } = require("./sendProducts2");

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "/ pong" });
});

app.post("/signup", (req, res) => {
  res.json("signup success");
});

app.post("/login", (req, res) => {
  res.json("login success");
});

app.get("/products", sendProducts);

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("server is listening on PORT 8000");
});
