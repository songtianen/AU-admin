const express = require('express');
const { PermissionCheck } = require('../middleware/PermissionCheck');
const {
  getAccessMenu,
  getAllMenu,
  editMenu,
  addMenu,
  delMenus,
  getAllMenuWithFunction,
} = require('../controllers/menu');

const router = express.Router();

// （项目初始化）获取相应权限的菜单
router.get('/getaccessmenu', (req, res) => {
  getAccessMenu({ req, res });
});
// function页面请求
router.get('/getAllMenuWithFunction', (req, res) => {
  getAllMenuWithFunction({ req, res });
});
// (菜单页面)获取非树结构菜单
router.get('/', PermissionCheck({ permission: ['menu_view'] }), (req, res) => {
  getAllMenu({ req, res });
});
router.post(
  '/addmenu',
  PermissionCheck({ permission: ['menu_edit'] }),
  (req, res) => {
    addMenu({ req, res });
  },
);
router.post(
  '/editmenu',
  PermissionCheck({ permission: ['menu_edit'] }),
  (req, res) => {
    editMenu({ req, res });
  },
);
router.post(
  '/delmenus',
  PermissionCheck({ permission: ['menu_edit'] }),
  (req, res) => {
    delMenus({ req, res });
  },
);
module.exports = router;
