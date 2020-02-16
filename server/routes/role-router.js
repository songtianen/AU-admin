const express = require('express');
const { PermissionCheck } = require('../middleware/PermissionCheck');
const {
  getRolePagedList,
  getUserFromRoleId,
  editRole,
  delRoles,
  delRole,
  addRole,
  savePermission,
  addRoleForUser,
  addUserForRole,
  delRoleForUserId,
  getRoleFromUserId,
  delUserForRoleId,
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
  '/edit',
  PermissionCheck({ permission: ['role_edit'] }),
  (req, res) => {
    editRole({ req, res });
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
  '/addrole',
  PermissionCheck({ permission: ['role_del'] }),
  (req, res) => {
    addRole({ req, res });
  },
);
router.post(
  '/savepermission',
  PermissionCheck({ permission: ['role_permission_edit'] }),
  (req, res) => {
    savePermission({ req, res });
  },
);
router.post(
  '/addroleforuser',
  PermissionCheck({ permission: ['role_permission_edit'] }),
  (req, res) => {
    addRoleForUser({ req, res });
  },
);

router.post(
  '/adduserforrole',
  PermissionCheck({ permission: ['role_permission_edit'] }),
  (req, res) => {
    addUserForRole({ req, res });
  },
);

router.post(
  '/deluserforroleid',
  PermissionCheck({ permission: ['role_permission_edit'] }),
  (req, res) => {
    delUserForRoleId({ req, res });
  },
);

router.post(
  '/delroleforuserid',
  PermissionCheck({ permission: ['role_permission_edit'] }),
  (req, res) => {
    delRoleForUserId({ req, res });
  },
);

router.get(
  '/userfromrole',
  PermissionCheck({ permission: ['role_permission_edit'] }),
  (req, res) => {
    getUserFromRoleId({ req, res });
  },
);
router.get(
  '/getrolefromuserId',
  PermissionCheck({
    permission: ['role_view', 'role_permission_view', 'role_user_view'],
  }),
  (req, res) => {
    // controller
    getRoleFromUserId({ req, res });
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
