const express = require('express');
const { PermissionCheck } = require('../middleware/PermissionCheck');
const {
  getAccessMenuList,
  getAllMenuWithPage,
  saveMenu,
  getMenufunctions,
  editMenu,
  addMenu,
  delMenus,
  getAllMenuWithFunction,
} = require('../controllers/menu');

const router = express.Router();

router.get('/getaccessmenu', (req, res) => {
  getAccessMenuList({ req, res });
});
router.get('/getAllMenuWithFunction', (req, res) => {
  getAllMenuWithFunction({ req, res });
});
// 获取非树结构菜单
router.get('/', PermissionCheck({ permission: ['menu_view'] }), (req, res) => {
  getAllMenuWithPage({ req, res });
});
router.post(
  '/savemenu',
  PermissionCheck({ permission: ['menu_edit'] }),
  (req, res) => {
    saveMenu({ req, res });
  },
);
router.post(
  '/addmenu',
  PermissionCheck({ permission: ['menu_edit'] }),
  (req, res) => {
    addMenu({ req, res });
  },
);
router.post('/editmenu', PermissionCheck({ permission: [] }), (req, res) => {
  editMenu({ req, res });
});
router.post('/delmenus', PermissionCheck({ permission: [] }), (req, res) => {
  delMenus({ req, res });
});
// 角色权限接口
router.get('/menufunctions', (req, res) => {
  getMenufunctions({ req, res });
});
module.exports = router;
