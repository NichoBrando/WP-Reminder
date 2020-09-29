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
      validate: {
        payload: Joi.object({
          username: Joi.string().required(),
          password: Joi.string().required(),
          email: Joi.string().required(),
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
      validate: {
        payload: Joi.object({
          username: Joi.string().required(),
          password: Joi.string().required(),
        }),
      },
    },
    handler: userController.login,
  },
  {
    method: "PUT",
    path: "/user",
    config: {
      auth: "jwt",
      validate: {
        payload: Joi.object({
          id: Joi.string(),
          password: Joi.string(),
        }),
        headers: authHeaders,
      },
    },
    handler: userController.update,
  },
  {
    method: "DELETE",
    path: "/user",
    config: {
      cors: false,
      auth: "jwt",
      validate: {
        payload: Joi.object({
          id: Joi.string(),
        }),
        headers: authHeaders,
      },
    },
    handler: userController.remove,
  },
];
