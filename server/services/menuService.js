/* eslint-disable no-unused-vars */
const uuidv4 = require('uuid/v4');
const { AccessMemuModel, FunctionModel, RoleModel } = require('../model/model'); // 引入模型
const _ = require('lodash');
const dbSchema = require('../db/dbSchema');
const { findUserPermission } = require('./userService');
const { unique } = require('../util/util');

// const buildMenu = (parentMenu, menuList) => {
//   parentMenu.children = []; // 根菜单children属性
//   let children = menuList.filter((item) => {
//     // 在所有菜单中找出-菜单中父id 与 根菜单中相等的id
//     return item.parentId === parentMenu.id;
//   });
//   // 如果
//   for (let menu of children) {
//     // 递归调用
//     buildMenu(menu, menuList);
//   }
//   parentMenu.children.push(...children);
// };
const buildMenu = (menus) => {
  let rootMenu = menus.filter((v) => {
    return v.parentId === '0' && !v.isLock;
  });
  const build = (listItem, allList) => {
    for (let i = 0; i < listItem.length; i++) {
      listItem[i].children = [];
      let children = allList.filter((item) => {
        return item.parentId === listItem[i].id;
      });
      listItem[i].children.push(...children);
      if (listItem[i].children) {
        build(listItem[i].children, allList);
      }
    }
    return listItem;
  };
  return build(rootMenu, menus);
};
// 构建有相应权限的菜单
// const buildAccessMenu = (parentMenu, menuList, userPermission) => {
//   parentMenu.children = [];
//   let children = menuList.filter((item) => {
//     return (
//       item.parentId === parentMenu.id &&
//       (!item.functionCode || userPermission.indexOf(item.functionCode) > -1)
//     );
//   });
//   // 父级没有权限访问，子级也不能访问
//   for (let menu of children) {
//     buildAccessMenu(menu, menuList, userPermission);
//   }
//   parentMenu.children.push(...children);
// };
const buildAccessMenu = (menus, userPermissionIds) => {
  console.log('uniqueMenu---', userPermissionIds);

  // 找到所有具有权限显示的菜单
  let permissionMenus = [];
  for (let i of menus) {
    for (let j of userPermissionIds) {
      if (i.id === j) {
        permissionMenus.push(i);
      }
    }
  }
  let n = [];
  const findParentMenu = (menu, permissionMenu) => {
    for (let i = 0; i < menu.length; i++) {
      for (let j = 0; j < permissionMenu.length; j++) {
        if (permissionMenu[j].parentId === menu[i].id) {
          let j = [];
          j.push(menu[i]);
          n.push(menu[i]);
          findParentMenu(menu, j);
        }
      }
    }
  };
  findParentMenu(menus, permissionMenus);
  let uniqueMenu = unique(n);

  let newPermissionMenus = permissionMenus.concat(uniqueMenu);
  // 构建出菜单树
  if (newPermissionMenus && newPermissionMenus.length) {
    let rootMenu = newPermissionMenus.filter((v) => {
      return v.parentId === '0' && !v.isLock;
    });
    const build = (listItem, allList) => {
      for (let i = 0; i < listItem.length; i++) {
        listItem[i].children = [];
        let children = allList.filter((item) => {
          return item.parentId === listItem[i].id;
        });
        listItem[i].children.push(...children);
        if (listItem[i].children) {
          build(listItem[i].children, allList);
        }
      }
      return listItem;
    };
    if (rootMenu && rootMenu.length) {
      return build(rootMenu, newPermissionMenus);
    }
    return rootMenu;
  }
};
const checkAccssMenu = (accessMenuList, menuList) => {
  // console.log('checkAccssMenu菜单列表', accessMenuList)

  //  删除空children
  for (let item of accessMenuList) {
    if (item.children) {
      checkAccssMenu(item.children, menuList);
    }
  }
  _.remove(accessMenuList, (item) => {
    return (
      item.children.length === 0 &&
      menuList.some((s) => {
        return s.parentId === item.id;
      })
    );
  });
};
const getAllMenuList = (selector = {}) => {
  return AccessMemuModel.find(selector).exec();
};
const copyMenu = (menuList) => {
  // return JSON.parse(JSON.stringify(menuList))
  let c = [];
  for (let i = 0; i < menuList.length; i++) {
    let doc = menuList[i]['_doc'];
    let v = Object.assign({}, doc);
    c.push(v);
  }
  // for (let a of menuList) {
  //   let v = Object.assign({}, a['_doc'])
  //   c.push(v)
  // }
  return c;
};
const buildWithFunc = (menuLists, funcList) => {
  for (let i = 0; i < menuLists.length; i++) {
    for (let j = 0; j < funcList.length; j++) {
      if (funcList[j].moduleId === menuLists[i].id) {
        funcList[j].title = funcList[j].name;
        menuLists[i].children.push(funcList[j]);
      }
    }
    if (menuLists[i].children) {
      buildWithFunc(menuLists[i].children, funcList);
    }
  }
  return menuLists;
};

