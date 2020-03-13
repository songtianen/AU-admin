const express = require('express');
const { success } = require('../lib/responseTemplate');
const { PermissionCheck } = require('../middleware/PermissionCheck');
const { checkRegister } = require('../middleware/CheckUserRegister');
const {
  getUserInfo,
  getAllUser,
  postDelUser,
  addUser,
  editUser,
  loginUser,
  postRegister,
} = require('../controllers/user');

// const User = UserModel;
const router = express.Router();

router.post('/login', (req, res) => {
  loginUser({ req, res });
});
// 注册
router.post('/register', checkRegister(), (req, res) => {
  postRegister({ req, res });
  // success({ res, data: { accessToken: 'song' } });
});
router.get('/logout', (req, res) => {
  // console.log('推出登陆');
  return success({ res, data: { isLogout: true } });
});

router.get('/info', (req, res) => {
  // console.log('getuserinfo user=====', req.user);
  getUserInfo({ req, res });
});
router.get(
  '/getalluser',
  PermissionCheck({
    permission: ['user_view'],
  }),
  (req, res) => {
    getAllUser({ req, res });
  },
);
router.post(
  '/adduser',
  PermissionCheck({
    permission: ['role_user_edit', 'user_role_edit'],
  }),
  (req, res) => {
    addUser({ req, res });
  },
);
router.post(
  '/edituser',
  PermissionCheck({
    permission: ['role_user_edit', 'user_role_edit'],
  }),
  (req, res) => {
    editUser({ req, res });
  },
);
router.post(
  '/del',
  PermissionCheck({
    permission: ['role_user_edit', 'user_role_edit'],
  }),
  (req, res) => {
    postDelUser({ req, res });
  },
);

module.exports = router;
