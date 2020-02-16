const { getUserInfoById } = require('../services/userService');
const { checkParametersEmpety } = require('../util/util');
const menuService = require('../services/menuService');
const { getRoleFunctions } = require('../services/roleService');
const { businessError, success } = require('../lib/responseTemplate');

const getAccessMenuList = ({ req, res }) => {
  // console.log('获取菜单', req.user);
  getUserInfoById(req.user.userId).then((userInfo) => {
    menuService.getAllMenuList().then((doc) => {
      let menuList = menuService.AccessMenuList(req, userInfo, doc);
      return success({ res, data: menuList });
    });
  });
};

// 获取所有菜单
const getAllMenuWithPage = ({ req, res }) => {
  // console.log('获取菜单列表', req.query);
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

const addMenu = async ({ req, res }) => {
  let { title, name, functionCode, path } = req.body;
  let menuData = req.body;
  // 非空验证
  const isEmpty = await checkParametersEmpety(menuData);

  if (isEmpty.msg || isEmpty.keys.length) {
    return businessError({ res, msg: isEmpty.msg, data: isEmpty.keys });
  }
  if (isEmpty.keys.length === 0 && isEmpty.msg === '') {
    // console.log('添加menudoc', isEmpty);
    menuService
      // 验证数据库内是否同名
      .checkSameItemsInDB({ title }, { name }, { functionCode }, { path })
      .then((data) => {
        let msg = '';
        if (data && data.length) {
          data.forEach((item) => {
            let key = Object.keys(item).pop();
            let val = item[key];
            msg += `已存在:${val},`;
          });
        }
        return {
          err: data,
          msg,
        };
      })
      .then((data) => {
        if (data.err.length && data.msg) {
          return businessError({ res, data: data.err, msg: data.msg });
        }
        if (data.err.length === 0 && data.msg === '') {
          menuService
            .addMenu(menuData)
            .then((resdata) => {
              success({ res, msg: '数据库保存成功' });
            })
            .catch((e) => {
              businessError({ res, msg: e.msg });
            });
        }
      })
      .catch((e) => {
        businessError({ res, msg: e.msg });
      });
  }
};

const editMenu = ({ req, res }) => {
  const menu = req.body;
  const data = Object.assign({}, { ...menu });
  delete data._id;
  delete data.__v;

  menuService
    .editMenu(data)
    .then((doc) => {
      return success({ res, data: doc });
    })
    .catch((e) => {
      businessError({ res, msg: e });
    });
};

const delMenus = ({ req, res }) => {
  console.log('删除菜单', req.body);
  const { ids } = req.body;
  menuService
    .delMenus(ids)
    .then((doc) => {
      return success({ res, data: doc });
    })
    .catch((e) => {
      businessError({ res, msg: e.msg });
    });
};

// 角色权限管理
const getMenufunctions = async ({ req, res }) => {
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
  addMenu,
  delMenus,
};
