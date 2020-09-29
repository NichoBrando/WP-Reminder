("use strict");
const { authHeaders } = require("../../services/authHeader");
const remindsController = require("../controllers/Reminds");
const Joi = require("@hapi/joi");

module.exports = [
  {
    method: "GET",
    path: "/reminds",
    config: {
      auth: "jwt",
      validate: {
        headers: authHeaders,
      },
    },
    handler: remindsController.get,
  },
  {
    method: "POST",
    path: "/reminds",
    config: {
      auth: "jwt",
      validate: {
        payload: Joi.object({
          content: Joi.string().required(),
          date: Joi.string().required(),
        }),
        headers: authHeaders,
      },
    },
    handler: remindsController.create,
  },
  {
    method: "PUT",
    path: "/reminds",
    config: {
      auth: "jwt",
      validate: {
        payload: Joi.object({
          id: Joi.string().required(),
          content: Joi.string(),
          date: Joi.string(),
        }),
        headers: authHeaders,
      },
    },
    handler: remindsController.update,
  },
  {
    method: "DELETE",
    path: "/reminds",
    config: {
      auth: "jwt",
      validate: {
        payload: Joi.object({
          id: Joi.string().required(),
        }),
        headers: authHeaders,
      },
    },
    handler: remindsController.remove,
  },
];
