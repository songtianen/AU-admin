const { getUserInfoById } = require('../services/userService');
const { checkParametersEmpety } = require('../util/util');
const menuService = require('../services/menuService');
// const { getRoleFunctions } = require('../services/roleService');
const { businessError, success } = require('../lib/responseTemplate');

// 获取UserId中所有菜单 带权限
const getAccessMenu = async ({ req, res }) => {
  if (req.user && req.user.userId) {
    const userInfo = await getUserInfoById(req.user.userId);
    console.log('查询userInfo', userInfo);
    const menuList = await menuService.AccessMenu(userInfo);
    if (menuList.success) {
      return success({ res, data: menuList.menuTree });
    }
  }
  return businessError({ res, msg: '数据库错误' });
};

// 获取哪些页面的菜单:非树结构
const getAllMenu = ({ req, res }) => {
  // console.log('获取菜单列表', req.query);
  let pageIndex = req.query.pageIndex || '';
  let pageSize = req.query.pageSize || '';
  let sortBy = req.query.sortBy || '';
  let descending = req.query.descending || '';
  let filter = req.query.filter ? JSON.parse(req.query.filter) : '';
  menuService
    .getAllMenu(pageIndex, pageSize, sortBy, descending, filter)
    .then((doc) => {
      return success({ res, data: doc });
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
  let data = Object.assign({}, { ...menu });
  data.isLock === '0' ? (data.isLock = false) : (data.isLock = true);
  data.leftMenu === '0' ? (data.leftMenu = false) : (data.leftMenu = true);
  menuService
    .editMenu(data)
    .then((doc) => {
      if (!doc.success) {
        return businessError({ res, msg: doc.msg });
      }
      return success({ res, msg: doc.msg });
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
      if (!doc.success) {
        return businessError({ res, msg: doc.msg });
      }
      return success({ res, msg: doc.msg });
    })
    .catch((e) => {
      businessError({ res, msg: e.msg });
    });
};

// 获取菜单数与功能树
const getAllMenuWithFunction = async ({ req, res }) => {
  const { roleId } = req.query;
  // 传入roleID，返回role下的permission
  console.log('roleId', roleId);
  menuService
    .getAllMenuWithFunction(roleId)
    .then((doc) => {
      return success({ res, data: doc });
    })
    .catch(() => {
      businessError({ res, msg: '服务器错误' });
    });
};
module.exports = {
  getAccessMenu,
  getAllMenu,
  editMenu,
  addMenu,
  delMenus,
  getAllMenuWithFunction,
};
