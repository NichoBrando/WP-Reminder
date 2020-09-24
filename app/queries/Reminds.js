const remindsModel = require("../models/Reminds");

const get = async (id) => {
  const reminds = await remindsModel.findById(id);
  if (!reminds) return [];
  return reminds;
};

const create = async (payload) => {
  const remind = await remindsModel(payload);
  remind.save();
  return remind;
};

const update = async (payload) => {
  const remind = await remindsModel.findById(payload.id);
  if (remind.user_id !== payload.userId) return {};
  remind.content = payload.content;
  remind.save();
  return remind;
};

const remove = async (payload) => {
  const remind = remindsModel.findById(payload.id);
  if (remind.user_id !== payload.userId) return {};
  await remind.deleteOne();
  return remind;
};

module.exports = {
  get,
  create,
  update,
  remove,
};