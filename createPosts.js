const posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 1,
  },
];

const createPosts = (req, res) => {
  const post = req.body.post;
  posts.push(post);
  // console.log(posts);

  res.status(201);
  res.json({
    message: "POST_CREATED",
  });
};

module.exports = { createPosts };

/*
POST http://localhost:8000/posts

{
    "post" :   {
        "id" : 3,
        "title" : "Kevin Ahn's Post",
        "content" : "This is Kevin Ahn's post!",
        "userId" : 3
  }
}
*/
