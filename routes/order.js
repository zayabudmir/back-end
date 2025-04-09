import express from "express";

import {
  createOrder,
  getOrderById,
  getOrderDelete,
  getOrders,
  orderUpdate,
} from "../controller/order.js";

export const orderRouter = express.Router();

orderRouter
  .post("/", createOrder)
  .get("/", getOrders)
  .get("/:id", getOrderById)
  .delete("/:id", getOrderDelete)
  .put("/", orderUpdate);
