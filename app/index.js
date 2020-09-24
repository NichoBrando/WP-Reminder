const Hapi = require("@hapi/hapi");
const mongoose = require("mongoose");
//const Glue = require("@hapi/glue");
const fs = require("fs");
/*const jwt = require("hapi-auth-jwt2");
const { ALGORITHM } = require("./auth/conf");
*/

mongoose.connect("mongodb://localhost:27017/reminder", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let routes = [];

fs.readdirSync(__dirname + "/routes").forEach((file) => {
  routes = routes.concat(require(`./routes/${file}`));
});

const init = async () => {
  const server = Hapi.Server({
    port: 3000,
    host: "localhost",
  });

  routes.forEach((route) => {
    server.route(route);
  });

  /*
  await server.register(jwt);
  server.auth.strategy("jwt", "jwt", {
    key: process.env.SECRET_KEY,
    validate: function () {
      return { isValid: true };
    },
    verifyOptions: {
      algorithms: [ALGORITHM],
    },
  });
  server.auth.default("jwt");
  */
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

init();
