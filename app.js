const http = require("http");
const express = require("express");
const { createUsers } = require("./users");
const { createPosts, readPosts, updatePosts, deletePosts } = require("./posts");

const app = express();
app.use(express.json());

app.post("/signup", createUsers);
app.post("/posts", createPosts);
app.get("/posts", readPosts);
app.patch("/posts/:postId", updatePosts);
app.delete("/posts/:postId", deletePosts);

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("server is listening on PORT 8000");
});
