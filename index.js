import express, { json } from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 8080;

app.use(json());

let users = [];

// CREATE
app.post("/user/create", (request, response) => {
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
});

// ALL USERS
app.get("/users", (_, response) => {
  response.send(users);
});

// ONE USER (ID)
app.get("/user", (request, response) => {
  const { id } = request.body;
  console.log(request.body, "request");
  const user = users.find((user) => user.id === id);

  if (!user) {
    return response.status(404).send({
      success: false,
      message: "User not found",
    });
  }

  response.send(user);
});

// DELETE
app.delete("/user/delete", (request, response) => {
  const { id } = request.body;
  users = users.filter((user) => user.id !== id);
  response.send({
    success: true,
    message: "User deleted",
  });
});

// UPDATE
app.put("/user/update", (request, response) => {
  const { id, username, email, gender, age, phone } = request.body;

  users.map((user) => {
    if (user.id === id) {
      user.username = username;
      user.email = email;
      user.gender = gender;
      user.age = age;
      user.phone = phone;
    }
    return user;
  });

  response.send({
    success: true,
    message: "User updated",
  });
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
