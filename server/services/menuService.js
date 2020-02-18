const uuidv4 = require('uuid/v4');
const { AccessMemuModel } = require('../model/model'); // 引入模型
const { businessError, success } = require('../lib/responseTemplate');
const { findFunctionList } = require('./functionService');
const _ = require('lodash');

const buildMenu = (parentMenu, menuList) => {
  parentMenu.children = []; // 根菜单children属性
  let children = menuList.filter((item) => {
    // 在所有菜单中找出-菜单中父id 与 根菜单中相等的id
    return item.parentId === parentMenu.id;
  });
  // 如果
  for (let menu of children) {
    // 递归调用
    buildMenu(menu, menuList);
  }
  parentMenu.children.push(...children);
};
// 构建有相应权限的菜单
const buildAccessMenu = (parentMenu, menuList, userPermission) => {
  parentMenu.children = [];
  let children = menuList.filter((item) => {
    return (
      item.parentId === parentMenu.id &&
      (!item.functionCode || userPermission.indexOf(item.functionCode) > -1)
    );
  });
  // 父级没有权限访问，子级也不能访问
  for (let menu of children) {
    buildAccessMenu(menu, menuList, userPermission);
  }
  parentMenu.children.push(...children);
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

let menuService = {
  // 获取所有的未经处理菜单
  getAllMenuList,
  getAllMenuWithPage: async (
    pageIndex,
    pageSize,
    sortBy,
    descending,
    filter,
  ) => {
    let menuLists = await AccessMemuModel.find();
    menuLists = JSON.parse(JSON.stringify(menuLists));
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
    // 返回给前端第几页，的 数量。（）
    let start = (pageIndex - 1) * pageSize;
    let end = pageIndex * pageSize;
    menuLists = _.slice(menuLists, start, end);
    return {
      totalCount: totalCount,
      rows: menuLists,
    };
  },
  // 可访问的菜单
  AccessMenuList: (req, userInfo, doc) => {
    let user = req.user;
    // let menuList = doc && doc.length > 0 ? doc : dbConfig.menu;
    let menuList = doc;
    // 总的菜单列表
    menuList = _.sortBy(menuList, ['sort']); // 所有菜单
    // console.log('排序后的', menuList)
    menuList = copyMenu(menuList);
    // 找到父级（跟菜单列表）菜单列表（数组）
    let parentMenuList = menuList.filter((item) => {
      return item.parentId === '0' && !item.isLock;
    });

    // 是否是管理员
    let isAdmin = user.isAdmin;
    // 管理员权限
    let userPermission = userInfo.userPermission;
    // 如若是管理员构建管理员菜单（全部菜单）
    if (isAdmin) {
      // eslint-disable-next-line no-unused-vars
      for (let menu of parentMenuList) {
        buildMenu(menu, menuList);
      }
      // console.log('有children的 菜单', menuList)
    } else {
      // 如果不是管理员就构建相应的菜单列表
      for (let menu of parentMenuList) {
        buildAccessMenu(menu, menuList, userPermission);
      }
    }
    checkAccssMenu(parentMenuList, menuList); // 根菜单，与总菜单
    return parentMenuList;
  },
  MenuList: (doc) => {
    let menuList = doc;
    menuList = copyMenu(menuList);
    // 总的菜单列表
    menuList = _.sortBy(menuList, ['sort']); // 所有菜单
    let parentMenuList = menuList.filter((item) => {
      return item.parentId === '0'; // isLock? 没有锁定的menu
    });
    for (let menu of parentMenuList) {
      buildMenu(menu, menuList);
    }
    return parentMenuList;
  },
  postSaveMenu: (res, requstData, menu) => {
    if (!requstData.id) {
      let insertData = {
        ...requstData,
        id: uuidv4(),
      };
      AccessMemuModel.create({ ...insertData }, (err, doc) => {
        if (!err) {
          return success({ res, data: '', msg: '添加成功' });
        }
      });
    }
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].id === requstData.id) {
        if (requstData.name === menu[i].name) {
          return businessError({ res, msg: '名称已存在' });
        }
        if (requstData.title === menu[i].title) {
          return businessError({ res, msg: '标题已存在' });
        }
        // 如果有 id 相等 就是更新这条数据
        AccessMemuModel.where({ id: requstData.id }).updateOne(
          { $set: { ...requstData } },
          (err, d) => {
            if (err) {
              return businessError({ res, msg: '数据库保存错误' });
            }
          },
        );
      }
      // 如果id存在（说明用户是在更新这条数据）
    }
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
  GetMenuFunctions: async (menuId) => {
    let menuList = await menuService.getMenuWithChildren(menuId);
    let copy = JSON.parse(JSON.stringify(menuList));
    let functionList = await findFunctionList();
    functionList = _.sortBy(functionList, ['name']);
    for (let menu of copy) {
      menu.functions = functionList.filter((s) => {
        // console.log('s.moduleId.toString()', s.moduleId.toString());
        // console.log('menu.id', menu.id);
        return s.moduleId.toString() === menu.id;
      });
    }
    return copy;
  },
  editMenu: async (data) => {
    if (data) {
      const isUpdate = AccessMemuModel.updateOne(
        {
          id: data.id,
        },
        {
          ...data,
        },
      );
      return isUpdate;
    }
    return new Error({ msg: '数据库修改错误' });
  },
  addMenu: async (data) => {
    if (data) {
      const isCreate = await AccessMemuModel.create({
        ...data,
        id: uuidv4(),
      });
      return isCreate;
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
      const isdel = AccessMemuModel.deleteMany({ id: menuIds });
      return isdel;
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ msg: '服务器错误' });
    }
  },
};
module.exports = menuService;
