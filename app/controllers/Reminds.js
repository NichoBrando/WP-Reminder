const remindsQuery = require("../queries/Reminds");

const get = async (request) => {
  const id = request.params.id;
  const reminds = await remindsQuery.get(id);
  return reminds;
};

const create = async (request) => {
  const payload = request.payload;
  const remind = await remindsQuery.create(payload);
  return remind;
};

const update = async (request) => {
  const payload = request.payload;
  const remind = await remindsQuery.update({
    id: payload.id,
    user_id: payload.user_id,
    content: payload.content,
  });
  return remind;
};

const remove = async (request) => {
  const payload = request.payload;
  const deleted = await remindsQuery.remove({
    id: payload.id,
    user_id: payload.user_id,
    password: payload.password,
  });
  return deleted;
};

module.exports = {
  get,
  create,
  update,
  remove,
};
