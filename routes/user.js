import express from "express";
import {
  createUser,
  userUpdate,
  getUserById,
  getUserDelete,
  getUsers,
} from "../controller/user.js";

export const userRouter = express.Router();

userRouter
  .post("/", createUser)
  .get("/", getUsers)
  .get("/:id", getUserById)
  .delete("/:id", getUserDelete)
  .put("/", userUpdate);
