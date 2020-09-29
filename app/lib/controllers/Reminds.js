const remindsQuery = require("../../queries/Reminds");

const get = async (request) => {
  const reminds = await remindsQuery.get(request.auth.credentials.id);
  return reminds;
};

const create = async (request) => {
  const payload = request.payload;
  const remind = await remindsQuery.create({
    ...payload,
    user_id: request.auth.credentials.id,
  });
  return remind;
};

const update = async (request) => {
  const payload = request.payload;
  const remind = await remindsQuery.update({
    ...payload,
    user_id: request.auth.credentials.id,
  });
  return remind;
};

const remove = async (request) => {
  const id = request.payload.id;
  const deleted = await remindsQuery.remove({
    id: id,
    user_id: request.auth.credentials.id,
  });
  return deleted;
};

module.exports = {
  get,
  create,
  update,
  remove,
};
