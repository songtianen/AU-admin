// const { dbConfig } = require('../db/db');
const { DepartmentModel, RoleModel } = require('../model/model'); // 引入模型
const _ = require('lodash');
const uuidv4 = require('uuid/v4');

const buildDepartList = (parentMenu, roleList) => {
  parentMenu.children = []; // 根菜单children属性
  let children = roleList.filter((item) => {
    // 在所有菜单中找出-菜单中父id 与 根菜单中相等的id
    item.title = item.name;
    return item.departmentId === parentMenu.id;
  });
  // 如果
  for (let menu of children) {
    // 递归调用
    buildDepartList(menu, roleList);
  }
  parentMenu.children.push(...children);
};
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
const findAllDeparmentList = async (selector = {}) => {
  const deparment = await DepartmentModel.find(selector).exec();
  const roleList = await RoleModel.find(selector).exec();
  let roleArr = copyMenu(roleList);

  // eslint-disable-next-line eqeqeq
  if (!deparment) {
    DepartmentModel.create(
      {
        functionCode: '',
        icon: '',
        id: uuidv4(),
        leftDepartment: false,
        isLock: false,
        name: '',
        parentId: '',
        parentName: '',
        path: '',
        sort: '',
        title: '',
        userId: ['8d139919-bc9a-4107-a056-b61ef6aa5487'],
      },
      function(err) {
        // console.log('dbC22222222', ...dbConfig.function)
        if (err) {
          console.log('AccessMemuModel数据哭创建错误', err);
        }
      },
    );
    // eslint-disable-next-line eqeqeq
    console.log('Deparment-', deparment == false);
  }
  let deparmentList = copyMenu(deparment);
  // 总的菜单列表
  deparmentList = _.sortBy(deparmentList, ['sort']); // 所有菜单
  let parentDeparmentList = deparmentList.filter((item) => {
    return item.parentId === '0'; // isLock? 没有锁定的menu
  });
  for (let item of parentDeparmentList) {
    buildDepartList(item, roleArr);
  }
  return parentDeparmentList;
};

let deparmentService = {
  findAllDeparmentList,
  // 可访问的菜单
  AccessMenuList: (req, userInfo, doc) => {
    // for (let i = 0; i < dbConfig.menu.length; i++) {
    //   AccessMemuModel.create({ ...dbConfig.menu[i] }, function (err, small) {
    //     if (err) return console.log('AccessMemuModel数据哭创建错误', err)
    //     return console.log('AccessMemuModel数据创建成功', small)
    //   })
    // }
    // FunctionModel.create(dbConfig.function, function (err, small) {
    //     // console.log('dbC22222222', ...dbConfig.function)
    //     if (err) { console.log('AccessMemuModel数据哭创建错误', err) }
    //   })
    // eslint-disable-next-line handle-callback-err
    // AccessMemuModel.update({ _id: '5cb4c606baa89e4c057d0890' }, { $set: { ID: 1 } }, function (err, doc) {
    //   console.log('更新数据库测试', doc)
    // })
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
        buildDepartList(menu, menuList);
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
};
module.exports = deparmentService;
