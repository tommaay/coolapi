const express = require("express");

const configureMiddleware = require("../config/middleware.js");
const doubler = require("../common/doublerMiddleware.js");
const productsRouter = require("../products/productsRouter");
const clientsRouter = require("../clients/clientsRouter");
const ordersRouter = require("../orders/ordersRouter");

const server = express();

// middleware

configureMiddleware(server);
// require('../config/middleware.js')

// routes
// configureRoutes(server);

server.use("/products", productsRouter);
server.use("/clients", clientsRouter);
server.use("/orders", ordersRouter);

server.get("/", (req, res) => {
  res.send(`sanity check success, double: ${req.double}`);
});

server.get("/double", doubler, (req, res) => {
  res.send(`the value is ${req.query.number} and the double is ${req.double}`);
});

server.get("/:id", (req, res) => {
  res.send(`sanity check success, id: ${req.params.id}`);
});

module.exports = server;

`http://localhost:5000/?number=3`;
