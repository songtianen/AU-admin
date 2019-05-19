/* eslint-disable handle-callback-err */
const express = require('express');
const jwt = require('jsonwebtoken');
const { userModel } = require('../model/model'); // 引入模型
const { md5PWD, secretKey } = require('../util/md5');
const { businessError, success } = require('../lib/responseTemplate');
const { getUserInfo } = require('../controllers/user');

const User = userModel;
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
          userId: user._id,
        };
        // 用户登录成功过后生成token返给前端
        let token = jwt.sign(tokenObj, secretKey, {
          expiresIn: '24h', // 授权时效24小时
        });
        success({ res, data: { accessToken: token } });
      } else {
        businessError(res, 'fail');
      }
    },
  );
});

// 用户注册接口

router.get('/info', (req, res) => {
  // console.log('getuserinfo user=====', req.user);
  getUserInfo({ req, res });
});

module.exports = router;
