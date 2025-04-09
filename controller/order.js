import { v4 as uuidv4 } from "uuid";
let orders = [];

export const postCreateOrder = (req, res) => {
  const { userId, food, price } = req.body;
  const newOrder = {
    id: uuidv4(),
    userId,
    food,
    price,
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  orders.push(newOrder);

  res.send({
    success: true,
    message: "Order created",
    order: newOrder,
  });
};

export const getOrders = (_, res) => {
  res.send(orders);
};

export const getOrderById = (req, res) => {
  const { id } = req.params;
  const order = orders.find((order) => order.id === id);

  if (!order) {
    return res.status(404).send({
      success: false,
      message: "Order not found",
    });
  }

  res.send({
    success: true,
    order,
  });
};

export const deleteOrderById = (req, res) => {
  const { id } = req.params;
  orders = orders.filter((order) => order.id !== id);
  res.send({
    success: true,
    message: "Order deleted",
  });
};

export const putOrderByIdUpdate = (req, res) => {
  const { id } = req.params;
  const { food, price } = req.body;

  const order = orders.find((order) => order.id === id);

  if (!order) {
    return res.status(404).send({
      success: false,
      message: "Order not found",
    });
  }

  order.food = food;
  order.price = price;
  order.updatedAt = new Date();

  res.send({
    success: true,
    message: "Order updated",
    order,
  });
};
