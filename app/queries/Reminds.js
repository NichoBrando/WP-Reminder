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
  if (payload.content) remind.content = payload.content;
  if (payload.date) remind.when = new Date(payload.date);
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
  console.log(new Date(Date.now()));
  const match = {
    when: new Date(Date.now()),
  };
  const lookup = {
    $lookup: {
      from: "User",
      localField: "user_id",
      foreignField: "_id",
      as: "user",
    },
  };
  const reminders = await remindsModel.aggregate([
    { $match: match },
    lookup,
    {
      $project: {
        email: "$user.email",
        day: "$when",
        content: "$content",
      },
    },
  ]);
  console.log(reminders);
  return reminders;
};

module.exports = {
  get,
  create,
  update,
  remove,
  getByTime,
};
