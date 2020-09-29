const userModel = require("../models/User");

const login = async (credentials) => {
  const login = await userModel.findOne({
    username: credentials.username,
    password: credentials.password,
  });
  if (!login) return {};
  return login._id;
};

const register = async (credentials) => {
  const newUser = userModel(credentials);
  newUser.save();
  return newUser;
};

const update = async (credentials) => {
  const user = await userModel.findById(credentials.id);
  if (!user) return {};
  if (credentials.password) user.password = credentials.password;
  if (credentials.email) user.email = credentials.email;
  user.save();
  return user;
};

const remove = async (credentials) => {
  const user = await userModel.findById(credentials.id);
  if (!user) return {};
  user.deleteOne();
  return user;
};

module.exports = { register, login, update, remove };