const buildMenuTreeWithFunction = (menu, funcList) => {
  let rootMenu = menu.filter((v) => {
    return v.parentId === '0';
  });
  const build = (listItem, allList) => {
    for (let i = 0; i < listItem.length; i++) {
      listItem[i].children = [];
      let children = allList.filter((item) => {
        return item.parentId === listItem[i].id;
      });
      listItem[i].children.push(...children);
      if (listItem[i].children) {
        build(listItem[i].children, allList);
      }
    }
    return listItem;
  };
  const menuList = build(rootMenu, menu);

  const menuListWithFunc = buildWithFunc(menuList, funcList);

  return menuListWithFunc;
};

let menuService = {
  // 获取所有的未经处理菜单
  getAllMenuList,
  // 获取前端页面菜单
  getAllMenu: async (pageIndex, pageSize, sortBy, descending, filter) => {
    let menuLists = await AccessMemuModel.find();
    menuLists = JSON.parse(JSON.stringify(menuLists));
    let allList = JSON.parse(JSON.stringify(menuLists));
    if (filter.functionCode) {
      menuLists = _.filter(menuLists, (o) => {
        return o.functionCode.indexOf(filter.functionCode) > -1;
      });
    }
    if (filter.title) {
      menuLists = _.filter(menuLists, (o) => {
        return o.title.indexOf(filter.title) > -1;
      });
    }

    // 总页数
    let totalCount = menuLists.length;
    // 排序
    if (sortBy) {
      sortBy = 'isAdd';
      menuLists = _.sortBy(menuLists, [sortBy]);
      if (descending === 'true') {
        menuLists = menuLists.reverse();
      }
    }
    if (pageIndex || pageSize) {
      // 返回给前端第几页，的 数量。（）
      let start = (pageIndex - 1) * pageSize;
      let end = pageIndex * pageSize;
      menuLists = _.slice(menuLists, start, end);
    }

    return {
      totalCount: totalCount,
      rows: menuLists,
      allList,
    };
  },
  // 可访问的菜单
  AccessMenu: async (userInfo) => {
    let menuList = await AccessMemuModel.find();

    menuList = JSON.parse(JSON.stringify(menuList));
    // 总的菜单列表
    menuList = _.sortBy(menuList, ['sort']); // 所有菜单
    // 用户的角色是否是管理员
    let isAdmin = userInfo.isAdmin;
    console.log('userInfo中的isAdmin', isAdmin);
    // 获取用户的用户角色，角色里有权限
    let userRole = userInfo.userRole;
    // 如若是管理员构建管理员菜单（全部菜单）
    if (isAdmin) {
      return {
        success: true,
        menuTree: buildMenu(menuList),
      };
    }
    const funtionList = await findUserPermission(userRole);
    return {
      success: true,
      menuTree: buildAccessMenu(menuList, funtionList.menuId),
    };

    // checkAccssMenu(parentMenuList, menuList); // 根菜单，与总菜单
  },
  MenuList: (doc) => {
    let menuList = doc;
    menuList = copyMenu(menuList);
    // 总的菜单列表
    menuList = _.sortBy(menuList, ['sort']); // 所有菜单
    let parentMenuList = menuList.filter((item) => {
      return item.parentId === '0'; // isLock? 没有锁定的menu
    });
    return buildMenu(parentMenuList);
  },
  getMenuWithChildren: async (menuId) => {
    // console.log(typeof menuId);
    let menuList = await getAllMenuList();
    let menuWithChildren = [];
    let menu = menuList.filter((s) => {
      return (s.parentId === '0' && menuId === '0') || s.id === menuId;
    });
    let forFn = (parentId) => {
      let children = menuList.filter((s) => {
        return s.parentId === parentId;
      });
      if (children.length > 0) {
        menuWithChildren.push(...children);
        for (let child of children) {
          forFn(child.id);
        }
      }
    };
    if (menu.length > 0) {
      menuWithChildren.push(...menu);
      for (let m of menu) {
        forFn(m.id);
      }
    }
    return menuWithChildren;
  },
  editMenu: async (data) => {
    if (data) {
      // 查询一条
      if (data.functionCode) {
        const menuCode = await AccessMemuModel.findOne({
          functionCode: data.functionCode,
        });
        if (menuCode && menuCode.id !== data.id) {
          return {
            success: false,
            msg: `${data.functionCode}已存在`,
          };
        }
      }

      if (data.name) {
        const menuName = await AccessMemuModel.findOne({
          name: data.name,
        });
        if (menuName && menuName.id !== data.id) {
          return {
            success: false,
            msg: `${data.name}已存在`,
          };
        }
      }
      if (data.title) {
        const menuTitle = await AccessMemuModel.findOne({
          title: data.title,
        });
        if (menuTitle && menuTitle.id !== data.id) {
          return {
            success: false,
            msg: `${data.title}已存在`,
          };
        }
      }
      if (data.path) {
        const menuPath = await AccessMemuModel.findOne({
          path: data.path,
        });
        if (menuPath && menuPath.id !== data.id) {
          return {
            success: false,
            msg: `${data.path}已存在`,
          };
        }
      }

      await AccessMemuModel.updateOne(
        {
          id: data.id,
        },
        {
          ...data,
        },
      );
      return {
        success: true,
        msg: `修改成功`,
      };
    }
    return Promise.reject(new Error({ msg: '保存错误，没有参数' }));
  },
  addMenu: async (data) => {
    if (data) {
      if (data.title) {
        const info = await AccessMemuModel.findOne({ title: data.title });
        if (info) {
          return {
            success: false,
            msg: `${info.title}已存在`,
          };
        }
      }
      if (data.name) {
        const info = await AccessMemuModel.findOne({ name: data.name });
        if (info) {
          return {
            success: false,
            msg: `${info.name}已存在`,
          };
        }
      }
      if (data.functionCode) {
        const info = await AccessMemuModel.findOne({ functionCode: data.code });
        if (info) {
          return {
            success: false,
            msg: `${info.code}已存在`,
          };
        }
      }
      if (data.path) {
        const info = await AccessMemuModel.findOne({ path: data.path });
        if (info) {
          return {
            success: false,
            msg: `${info.path}已存在`,
          };
        }
      }
      await AccessMemuModel.create({
        ...dbSchema.Menu,
        ...data,
        id: uuidv4(),
      });
      return {
        success: true,
        msg: '数据库保存成功',
      };
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({ msg: '没有参数' });
  },
  checkSameItemsInDB: async (...data) => {
    let arr = [];
    if (data) {
      for (let item of data) {
        const res = await AccessMemuModel.find({ ...item });
        if (res && res.length) {
          arr.push(item);
        }
      }
    }
    return arr;
  },
  delMenus: async (menuIds) => {
    if (menuIds) {
      await AccessMemuModel.deleteMany({ id: menuIds });
      // 删除functionModal中moduleID是menuIds的文档
      await FunctionModel.deleteMany({ moduleId: menuIds });
      return {
        success: true,
        msg: '删除成功!',
      };
    } else {
      return Promise.reject(new Error({ msg: '服务器错误' }));
    }
  },
  getAllMenuWithFunction: async (roleId) => {
    let menu = await AccessMemuModel.find();
    let funcList = await FunctionModel.find();
    menu = JSON.parse(JSON.stringify(menu));
    funcList = JSON.parse(JSON.stringify(funcList));
    const buildMenu = buildMenuTreeWithFunction(menu, funcList);
    if (!roleId) {
      return buildMenu;
    } else {
      let roleFunctions = await RoleModel.findOne({ id: roleId });
      return {
        menuList: buildMenu,
        roleFunctions: roleFunctions,
      };
    }
  },
};
module.exports = menuService;
