const mongoose = require("mongoose");
const remindsModel = require("../models/Reminds");

const get = async (id) => {
  const reminds = remindsModel.find({ user_id: id });
  if (!reminds) return [];
  return reminds;
};

const create = async (payload) => {
  const remind = await remindsModel(payload);
  remind.save();
  return remind;
};

const update = async (payload) => {
  const remind = await remindsModel.findById(payload.id).exec();
  if (!remind) return {};
  if (remind.user_id != payload.user_id) return {};
  remind.content = payload.content;
  remind.save();
  return remind;
};

const remove = async (payload) => {
  const remind = remindsModel.findById(payload.id);
  if (!remind) return {};
  if (remind.user_id != payload.user_id) return {};
  if (remind.password != payload.password) return {};
  await remind.deleteOne();
  return remind;
};

module.exports = {
  get,
  create,
  update,
  remove,
};
