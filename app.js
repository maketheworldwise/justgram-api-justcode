const http = require("http");
const port = 8000;

const express = require("express");
const app = express();
app.use(express.json());

const { createUser, readUsers } = require("./services/usersService");
const { createPost, readPosts, readUserPosts, updatePost, deletePost } = require("./services/postsService");

/*
POST http://localhost:8000/signup

{
    "user" :   {
        "name" : "Kevin Ahn",
        "email" : "maketheworldwise@gmail.com",
        "password" : "password"
  }
}
*/
app.post("/signup", createUser);

/*
GET http://localhost:8000/users
*/
app.get("/users", readUsers);

/*
POST http://localhost:8000/:userId/post

{
    "post" :   {
        "title" : "Kevin Ahn's Post",
        "content" : "This is Kevin Ahn's post!",
    }
}
*/
app.post("/:userId/post", createPost);

/*
GET http://localhost:8000/posts
*/
app.get("/posts", readPosts);

/*
GET http://localhost:8000/:userId/posts
*/
app.get("/:userId/posts", readUserPosts);

/*
PATCH http://localhost:8000/posts/:postId

{
  "content" : "Update content"
}
*/
app.patch("/posts/:postId", updatePost);

/*
DELETE http://localhost:8000/posts/:postId
*/
app.delete("/posts/:postId", deletePost);

const server = http.createServer(app);

server.listen(port, () => {
  console.log("server is listening on PORT 8000");
});
