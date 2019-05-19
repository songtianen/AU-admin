const { businessError, success } = require('../lib/responseTemplate');
const { userModel } = require('../model/model');

let getUserInfo = ({ req, res }) => {
  // console.log('user-controller', req.user)
  let user = req.user;
  if (!user || !user.userId) {
    return businessError(res, '获取用户信息失败!');
  }
  userModel.findOne({ _id: user.userId }, function(err, doc) {
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

module.exports = {
  getUserInfo,
};
