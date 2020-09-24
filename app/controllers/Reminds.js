const remindsQuery = require("../queries/Reminds");

const get = async (request) => {
  const id = request.params.id;
  const reminds = {}; //await remindsQuery.get(id);
  return id;
};

const create = async (request) => {
  const payload = request.payload;
  const remind = {}; //await remindsQuery.create(payload);
  return payload;
};

const update = async (request) => {
  const payload = request.payload;
  const remind = await remindsQuery.update({
    id: payload.id,
    content: payload.content,
  });
  return payload;
};

const remove = async (request) => {
  const payload = request.payload;
  const deleted = await remindsQuery.remove(id);
  return payload;
};

module.exports = {
  get,
  create,
  update,
  remove,
};
