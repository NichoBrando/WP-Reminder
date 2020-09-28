const timeChecker = require("../services/timeChecker");

const Hapi = require("@hapi/hapi");
const mongoose = require("mongoose");
const Glue = require("@hapi/glue");
/*const jwt = require("hapi-auth-jwt2");
const { ALGORITHM } = require("./auth/conf");
*/
const manifest = require("./manifest");
mongoose.connect("mongodb://localhost:27017/reminder", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const options = {
  relativeTo: __dirname,
};

const startServer = async function () {
  const server = await Glue.compose(manifest, options);
  await server.start();
  console.log("hapi days!");
};

startServer();
setInterval(timeChecker, 10000);
