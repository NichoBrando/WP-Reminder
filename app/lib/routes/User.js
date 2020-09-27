("use strict");
const { authHeaders } = require("../../services/authHeader");
const userController = require("../controllers/User");
const Joi = require("@hapi/joi");

module.exports = [
  {
    method: "POST",
    path: "/user/register",
    config: {
      auth: false,
      cors: false,
      validate: {
        payload: Joi.object({
          username: Joi.string(),
          password: Joi.string(),
        }),
      },
    },
    handler: userController.register,
  },
  {
    method: "POST",
    path: "/user/login",
    config: {
      auth: false,
      cors: false,
      validate: {
        payload: Joi.object({
          username: Joi.string(),
          password: Joi.string(),
        }),
      },
    },
    handler: userController.login,
  },
  {
    method: "PUT",
    path: "/user",
    config: {
      auth: false,
      cors: false,
      validate: {
        payload: Joi.object({
          id: Joi.string(),
          password: Joi.string(),
        }),
      },
    },
    handler: userController.update,
  },
  {
    method: "DELETE",
    path: "/user",
    config: {
      cors: false,
      auth: false,
      validate: {
        payload: Joi.object({
          id: Joi.string(),
        }),
      },
    },
    handler: userController.remove,
  },
];
