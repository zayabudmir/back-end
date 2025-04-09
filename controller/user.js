import { v4 as uuidv4 } from "uuid";
const users = [];

export const createUser = (request, response) => {
  const { username, gender, age, email, phone } = request.body;

  const newUser = {
    id: uuidv4(),
    username,
    gender,
    age,
    email,
    phone,
  };
  users.push(newUser);

  console.log(users, "users");
  response.send({
    success: true,
    message: "User created",
    user: newUser,
  });
};

export const getUsers = (_, response) => {
  response.send(users);
};

export const getUserById = (request, response) => {
  const { id } = request.params;
  console.log(request.body, "request");
  const user = users.find((user) => user.id === id);

  if (!user) {
    return response.status(404).send({
      success: false,
      message: "User not found",
    });
  }

  response.send(user);
};

export const getUserDelete = (request, response) => {
  const { id } = request.params;
  users = users.filter((user) => user.id !== id);
  response.send({
    success: true,
    message: "User deleted",
  });
};

export const userUpdate = (request, response) => {
  const { id, username, email, gender, age, phone } = request.body;
  let result = {};
  users.map((user) => {
    if (user.id === id) {
      user.username = username;
      user.email = email;
      user.gender = gender;
      user.age = age;
      user.phone = phone;
      result = { ...user };
    } else {
    }
    return user;
  });

  response.send({
    success: true,
    data: result,
    message: "User updated",
  });
};
