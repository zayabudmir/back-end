import express from "express";
import {
  deleteOrderById,
  getOrderById,
  getOrders,
  postCreateOrder,
  putOrderByIdUpdate,
} from "../controller/order.js";

export const orderRouter = express.Router();

orderRouter
  .post("/", postCreateOrder)
  .get("/", getOrders)
  .get("/:id", getOrderById)
  .delete("/:id", deleteOrderById)
  .put("/:id", putOrderByIdUpdate);
