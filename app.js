const http = require("http");
const express = require("express");
const { createUsers } = require("./createUsers");
const { createPosts } = require("./createPosts");

const app = express();
app.use(express.json());

app.post("/signup", createUsers);
app.post("/posts", createPosts);

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("server is listening on PORT 8000");
});
