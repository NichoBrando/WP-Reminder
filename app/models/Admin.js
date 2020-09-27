const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  password: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("Admin", AdminSchema);
