const express = require("express");
const { messageRoutes } = require("./message.route");

const routes = express.Router();

routes.use("/messages", messageRoutes);

module.exports = {
  routes,
};
