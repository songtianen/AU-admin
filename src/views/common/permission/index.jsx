import React from 'react';

class PermissionContainer extends React.PureComponent {
  render() {
    // eslint-disable-next-line react/prop-types
    const { display, permission, children } = this.props;
    const needPermission = permission || [];
    const isAdmin = parseInt(localStorage.getItem('isAdmin'), 10);
    const userPermission = JSON.parse(localStorage.getItem('permission'));
    let hasPermission = isAdmin === 1;
    // hasPermission = true 不判断直接返回 children
    // hasPermission = false  判断userPermission 是否存在 permission
    if (!hasPermission && needPermission.length > 0) {
      // 如果用户权限里至少有PermissionContainer传入的权限码
      for (let p of needPermission) {
        if (userPermission.some((s) => s === p)) {
          // 此用户就有权限
          hasPermission = true;
          break;
        }
      }
    }
    return display === 'block' ? (
      <div>{hasPermission ? children : null}</div>
    ) : (
      <span>{hasPermission ? children : null}</span>
    );
  }
}
export default PermissionContainer;
