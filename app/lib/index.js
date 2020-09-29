"use strict";
const HapiAuthJWT = require("hapi-auth-jwt2");
const HauteCouture = require("haute-couture");
const Package = require("../../package.json");
const Config = require("../config");

exports.plugin = {
  pkg: Package,
  register: async (server, options) => {
    await server.register(HapiAuthJWT);

    server.auth.strategy("jwt", "jwt", {
      ...Config.jwt,
    });
    server.auth.default("jwt");
    await HauteCouture.using()(server, options);
  },
};
