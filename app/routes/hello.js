("use strict");
const { authHeaders } = require("../services/authHeader");
const helloController = require("../controllers/hello");

module.exports = [
  {
    method: "GET",
    path: "/",
    config: {
      auth: false,
    },
    handler: helloController.hello,
  },
];
