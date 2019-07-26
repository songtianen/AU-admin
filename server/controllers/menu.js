const { getUserInfoById } = require('../services/userService');
const {
  MenuList,
  AccessMenuList,
  findAccessMenuList,
  postSaveMenu,
  GetMenuFunctions,
} = require('../services/menuService');
const { getRoleFunctions } = require('../services/roleService');
const { businessError, success } = require('../lib/responseTemplate');

// 无需权限
const getAccessMenuList = ({ req, res }) => {
  getUserInfoById(req.user.userId).then((userInfo) => {
    findAccessMenuList().then((doc) => {
      let menuList = AccessMenuList(req, userInfo, doc);
      return success({ res, data: menuList });
    });
  });
};

const getMenuList = ({ req, res }) => {
  findAccessMenuList()
    .then((doc) => {
      let menuList = MenuList(doc);
      return success({ res, data: menuList });
    })
    .catch(() => {
      businessError(res, '服务器错误');
    });
};

const saveMenu = ({ req, res }) => {
  const menu = req.body;
  if (menu.name === '') {
    return businessError(res, '名称不能为空!');
  }
  if (menu.title === '') {
    return businessError(res, '标题不能为空!');
  }
  if (menu.icon === '') {
    return businessError(res, '请选择图标!');
  }
  findAccessMenuList()
    .then((doc) => {
      return postSaveMenu(res, menu, doc);
    })
    .catch(() => {
      businessError(res, '服务器错误');
    });
};

// 角色权限管理
const getMenufunctions = async ({ req, res }) => {
  console.log('moduleID', req.query.menuId);
  let menuId = req.query.menuId;
  let roleId = req.query.roleId;
  let [menuFunctions, roleFunctions] = await Promise.all([
    GetMenuFunctions(menuId),
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
  getMenuList,
  saveMenu,
  getMenufunctions,
};
