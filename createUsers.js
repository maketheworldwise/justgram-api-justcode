const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
];

const createUsers = (req, res) => {
  const user = req.body.user;
  users.push(user);
  // console.log(users);

  res.status(201);
  res.json({
    message: "USER_CREATED",
  });
};

module.exports = { createUsers };

/*
POST http://localhost:8000/signup

{
    "user" :   {
        "id" : 3,
        "name" : "Kevin Ahn",
        "email" : "maketheworldwise@gmail.com",
        "password" : "password"
  }
}
*/
