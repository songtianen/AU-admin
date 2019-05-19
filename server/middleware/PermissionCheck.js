const { getUserInfoById } = require('../services/userService');
const { businessError } = require('../lib/responseTemplate');

const PermissionCheck = ({ permission = [], role = [] }) => {
  return (req, res, next) => {
    console.log('PermissionCheck-----');
    getUserInfoById(req.user.userId).then((result) => {
      const { isAdmin, userRole, userPermission } = result;
      // 哪些用户角色可以编辑哪些权限。
      if (!req.user || !req.user.userId) {
        return businessError(res, '没有访问权限');
      }
      // 如果是管理员
      if (isAdmin) {
        console.log('PermissionCheck-----1');
        return next();
      }
      //  如果不是管理员则进行用户角色 与 用户权限效验
      //  根据userId得用户角色列表(查找是否存在传进来的角色)
      let r = userRole.filter((s) => {
        // 返回 过滤后的权限
        return role.indexOf(s) > -1; // 如果是可编辑（传进来的role数组）
      });
      // 如果存在：这个角色（说明这个角色可以编辑permission【权限】）
      if (r && r.length > 0) {
        return next();
      }
      let p = userPermission.filter((s) => {
        return permission.indexOf(s) > -1;
      });
      if (p && p.length > 0) {
        return next();
      }
      return businessError(res, '没有访问权限');
    });
  };
};

module.exports = {
  PermissionCheck,
};
