import express, { json } from "express";
import { userRouter } from "./routes/user.js";

const app = express();
const port = 8080;

app.use(json());

let orders = [];
let users = [];

app.use(userRouter);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
