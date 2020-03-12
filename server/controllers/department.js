const departmentService = require('../services/departmentService');
const { businessError, success } = require('../lib/responseTemplate');

const getAllDepartmentAndRole = async ({ req, res }) => {
  departmentService
    .getAllDepartmentAndRole()
    .then((doc) => {
      // console.log('部门管理', doc);
      return success({ res, data: doc });
    })
    .catch(() => {
      // console.log('部门管理错误', err);
      businessError({ res, msg: '服务器错误' });
    });
};
const getAllDepartment = async ({ req, res }) => {
  // console.log('部门请求不含角色', req.query);
  let pageIndex = req.query.pageIndex || '';
  let pageSize = req.query.pageSize || '';
  let sortBy = req.query.sortBy || '';
  let descending = req.query.descending || '';
  let filter = req.query.filter ? JSON.parse(req.query.filter) : '';
  departmentService
    .getAllDepartment({ pageIndex, pageSize, sortBy, descending, filter })
    .then((doc) => {
      // console.log('部门管理', doc);
      return success({ res, data: doc, info: 'getAllDepartment' });
    })
    .catch(() => {
      // console.log('部门管理错误', err);

      businessError({ res, msg: '服务器错误' });
    });
};

const getAllDepartmentTree = async ({ req, res }) => {
  departmentService
    .getAllDepartmentTree()
    .then((doc) => {
      // console.log('部门管理', doc);
      return success({ res, data: doc });
    })
    .catch(() => {
      // console.log('部门管理错误', err);

      businessError({ res, msg: '服务器错误' });
    });
};

const addDepartment = async ({ req, res }) => {
  // console.log('添加部门', req.body);
  const data = req.body;
  departmentService
    .addDepartment({ data })
    .then((doc) => {
      // console.log('添加部门', doc);
      return success({ res, data: doc });
    })
    .catch(() => {
      // console.log('部门管理错误', err);
      businessError({ res, msg: '服务器错误' });
    });
};
const delDepartment = async ({ req, res }) => {
  const { departmentIds } = req.body;
  departmentService
    .delDepartment({ departmentIds })
    .then((doc) => {
      return success({ res, msg: '删除部门成功' });
    })
    .catch((err) => {
      businessError({ res, msg: err.msg });
    });
};
const editDepartment = async ({ req, res }) => {
  // let data = JSON.parse(JSON.stringify(req.body));
  let data = req.body;
  // console.log('.....', data);

  departmentService
    .editDepartment(data)
    .then((doc) => {
      // console.log('修改部门', doc);
      return success({ res, data: doc });
    })
    .catch((err) => {
      // console.log('编辑错误', err);
      businessError({ res, msg: err.msg });
    });
};
module.exports = {
  getAllDepartment,
  getAllDepartmentAndRole,
  addDepartment,
  delDepartment,
  getAllDepartmentTree,
  editDepartment,
};
