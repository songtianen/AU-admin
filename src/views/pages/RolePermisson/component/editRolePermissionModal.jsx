import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Tree } from 'antd';
import { getMenuFunctions } from '../../../../api';

const { TreeNode } = Tree;

class EditModal extends React.PureComponent {
  state = {
    // eslint-disable-next-line react/no-unused-state
    id: '',
    menuFunctionList: [],
  };

  defaultCheckKes = [];

  checkedKeys = [];

  onCancel = () => {
    this.props.onCancel();
    this.setState({
      menuFunctionList: [],
    });
    this.defaultCheckKes = [];
    this.checkedKeys = [];
  };

  onOk = async () => {
    let data = {
      roleId: this.props.formData.id,
      permissions: this.checkedKeys,
      moduleId: 0,
    };
    // console.log('角色权限管理，组件提交角色权限', this.props.handFromSubmit);
    await this.props.handFromSubmit(data);
    this.setState({
      menuFunctionList: [],
    });
    this.defaultCheckKes = [];
    this.checkedKeys = [];
  };

  buildMenuListAndFunctions = (menuList) => {
    let fn = (list) => {
      for (let menu of list) {
        let children = menuList.filter((s) => s.parentId === menu.id);
        let permissionChildren = menu.functions.map((s) => {
          s.isPermissionChild = true;
          return s;
        });
        if (children && children.length > 0) {
          fn(children);
        }
        menu.children = [...children, ...permissionChildren];
      }
    };
    // 顶级菜单
    let topMenus = menuList.filter((s) => s.parentId === '0');
    for (let menu of topMenus) {
      // 找出menuList中的 子菜单；全部菜单（menuList）中parentId = 顶级菜单的
      let children = menuList.filter((s) => s.parentId === menu.id);
      let permissionChildren = menu.functions.map((s) => {
        s.isPermissionChild = true;
        return s;
      });
      // console.log('permissionChildren', permissionChildren);
      if (children && children.length > 0) {
        fn(children);
      }
      menu.children = [...children, ...permissionChildren];
    }
    return topMenus;
  };

  // eslint-disable-next-line no-unused-vars
  onCheck = (checkedKeys, info) => {
    this.checkedKeys = checkedKeys.filter((s) => s.indexOf('menu') < 0);
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.visible) {
      return;
    }
    let roleId = nextProps.formData.id;
    getMenuFunctions({
      menuId: 0,
      roleId,
    }).then((moduleFunctionsRes) => {
      // console.log('宋', moduleFunctionsRes);
      let menuFunctionList = this.buildMenuListAndFunctions(
        moduleFunctionsRes.data.menuFunctions,
      );
      let rolePermissions = moduleFunctionsRes.data.roleFunctions;
      this.defaultCheckKeys = rolePermissions;
      this.checkedKeys = rolePermissions;
      this.setState({
        menuFunctionList,
      });
    });
  }

  renderTreeNode = (menuFunctionList) => {
    let list = [];
    for (let item of menuFunctionList) {
      if (item.children && item.children.length > 0) {
        if (item.isPermissionChild) {
          list.push(
            <TreeNode
              className='permission-tree-node'
              title={item.name}
              key={item.id}
            >
              {this.renderTreeNode(item.children)}
            </TreeNode>,
          );
        } else {
          list.push(
            <TreeNode
              className='clear-both'
              title={
                <span style={{ color: 'rgb(181, 185, 189)' }}>
                  {item.title}
                </span>
              }
              key={`menu${item.id}`}
            >
              {this.renderTreeNode(item.children)}
            </TreeNode>,
          );
        }
      } else if (item.isPermissionChild) {
        list.push(
          <TreeNode
            className='permission-tree-node'
            title={item.name}
            key={item.id}
          />,
        );
      } else {
        list.push(
          <TreeNode
            className='clear-both'
            title={
              <span style={{ color: 'rgb(181, 185, 189)' }}>{item.title}</span>
            }
            key={`menu${item.id}`}
          />,
        );
      }
    }
    return list;
  };

  renderTree = () => {
    return (
      <Tree
        checkable
        multiple
        defaultExpandAll
        defaultCheckedKeys={this.defaultCheckKeys}
        onCheck={this.onCheck}
        selectable={false}
      >
        {this.renderTreeNode(this.state.menuFunctionList)}
      </Tree>
    );
  };

  render() {
    return (
      <Modal
        width={800}
        visible={this.props.visible}
        cancelText='关闭'
        okText='提交'
        title={this.props.title}
        onCancel={this.onCancel}
        onOk={this.onOk}
        destroyOnClose
      >
        {this.state.menuFunctionList.length > 0 ? this.renderTree() : null}
      </Modal>
    );
  }
}

EditModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
  handFromSubmit: PropTypes.func.isRequired,
};
export default EditModal;
