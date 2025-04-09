import { v4 as uuidv4 } from "uuid";
const orders = [];

export const createOrder = (request, response) => {
  const { userId, food, price } = request.body;

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

  response.send({
    success: true,
    message: "Order created",
    order: newOrder,
  });
};

export const getOrders = (_, response) => {
  response.send(orders);
};

export const getOrderById = (request, response) => {
  const { id } = request.body;
  const order = orders.find((order) => order.id === id);

  if (!order) {
    return response.status(404).send({
      success: false,
      message: "Order not found",
    });
  }

  response.send(order);
};

export const getOrderDelete = (request, response) => {
  const { id } = request.body;
  orders = orders.filter((order) => order.id !== id);
  response.send({
    success: true,
    message: "Order deleted",
  });
};

export const orderUpdate = (request, response) => {
  const { id, food } = request.body;
  let result = {};
  orders.map((order) => {
    if (order.id === id) {
      order.food = food;
      result = { ...order };
    }
    return order;
  });

  response.send({
    success: true,
    data: result,
    message: "Order updated",
  });
};
