const Joi = require("@hapi/joi");

const authHeaders = Joi.object({
  authorization: Joi.string()
    .required()
    .description("JWT authentication token"),
}).unknown();

module.exports = {
  authHeaders,
};
