const { users } = require("../data/users");
const { posts } = require("../data/posts");

const createPost = (req, res) => {
  const newPostId = posts.length + 1;
  const newPostUserId = req.params.userId;
  const newPost = req.body.post;
  // const { title, content } = req.body.post;

  posts.push({
    id: newPostId,
    title: newPost.title,
    content: newPost.content,
    userId: newPostUserId,
  });

  res.status(201).send({
    message: "POST_CREATED",
  });
};

const readPosts = (_, res) => {
  const result = [];

  posts.forEach((post) => {
    const postOwner = findUserById(post.userId);
    result.push({
      userId: postOwner.id,
      userName: postOwner.name,
      postId: post.id,
      postTitle: post.title,
      postContent: post.content,
    });
  });

  res.status(200).send(result);
};

const readUserPosts = (req, res) => {
  const postOwnerId = req.params.userId;
  const result = {};

  const postOwner = findUserById(postOwnerId);
  result.userId = postOwner.id;
  result.userName = postOwner.name;

  const postOwnerPostings = posts
    .filter((post) => post.userId == postOwnerId)
    .map((post) => {
      return {
        postId: post.id,
        postTitle: post.title,
        postContent: post.content,
      };
    });
  result.posting = postOwnerPostings;

  res.status(200).send(result);
};

const updatePost = (req, res) => {
  const postIdToBeUpdated = req.params.postId;
  const postContentToBeUpdated = req.body.content;

  let isPostNotExist = true;
  posts.map((post) => {
    if (post.id == postIdToBeUpdated) {
      post.content = postContentToBeUpdated;
      isPostNotExist = false;
    }
  });

  if (isPostNotExist) {
    res.status(400).send({
      message: "post does not exist.",
    });
    return;
  }

  res.status(204).end();
};

const deletePost = (req, res) => {
  const postIdToBeDeleted = req.params.postId;
  // posts = posts.filter((post) => post.id != reqPostId);

  let findIndexOfPostToBeDeleted = 0;
  let isPostNotExist = true;

  posts.forEach((post, idx) => {
    if (post.id == postIdToBeDeleted) {
      findIndexOfPostToBeDeleted = idx;
      isPostNotExist = false;
    }
  });

  if (isPostNotExist) {
    res.status(400).send({
      message: "post does not exist.",
    });
    return;
  }

  posts.splice(findIndexOfPostToBeDeleted, 1);

  res.status(204).end();
};

function findUserById(userId) {
  return users.find((user) => user.id == userId);
}

module.exports = { createPost, readPosts, readUserPosts, updatePost, deletePost };
