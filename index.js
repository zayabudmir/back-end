import express, { json } from "express";

const port = 8080;

const app = express();

app.use(json());

app.get("/", (req, res) => {});

app.get("/user", (req, res) => {
  const { username, password } = req.body;

  if (username.length < 5) {
    res
      .status(400)
      .send({
        success: false,
        message: "username zaaval 5 deesh temdegt orson bh ysto",
      })
      .end();
  }

  if (password.length < 8) {
    res
      .status(400)
      .send({
        success: false,
        message: "password zaaval 8 deesh temdegt orson bh ysto",
      })
      .end();
  }

  res.send({ sucess: true }).end();
});

app.listen(port, () => {
  console.log(`Server running atv http://localhost:${port}/`);
});
