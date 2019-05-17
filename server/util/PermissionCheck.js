const PermissionCheck = ({ result, req, res, permission = [], role = [] }) => {
  let promise = new Promise((resolve, reject) => {
    console.log('PermissionCheck-->');
    // const userInfo = JSON.parse(JSON.stringify(result))
    // 哪些用户角色可以编辑哪些权限。
    if (!req.user || !req.user.userId) {
      resolve(0);
    }
    const { isAdmin, userRole, userPermission } = result;
    if (isAdmin) {
      resolve(1);
    }
    //  根据userId得用户角色列表(查找是否存在传进来的角色)
    let r = userRole.filter((s) => {
      // 返回 过滤后的权限
      return role.indexOf(s) > -1; // 如果是可编辑（传进来的role数组）
    });
    // 如果存在：这个角色（说明这个角色可以编辑permission【权限】）
    if (r && r.length > 0) {
      resolve(1);
    }
    let p = userPermission.filter((s) => {
      return permission.indexOf(s) > -1;
    });
    if (p && p.length > 0) {
      resolve(1);
    }
    resolve(0);
  });
  return promise;
};

module.exports = {
  PermissionCheck,
};
