const express = require('express');
const { PermissionCheck } = require('../middleware/PermissionCheck');
const {
  getAccessMenuList,
  getAllMenuWithPage,
  saveMenu,
  getMenufunctions,
  editMenu,
} = require('../controllers/menu');

const router = express.Router();
router.get('/getaccessmenu', (req, res) => {
  getAccessMenuList({ req, res });
});
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
  '/editmenu',
  PermissionCheck({ permission: ['menu_edit'] }),
  (req, res) => {
    editMenu({ req, res });
  },
);
// 角色权限接口
router.get('/menufunctions', (req, res) => {
  getMenufunctions({ req, res });
});
module.exports = router;
