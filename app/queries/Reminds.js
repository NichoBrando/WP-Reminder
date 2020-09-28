const mongoose = require("mongoose");
const remindsModel = require("../models/Reminds");

const get = async (id) => {
  const reminds = await remindsModel.find({ user_id: id });
  if (!reminds) return [];
  return reminds;
};

const create = async (payload) => {
  const date = new Date(payload.date);
  const remind = await remindsModel({
    user_id: payload.user_id,
    content: payload.content,
    when: date,
  });
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
  const remind = await remindsModel.findById(payload.id);
  if (!remind) return {};
  if (remind.user_id != payload.user_id) return {};
  await remind.deleteOne();
  return remind;
};

const getByTime = async () => {
  const reminds = await remindsModel.find({});
  console.log(reminds);
  if (!reminds) return [];
  const date = new Date();
  const today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  const filteredReminds = reminds.filter((element) => {
    const elementDate = `${element.when.getDate()}/${element.when.getMonth()}/${element.when.getFullYear()} ${element.when.getHours()}:${element.when.getMinutes()}`;
    return today === elementDate;
  });
  return filteredReminds;
};

module.exports = {
  get,
  create,
  update,
  remove,
  getByTime,
};
