import express, { json } from "express";
import { userRouter } from "./routes/user.js";
import { orderRouter } from "./routes/order.js";

const app = express();
const port = 8080;

app.use(express.json());

app.use("/users", userRouter);
app.use("/orders", orderRouter);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
