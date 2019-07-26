// const _ = require('lodash')
const { UserModel } = require('../model/model');

// const roleService = require('./roleService')
// const functionService = require('./functionService')
const getUserInfoById = (id) => {
  return UserModel.findOne({ _id: id }).exec();
};

module.exports = {
  getUserInfoById,
};
