const express = require('express');
const { PermissionCheck } = require('../middleware/PermissionCheck');
const { getRolePagedList } = require('../controllers/role');

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
