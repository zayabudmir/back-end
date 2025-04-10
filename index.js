import express, { json } from "express";
import cors from "cors";
import { userRouter } from "./routes/user.js";
import { orderRouter } from "./routes/order.js";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/orders", orderRouter);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
