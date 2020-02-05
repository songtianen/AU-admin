const express = require('express');
const { PermissionCheck } = require('../middleware/PermissionCheck');
const {
  getAccessMenuList,
  getAllMenuWithPage,
  saveMenu,
  getMenufunctions,
} = require('../controllers/menu');

const router = express.Router();
// 无需权限验证
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
// 角色权限接口
router.get('/menufunctions', (req, res) => {
  getMenufunctions({ req, res });
});
module.exports = router;
