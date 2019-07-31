// const _ = require('lodash')
const { UserModel, RoleModel } = require('../model/model');
// const uuidv4 = require('uuid/v4');
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
      for (let i = 0, len = userId.length; i < len; i++) {
        const s = await UserModel.findOne({ id: userId[i] });
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

module.exports = {
  getUserInfoById,
  getUserPagelist,
  postEditRoleuser,
};
