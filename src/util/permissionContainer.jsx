import React from 'react';

// 组件级权限效验
class PermissionContainer extends React.PureComponent {
  render() {
    // eslint-disable-next-line react/prop-types
    const { permission, children } = this.props;

    const needPermission = permission || [];
    const userPermission = JSON.parse(localStorage.getItem('permission'));
    const isAdmin = localStorage.getItem('isAdmin');
    let hasPermission = isAdmin === 'admin';
    // 不是管理员（没有权限），并且neddPermission明确需要某种权限
    if (!hasPermission && needPermission.length > 0) {
      for (let p of needPermission) {
        // 查看此用户localstorage,中是否有此权限
        if (userPermission.some((s) => s === p)) {
          // 此用户就有权限
          hasPermission = true;
          break;
        }
      }
    }
    return hasPermission ? children : null;
  }
}
export default PermissionContainer;
