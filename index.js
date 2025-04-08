import express, { json, request, response } from "express";
import { v4 as uuidv4 } from "uuid";

const port = 8080;

const app = express();

app.use(json());

let users = [];

app.post("/user/create", (request, response) => {
  const { username, gender, age, email } = request.body;
  console.log(username, gender, age, email, "body");
  users.push({
    username,
    gender,
    age,
    email,
    id: uuidv4(),
  });

  console.log(users, "users");
  response.send({
    success: true,
    message: "Done",
  });
});

app.get("/users", (_, response) => {
  response.send(users);
});

app.get("/user", (request, response) => {
  const { id } = request.body;
  console.log(request.body, "request");
  const user = users.find((user) => {
    return user.id == id;
  });

  console.log(user);
  response.send(user);

  // response.send(user[0]);

  // const filter = users.filter((value) => value.email === email);

  // response.send(filter);
});

app.delete("/user/delete", (request, response) => {
  const { id } = request.body;
  users = users.filter((user) => user.id !== id);
  response.send({
    success: true,
    message: "removed",
  });
});

app.put("/user/update", (req, res) => {
  const { id, username, email, gender, age } = req.body;

  users.map((user) => {
    if (user.id === id) {
      user.username = username;
      user.email == email;
      user.gender == gender;
      user.age == age;
    }
    return;
  });

  // const { id } = request.body;
  // users = users.filter((user) => user.id == id);
  response.send({
    success: true,
    message: "uo",
  });
});

app.get("/", (request, response) => {
  response.send("hello world");
});

app.listen(port, () => {
  console.log(`Server running atv http://localhost:${port}/`);
});
