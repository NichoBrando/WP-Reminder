"use strict";
const userModel = require("./models/User");
const { fromMongoose } = require("./services/entityConverter");

module.exports = {
  jwt: {
    key: "very-secret-token-for-application",
    verifyOptions: {
      algorithm: "HS256",
    },
    validate: async (decoded) => {
      if (!decoded._id) {
        return { isValid: false };
      }

      const user = await userModel.findOne({
        _id: decoded._id,
      });

      if (!user) {
        return { isValid: false };
      }

      return { isValid: true, credentials: fromMongoose(user) };
    },
  },
};
