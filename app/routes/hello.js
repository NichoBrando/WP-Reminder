"use strict";

const helloController = require("../controllers/hello");

module.exports = [
  {
    method: "GET",
    path: "/",
    config: {},
    handler: helloController.hello,
  },
];
