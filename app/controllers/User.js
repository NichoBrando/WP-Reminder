const hello = async (request) => {
  return request.params.id;
};
const login = async (request) => {
  return request.payload;
};

const register = async (request) => {
  return request.payload;
};

const update = async (request) => {
  return request.payload;
};

const remove = async (request) => {
  return request.payload;
};

module.exports = {
  hello,
  login,
  register,
  update,
  remove,
};
