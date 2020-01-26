const { businessError, success } = require('../lib/responseTemplate');
const { UserModel } = require('../model/model');
const userSservice = require('../services/userService');

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

// const postEditRoleuser = async ({ req, res }) => {
//   let roleUser = req.body;
//   // console.log('移除和添加角色用户的接口', roleUser);
//   const edit = await userSservice.postEditRoleuser(roleUser);
//   // console.log('edit--', edit);
//   if (!edit) {
//     return businessError({ res, msg: '数据库保存错误' });
//   }
//   return success({ res, data: '' });
// };

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
  const { userName } = req.body;
  const user = await userSservice.getUserInfoUsername(userName);
  if (user) {
    return businessError({ res, msg: '用户名已注册!', data: 'username' });
  } else {
    userSservice.postSaveUser({ req, res });
  }
};
let postDelUser = async ({ req, res }) => {
  let ids = JSON.parse(req.body.ids);
  let removes = ids.map((id) => {
    return userSservice.postDelUser(id);
  });

  await Promise.all(removes)
    .then(() => {
      success({ res, msg: '删除成功' });
    })
    .catch((err) => {
      businessError({ res, msg: err });
    });
};
let editUserInfo = async ({ req, res }) => {
  const { userName, id } = req.body;
  const userinfo = await userSservice.getUserInfoById(id);

  if (userinfo.userName !== userName) {
    const hasName = await userSservice.getUserInfoUsername(userName);
    if (hasName) {
      return businessError({ res, msg: '用户名已注册!', data: 'username' });
    }
  }
  if (userinfo.userName === userName) {
    const user = await userSservice.editUserInfo({ req, res });
    if (user) {
      return success({ res, msg: '用户信息更新成功！' });
    }
    return businessError({ res, msg: '用户信息更新失败!' });
  }
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
