const { businessError, success } = require('../lib/responseTemplate');
const { UserModel } = require('../model/model');
const userSservice = require('../services/userService');
const { md5PWD } = require('../util/md5');
const { checkParametersEmpety } = require('../util/util');

let postRegister = async ({ req, res }) => {
  userSservice.postRegister({ req, res });
};
let getUserInfo = ({ req, res }) => {
  // console.log('user-controller', req.user);
  let user = req.user;
  if (!user || !user.userId) {
    return businessError({ res, msg: '获取用户信息失败!' });
  }
  UserModel.findOne({ id: user.userId }, function(err, doc) {
    if (err) {
      return businessError({ res, msg: '获取用户信息失败!' });
    }
    if (doc) {
      success({
        res,
        data: {
          userName: doc.userName,
          userRole: doc.userRole,
          userPermission: doc.userPermission,
          isAdmin: doc.isAdmin,
          avatarUrl: doc.avatar,
        },
      });
    }
  });
};

const getAllUser = async ({ req, res }) => {
  let pageIndex = req.query.pageIndex;
  let pageSize = req.query.pageSize;
  let sortBy = req.query.sortBy;
  let descending = req.query.descending;
  let filter = JSON.parse(req.query.filter);
  const allUser = await userSservice.getAllUser({
    pageIndex,
    pageSize,
    sortBy,
    descending,
    filter,
  });
  if (!allUser) {
    return businessError({ res, msg: '数据库查询错误' });
  }
  return success({ res, data: allUser });
};

let postSaveUser = async ({ req, res }) => {
  let userInfo = req.body;
  const isEmpty = await checkParametersEmpety(userInfo);
  if (isEmpty.msg || isEmpty.keys.length) {
    return businessError({ res, msg: isEmpty.msg, data: isEmpty.keys });
  }
  if (userInfo.pwd) {
    userInfo.pwd = md5PWD(userInfo.pwd);
  }
  const name = userInfo.userName;

  const user = await userSservice.getUserInfoUsername(name);
  if (user) {
    return businessError({ res, msg: '用户名已注册!', data: 'username' });
  } else {
    const user = await userSservice.postSaveUser({ userInfo });
    if (user) {
      return success({ res, msg: '用户保存成功' });
    }
    return businessError({ res, msg: '用户保存失败!' });
  }
};

let postDelUser = async ({ req, res }) => {
  let ids = req.body.ids;
  console.log('删除User', req.body);
  await userSservice
    .postDelUser(ids)
    .then((doc) => {
      return success({ res, msg: '删除成功' });
    })
    .catch((e) => {
      businessError({ res, msg: e });
    });
};
let editUserInfo = async ({ req, res }) => {
  const userInfo = req.body;
  const isUpdate = await userSservice.editUserInfo(userInfo);
  if (isUpdate) {
    console.log('res', res);
    return success({ res, msg: '用户信息更新成功！' });
  }
  return businessError({ res, msg: '服务端错误' });
};

module.exports = {
  getUserInfo,
  getAllUser,
  // postEditRoleuser,
  postRegister,
  postSaveUser,
  postDelUser,
  editUserInfo,
};
