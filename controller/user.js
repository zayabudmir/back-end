import { v4 as uuidv4 } from "uuid";
let users = [];

export const postCreateUser = (req, res) => {
  const { username, gender, age, email, phone } = req.body;
  const newUser = {
    id: uuidv4(),
    username,
    gender,
    age,
    email,
    phone,
  };
  users.push(newUser);

  res.send({
    success: true,
    message: "User created",
    user: newUser,
  });
};

export const getUsers = (_, res) => {
  res.send(users);
};

export const getUserById = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).send({
      success: false,
      message: "User not found",
    });
  }

  res.send({
    success: true,
    user,
  });
};

export const deleteUserById = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send({
    success: true,
    message: "User deleted",
  });
};

export const putUserByIdUpdate = (req, res) => {
  const { id } = req.params;
  const { username, email, gender, age, phone } = req.body;

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).send({
      success: false,
      message: "User not found",
    });
  }

  user.username = username;
  user.email = email;
  user.gender = gender;
  user.age = age;
  user.phone = phone;

  res.send({
    success: true,
    message: "User updated",
    user,
  });
};
