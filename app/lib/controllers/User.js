const User = require("../../models/User");
const userQuery = require("../../queries/User");
const { fromMongoose } = require("../../services/entityConverter");
const Config = require("../../config");
const Boom = require("boom");
const Bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const login = async (request) => {
  const user = await User.findOne({
    username: request.payload.username,
  });

  if (!user) {
    return Boom.unauthorized("Username or Password is wrong");
  }

  if (!Bcrypt.compareSync(request.payload.password, user.password)) {
    return Boom.unauthorized("Username or Password is wrong");
  }

  const rawToken = {
    _id: user._id,
  };
  const token = JWT.sign(rawToken, Config.jwt.key, Config.jwt.verifyOptions);
  /*return {
    token,
  };*/
  return {
    user: {
      ...fromMongoose(user),
      password: undefined,
    },
    token,
  };
};

const register = async (request) => {
  const doc = {
    username: request.payload.username,
    email: request.payload.email,
    password: Bcrypt.hashSync(request.payload.password, 10),
  };
  const newUser = await User.create(doc);
  const rawToken = {
    _id: newUser._id,
  };
  const token = JWT.sign(rawToken, Config.jwt.key, Config.jwt.verifyOptions);
  return {
    user: {
      ...fromMongoose(newUser),
      password: undefined,
    },
    token,
  };
};

const update = async (request) => {
  const payload = request.payload;
  if (payload.password)
    payload.password = Bcrypt.hashSync(payload.password, 10);
  const user = await userQuery.update({
    id: request.auth.credentials.id,
    password: payload.password,
    email: payload.email,
  });
  return {
    user: {
      ...fromMongoose(user),
      password: undefined,
    },
  };
};

const remove = async (request) => {
  const user = await userQuery.remove({
    id: request.auth.credentials.id,
  });
  return {
    user: {
      ...fromMongoose(user),
      password: undefined,
    },
  };
};

module.exports = {
  login,
  register,
  update,
  remove,
};
