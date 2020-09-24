"use strict";

const Hapi = require("@hapi/hapi");
const fs = require("fs");

let routes = [];

fs.readdirSync(__dirname + "/routes").forEach((file) => {
  routes = routes.concat(require(`./routes/${file}`));
});

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  routes.forEach((route) => {
    server.route(route);
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
