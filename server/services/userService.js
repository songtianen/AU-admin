// const _ = require('lodash')
const { UserModel, RoleModel } = require('../model/model');
const uuidv4 = require('uuid/v4');
const { md5PWD, secretKey } = require('../util/md5');
const { businessError, success } = require('../lib/responseTemplate');

const jwt = require('jsonwebtoken');
const _ = require('lodash');

// const roleService = require('./roleService')
// const functionService = require('./functionService')
const getUserInfoById = (id) => {
  return UserModel.findOne({ _id: id }).exec();
};
const getUserPagelist = async (
  pageIndex,
  pageSize,
  sortBy,
  descending,
  filter,
) => {
  if (filter.roleId) {
    const roleId = filter.roleId;
    const Role = await RoleModel.findOne({ id: roleId });
    if (!Role) {
      return null;
    }
    let userId = Role.userId;
    userId = JSON.parse(JSON.stringify(userId));

    const findUserInfo = async (ids) => {
      let c = [];
      for (let i = 0, len = ids.length; i < len; i++) {
        const s = await UserModel.findOne({ id: ids[i] });
        if (!s) {
          return null;
        }
        c.push(s);
      }
      return c;
    };
    let userInfo = await findUserInfo(userId);
    let userInfoList = JSON.parse(JSON.stringify(userInfo));
    // console.log('userId', userInfoList);

    if (filter.name) {
      userInfoList = _.filter(userInfoList, (o) => {
        // console.log('ooooooo', o);
        return (
          o.userName.indexOf(filter.name) > -1 ||
          o.nickName.indexOf(filter.name) > -1
        );
      });
    }
    if (filter.email) {
      userInfoList = _.filter(userInfoList, (o) => {
        return o.email.indexOf(filter.email) > -1;
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
  }

  return null;
};
const postEditRoleuser = async (roleUser) => {
  if (roleUser.action === 1) {
    // RoleModel.userId 添加一条 userId
    // $push来实现添加数组中的指定元素
    const add = await RoleModel.updateOne(
      { id: roleUser.roleId },
      {
        $push: {
          userId: roleUser.userId,
        },
      },
    );
    return add;
  } else {
    // RoleModel.userId 删除一条 userId
    // $pull来实现删除数组中的指定元素
    const remove = await RoleModel.updateOne(
      { id: roleUser.roleId },
      {
        $pull: {
          userId: roleUser.userId,
        },
      },
    );
    return remove;
  }
};
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
      console.log('ooooooo', filter);
      return o.userName.indexOf(filter.name) > -1;
    });
  }
  if (filter.email) {
    userInfoList = _.filter(userInfoList, (o) => {
      return o.email.indexOf(filter.email) > -1;
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
  const { mail, password, mobile, username } = req.body;
  // 查询username是否存在，如果存在，返回错误
  const user = await UserModel.findOne({
    // 判断密码是否正确
    userName: username,
  });
  if (user) {
    return businessError({ res, msg: '用户名以存在!', data: 'username' });
  } else {
    const info = await new UserModel({
      id: uuidv4(),
      email: mail,
      isAdmin: 0,
      userName: username,
      pwd: md5PWD(password),
      phone: mobile,
    });
    // console.log('userinfo', info);
    info.save(function(err) {
      if (err) {
        return businessError({ res, msg: '数据库保存失败!', data: '' });
      }
      const tokenObj = {
        username: info.userName,
        isAdmin: 0,
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

module.exports = {
  getUserInfoById,
  getUserPagelist,
  postEditRoleuser,
  getAllUser,
  postRegister,
};
