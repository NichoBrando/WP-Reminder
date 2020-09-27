("use strict");
const { authHeaders } = require("../../services/authHeader");
const remindsController = require("../controllers/Reminds");
const Joi = require("@hapi/joi");

module.exports = [
  {
    method: "GET",
    path: "/reminds/{id}",
    config: {
      auth: false,
      cors: false,
      /*validate: {
        params: {
          id: Joi.string().required().description("User ID"),
        },
      },*/
    },
    handler: remindsController.get,
  },
  {
    method: "POST",
    path: "/reminds",
    config: {
      auth: false,
      cors: false,
      validate: {
        payload: Joi.object({
          userId: Joi.string(),
          content: Joi.string(),
        }),
      },
    },
    handler: remindsController.create,
  },
  {
    method: "PUT",
    path: "/reminds",
    config: {
      auth: false,
      cors: false,
      validate: {
        payload: Joi.object({
          userId: Joi.string(),
          content: Joi.string(),
        }),
      },
    },
    handler: remindsController.update,
  },
  {
    method: "DELETE",
    path: "/reminds",
    config: {
      auth: false,
      cors: false,
      validate: {
        payload: Joi.object({
          userId: Joi.string(),
          contentId: Joi.string(),
        }),
      },
    },
    handler: remindsController.remove,
  },
];
