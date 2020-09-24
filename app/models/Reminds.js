const mongoose = require("mongoose");

const RemindSchema = new mongoose.Schema({
  user_id: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
});

module.exports = mongoose.model("Remind", RemindSchema);
