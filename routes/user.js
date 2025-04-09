import express from "express";
import {
  postCreateUser,
  getUsers,
  getUserById,
  deleteUserById,
  putUserByIdUpdate,
} from "../controller/user.js";

export const userRouter = express.Router();

userRouter
  .post("/", postCreateUser)
  .get("/", getUsers)
  .get("/:id", getUserById)
  .delete("/:id", deleteUserById)
  .put("/:id", putUserByIdUpdate);
