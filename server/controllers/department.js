const { findAllDeparmentList } = require('../services/departmentService');
const { businessError, success } = require('../lib/responseTemplate');

const getAllDepartment = ({ req, res }) => {
  console.log('部门请求', res.query);
  findAllDeparmentList()
    .then((doc) => {
      console.log('部门管理', doc);
      return success({ res, data: doc });
    })
    .catch((err) => {
      console.log('部门管理错误', err);

      businessError({ res, msg: '服务器错误' });
    });
};

module.exports = {
  getAllDepartment,
};
