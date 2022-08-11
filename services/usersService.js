const { users } = require("../data/users");

const createUser = (req, res) => {
  // 비구조화 할당을 사용하지 않는 방법
  const newUser = req.body.user;
  const newUserId = users.length + 1;

  users.push({
    id: newUserId,
    name: newUser.name,
    email: newUser.email,
    password: newUser.password,
  });

  res.status(201).send({
    message: "USER_CREATED",
  });
};

const readUsers = (_, res) => {
  res.status(200).send(users);
};

module.exports = { createUser, readUsers };
