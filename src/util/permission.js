const permission = {};
// 权限校验
permission.check = function(config) {
  if (config.permission && config.permission.length > 0) {
    let configPermissions = config.permission;
    let permissions = JSON.parse(localStorage.getItem('permission'));
    // let isAdmin = localStorage.getItem('isAdmin');
    let hasPermission = permissions.some((s) => {
      return configPermissions.indexOf(s) > -1;
    });
    console.log('permission.check', permissions);
    console.log('permission.check', hasPermission);
    return hasPermission;
  }
  return true;
};

export default permission;
