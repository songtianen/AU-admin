const { businessError, success } = require('../lib/responseTemplate');
const { UserModel } = require('../model/model');
const userSservice = require('../services/userService');

let getUserInfo = ({ req, res }) => {
  // console.log('user-controller', req.user)
  let user = req.user;
  if (!user || !user.userId) {
    return businessError(res, '获取用户信息失败!');
  }
  UserModel.findOne({ _id: user.userId }, function(err, doc) {
    if (err) {
      return businessError(res, '获取用户信息失败!');
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
let getUserPagelist = async ({ req, res }) => {
  let pageIndex = req.query.pageIndex;
  let pageSize = req.query.pageSize;
  let sortBy = req.query.sortBy;
  let descending = req.query.descending;
  let filter = JSON.parse(req.query.filter);
  const info = await userSservice.getUserPagelist(
    pageIndex,
    pageSize,
    sortBy,
    descending,
    filter,
  );
  if (!info) {
    return businessError(res, '数据库保存失败');
  }
  return success({ res, data: info, meg: '数据库更新成功' });
};

const postEditRoleuser = async ({ req, res }) => {
  let roleUser = req.body;
  console.log('移除和添加角色用户的接口', roleUser);
  const edit = await userSservice.postEditRoleuser(roleUser);
  console.log('edit--', edit);
  if (!edit) {
    return businessError(res, '数据库保存错误');
  }
  return success({ res, data: '' });
};

module.exports = {
  getUserInfo,
  getUserPagelist,
  postEditRoleuser,
};
