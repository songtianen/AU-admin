// const _ = require('lodash')
const { UserModel } = require('../model/model');
const uuidv4 = require('uuid/v4');
const { md5PWD, secretKey } = require('../util/md5');
const { businessError, success } = require('../lib/responseTemplate');

const jwt = require('jsonwebtoken');
const _ = require('lodash');

// const roleService = require('./roleService')
// const functionService = require('./functionService')
const getUserInfoById = async (id) => {
  const userinfo = await UserModel.findOne({ id: id });
  return userinfo;
};

const getUserInfoUsername = async (name) => {
  const user = await UserModel.findOne({ userName: name });
  return user;
};

// const postEditRoleuser = async (roleUser) => {
//   if (roleUser.action === 1) {
//     // action=1:添加
//     // RoleModel.userId 添加一条 userId
//     // $push来实现添加数组中的指定元素
//     const add = await RoleModel.updateOne(
//       { id: roleUser.roleId },
//       {
//         $push: {
//           userId: roleUser.userId,
//         },
//       },
//     );
//     return add;
//   } else {
//     // RoleModel.userId 删除一条 userId
//     // $pull来实现删除数组中的指定元素
//     const remove = await UserModel.updateOne(
//       { id: roleUser.userId },
//       {
//         $pull: {
//           userRole: roleUser.roleId,
//         },
//       },
//     );
//     // console.log('删除后的', remove);
//     return remove;
//   }
// };
const getAllUser = async ({
  pageIndex,
  pageSize,
  sortBy,
  descending,
  filter,
}) => {
  let userList = await UserModel.find({});

  let userInfoList = JSON.parse(JSON.stringify(userList));

  if (filter.name) {
    userInfoList = _.filter(userInfoList, (o) => {
      return o.userName ? o.userName.indexOf(filter.name) > -1 : '';
    });
  }
  if (filter.email) {
    userInfoList = _.filter(userInfoList, (o) => {
      return o.email ? o.email.indexOf(filter.email) > -1 : '';
    });
  }
  // 总页数
  let totalCount = userInfoList.length;
  // 是否已经已经添加
  userInfoList.forEach((item) => {
    item.isAdd = 1;
  });
  // 排序
  if (sortBy) {
    sortBy = 'isAdd';
    userInfoList = _.sortBy(userInfoList, [sortBy]);
    if (descending === 'true') {
      userInfoList = userInfoList.reverse();
    }
  }
  // 返回给前端第几页，的 数量。（）
  let start = (pageIndex - 1) * pageSize;
  let end = pageIndex * pageSize;
  userInfoList = _.slice(userInfoList, start, end);
  return {
    totalCount: totalCount,
    rows: userInfoList,
  };
};
// 用户注册
const postRegister = async ({ req, res }) => {
  const { email, password, phone, username } = req.body;
  // 查询username是否存在，如果存在，返回错误
  const user = await UserModel.findOne({
    userName: username,
  });
  if (user) {
    return businessError({
      res,
      msg: '用户名已经存在!',
      data: { info: 'username' },
    });
  } else {
    const info = await new UserModel({
      id: uuidv4(),
      email: email,
      isAdmin: phone === '13548106816' ? 'admin' : 'user',
      userName: username,
      pwd: md5PWD(password),
      phone: phone,
    });
    // console.log('userinfo', info);
    info.save(function(err) {
      if (err) {
        return businessError({
          res,
          msg: '数据库保存失败!',
          data: { info: err },
        });
      }
      const tokenObj = {
        username: info.userName,
        isAdmin: info.isAdmin,
        userId: info.id,
      };
      // 用户登录成功过后生成token返给前端
      let token = jwt.sign(tokenObj, secretKey, {
        expiresIn: '24h', // 授权时效24小时
      });
      return success({ res, data: { accessToken: token } });
    });
  }
};
// 添加
const postSaveUser = async ({ req, res }) => {
  const { email, pwd, phone, userName } = req.body;
  const info = await new UserModel({
    id: uuidv4(),
    email: email,
    isAdmin: phone === '13548106816' ? 'admin' : 'user',
    userName: userName,
    pwd: md5PWD(pwd),
    phone: phone,
  });
  info.save(function(err) {
    if (err) {
      return businessError({ res, msg: '数据库保存失败!', data: '' });
    }
    return success({ res, msg: '数据库保存成功！' });
  });
};
const postDelUser = async (id) => {
  const isRemoveRole = await UserModel.findOneAndDelete({ id: id });
  return isRemoveRole;
};
const editUserInfo = async ({ req, res }) => {
  const info = req.body;
  // update不返回文档
  const edituser = await UserModel.update(
    { id: info.id },
    {
      ...info,
    },
  );
  return edituser;
};

module.exports = {
  getUserInfoById,
  getUserInfoUsername,
  // postEditRoleuser,
  getAllUser,
  postRegister,
  postSaveUser,
  postDelUser,
  editUserInfo,
};
