const userQuery = require("../queries/User");

const login = async (request) => {
  return {};
};

const register = async (request) => {
  const payload = request.payload;
  const newUser = await userQuery.register({
    username: payload.username,
    password: payload.password,
    email: payload.email,
  });
  return newUser;
};

const update = async (request) => {
  const payload = request.payload;
  const user = await userQuery.update({
    id: payload.id,
    password: payload.password,
    email: payload.email,
  });
  return user;
};

const remove = async (request) => {
  const payload = request.payload;
  const user = await userQuery.remove({
    id: payload.id,
    email: payload.email,
    password: payload.password,
  });
  return user;
};

module.exports = {
  login,
  register,
  update,
  remove,
};
