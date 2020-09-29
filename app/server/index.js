const startTimeChecker = require("../services/timeChecker");

const Hapi = require("@hapi/hapi");
const mongoose = require("mongoose");
const Glue = require("@hapi/glue");

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
  await server.initialize();
  await server.start();
  console.log("Listening on port 3000!");
};

startServer();
startTimeChecker();
//Nodecron
//60000 milisecs
