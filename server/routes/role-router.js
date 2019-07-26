const express = require('express');
const { PermissionCheck } = require('../middleware/PermissionCheck');
const {
  getRolePagedList,
  saveRole,
  delRoles,
  delRole,
  savePermission,
} = require('../controllers/role');

const router = express.Router();

router.get(
  '/pagedlist',
  PermissionCheck({
    permission: ['role_view', 'role_permission_view', 'role_user_view'],
  }),
  (req, res) => {
    // controller
    getRolePagedList({ req, res });
  },
);
router.post(
  '/save',
  PermissionCheck({ permission: ['role_edit'] }),
  (req, res) => {
    saveRole({ req, res });
  },
);

router.post(
  '/batchdel',
  PermissionCheck({ permission: ['role_del'] }),
  (req, res) => {
    delRoles({ req, res });
  },
);

router.post(
  '/del',
  PermissionCheck({ permission: ['role_del'] }),
  (req, res) => {
    delRole({ req, res });
  },
);
router.post(
  '/savepermission',
  PermissionCheck({ permission: ['role_permission_edit'] }),
  (req, res) => {
    savePermission({ req, res });
  },
);
// router.get(
//   '/pagedlist',
//   PermissionCheck({
//     permission: ['role_view', 'role_permission_view', 'role_user_view'],
//   }),
//   (req, res) => {
//     // controller
//   },
// );
// router.get(
//   '/pagedlist',
//   PermissionCheck({
//     permission: ['role_view', 'role_permission_view', 'role_user_view'],
//   }),
//   (req, res) => {
//     // controller
//   },
// );
module.exports = router;
