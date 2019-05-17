const express = require('express');
const { PermissionCheck } = require('../middleware/PermissionCheck');
const {
  getAccessMenuList,
  getMenuList,
  saveMenu,
} = require('../controllers/menu');

const router = express.Router();
// 无需权限验证
router.get('/getaccessmenu', (req, res) => {
  getAccessMenuList({ req, res });
});
router.get('/', PermissionCheck({ permission: ['menu_view'] }), (req, res) => {
  getMenuList({ req, res });
});
router.post(
  '/savemenu',
  PermissionCheck({ permission: ['menu_edit'] }),
  (req, res) => {
    saveMenu({ req, res });
  },
);
module.exports = router;
