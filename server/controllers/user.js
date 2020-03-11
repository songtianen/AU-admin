const { businessError, success } = require('../lib/responseTemplate');
const { UserModel } = require('../model/model');
const userSservice = require('../services/userService');
const { Encrypt } = require('../util/md5');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../util/md5');

const { checkParametersEmpety } = require('../util/util');

let postRegister = async ({ req, res }) => {
  console.log('用户注册', req.body);
  // userSservice.postRegister({ req, res });
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

let addUser = async ({ req, res }) => {
  let userInfo = req.body;
  const isEmpty = await checkParametersEmpety(userInfo);
  if (isEmpty.msg || isEmpty.keys.length) {
    return businessError({ res, msg: isEmpty.msg, data: isEmpty.keys });
  }
  if (userInfo.pwd) {
    userInfo.pwd = Encrypt(userInfo.pwd);
  }
  const name = userInfo.userName;

  const user = await userSservice.getUserInfoUsername(name);
  if (user) {
    return businessError({ res, msg: '用户名已注册!', data: 'username' });
  } else {
    const user = await userSservice.addUser({ userInfo });
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
let editUser = async ({ req, res }) => {
  const userInfo = req.body;
  await userSservice
    .editUser(userInfo)
    .then((doc) => {
      if (!doc.success) {
        return businessError({ res, msg: doc.msg });
      }
      if (doc.success) {
        return success({ res, msg: doc.msg });
      }
    })
    .catch((e) => {
      return businessError({ res, msg: e.msg });
    });
};
let loginUser = async ({ req, res }) => {
  const userInfo = req.body;
  console.log('登陆请求', userInfo);

  await userSservice
    .loginUser(userInfo)
    .then((doc) => {
      // console.log('登陆请求', doc);
      if (doc.success) {
        const tokenObj = {
          username: doc.user.userName,
          isAdmin: doc.user.isAdmin,
          userId: doc.user.id,
        };
        // 用户登录成功过后生成token返给前端
        let token = jwt.sign(tokenObj, secretKey, {
          expiresIn: '24h', // 授权时效24小时
        });
        return success({
          res,
          msg: doc.msg,
          data: { accessToken: token, isLogin: true, user: doc.user },
        });
      }
      if (!doc.success) {
        return businessError({ res, msg: doc.msg });
      }
    })
    .catch((e) => {
      return businessError({ res, msg: e.msg });
    });
};

module.exports = {
  getUserInfo,
  getAllUser,
  postRegister,
  addUser,
  postDelUser,
  editUser,
  loginUser,
};
