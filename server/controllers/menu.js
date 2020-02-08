const { getUserInfoById } = require('../services/userService');
const menuService = require('../services/menuService');
const { getRoleFunctions } = require('../services/roleService');
const { businessError, success } = require('../lib/responseTemplate');

const getAccessMenuList = ({ req, res }) => {
  console.log('获取菜单', req.user);
  getUserInfoById(req.user.userId).then((userInfo) => {
    menuService.getAllMenuList().then((doc) => {
      let menuList = menuService.AccessMenuList(req, userInfo, doc);
      return success({ res, data: menuList });
    });
  });
};

// 获取所有菜单
const getAllMenuWithPage = ({ req, res }) => {
  console.log('获取菜单列表', req.query);
  let pageIndex = req.query.pageIndex;
  let pageSize = req.query.pageSize;
  let sortBy = req.query.sortBy;
  let descending = req.query.descending;
  let filter = JSON.parse(req.query.filter);
  menuService
    .getAllMenuWithPage(pageIndex, pageSize, sortBy, descending, filter)
    .then((doc) => {
      return success({ res, data: doc });
    })
    .catch(() => {
      businessError({ res, msg: '服务器错误' });
    });
};

const saveMenu = ({ req, res }) => {
  const menu = req.body;
  if (menu.name === '') {
    return businessError({ res, msg: '名称不能为空!' });
  }
  if (menu.title === '') {
    return businessError({ res, msg: '标题不能为空!' });
  }
  if (menu.icon === '') {
    return businessError({ res, msg: '请选择图标!' });
  }
  menuService
    .getAllMenuList()
    .then((doc) => {
      return menuService.postSaveMenu(res, menu, doc);
    })
    .catch(() => {
      businessError({ res, msg: '服务器错误' });
    });
};

const editMenu = ({ req, res }) => {
  const menu = req.body;
  if (menu.name === '') {
    return businessError({ res, msg: '名称不能为空!' });
  }
  if (menu.title === '') {
    return businessError({ res, msg: '标题不能为空!' });
  }
  if (menu.icon === '') {
    return businessError({ res, msg: '请选择图标!' });
  }
  menuService
    .editMenu()
    .then((doc) => {
      return success({ res, data: doc });
    })
    .catch(() => {
      businessError({ res, msg: '服务器错误' });
    });
};

// 角色权限管理
const getMenufunctions = async ({ req, res }) => {
  console.log('moduleID', req.query.menuId);
  let menuId = req.query.menuId;
  let roleId = req.query.roleId;
  let [menuFunctions, roleFunctions] = await Promise.all([
    menuService.GetMenuFunctions(menuId),
    getRoleFunctions(roleId),
  ]);
  // console.log('getRolefunctions', roleFunctions);
  return success({
    res,
    data: {
      menuFunctions: menuFunctions,
      roleFunctions: roleFunctions,
    },
  });
};
module.exports = {
  getAccessMenuList,
  saveMenu,
  getMenufunctions,
  getAllMenuWithPage,
  editMenu,
};
