/* eslint-disable handle-callback-err */
const express = require('express');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../model/model'); // 引入模型
const { md5PWD, secretKey } = require('../util/md5');
const { businessError, success } = require('../lib/responseTemplate');
const { PermissionCheck } = require('../middleware/PermissionCheck');
const { checkRegister } = require('../util/userUtil');
const { postRegister, postSaveUser } = require('../controllers/user');

const {
  getUserInfo,
  getUserPagelist,
  postEditRoleuser,
  getAllUser,
  postDelUser,
} = require('../controllers/user');

const User = UserModel;
const router = express.Router();

// 获取用户列表

// 用户登录接口
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // User.create({ userName: req.body.username, pwd: md5PWD(req.body.password) })
  // User.update({ userName: username }, { $set: { userRole: [ 'role_test', 'role_website_admin' ] } }, function(err, doc) {
  //   console.log('更新数据库测试', doc)
  // })
  // User.update({ userName: username }, { $set: { isAdmin: true } }, function (err, doc) {
  //   console.log('更新数据库测试', doc)
  // })
  User.findOne(
    {
      // 判断密码是否正确
      userName: username,
      pwd: md5PWD(password),
    },
    (err, user) => {
      if (user !== null) {
        const tokenObj = {
          username: user.userName,
          isAdmin: user.isAdmin,
          userId: user.id,
        };
        // 用户登录成功过后生成token返给前端
        let token = jwt.sign(tokenObj, secretKey, {
          expiresIn: '24h', // 授权时效24小时
        });
        success({ res, data: { accessToken: token } });
      } else {
        businessError({ res, msg: 'fail' });
      }
    },
  );
});
// 注册
router.post('/register', (req, res) => {
  console.log(req.body);
  // 验证参数是否合法
  checkRegister(req.body, res);
  // 用户信息保存数据库，返回token
  postRegister({ req, res });
  // success({ res, data: { accessToken: 'song' } });
});
router.post('/logout', (req, res) => {
  // console.log('推出登陆');
  return success({ res, data: { logout: true } });
});

// 用户注册接口

router.get('/info', (req, res) => {
  // console.log('getuserinfo user=====', req.user);
  getUserInfo({ req, res });
});
router.get('/pagedlist', (req, res) => {
  getUserPagelist({ req, res });
});
router.post(
  '/editroleuser',
  PermissionCheck({
    permission: ['role_user_edit', 'user_role_edit'],
  }),
  (req, res) => {
    postEditRoleuser({ req, res });
  },
);
router.get(
  '/getalluser',
  PermissionCheck({
    permission: ['role_user_edit', 'user_role_edit'],
  }),
  (req, res) => {
    getAllUser({ req, res });
  },
);
router.post(
  '/saveuser',
  PermissionCheck({
    permission: ['role_user_edit', 'user_role_edit'],
  }),
  (req, res) => {
    postSaveUser({ req, res });
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
