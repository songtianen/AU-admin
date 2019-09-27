const express = require('express');
const user = require('./user-router');
const menu = require('./menu-router');
const func = require('./func-router');
const role = require('./role-router');
const jwtAuth = require('./jwt');
// 注册路由
const router = express.Router();
// 所有请求过来都会进行身份验证
router.use(jwtAuth);
// 路由中间件
router.use((req, res, next) => {
  // 任何路由信息都会执行这里面的语句
  // console.log('this is a api request!');
  // 把它交给下一个中间件，注意中间件的注册顺序是按序执行
  next();
});
// 处理5错误
router.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
      message: 'invalid token',
      error: err,
    });
  } else {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  }
});

router.use('/user', user);
router.use('/menu', menu);
router.use('/function', func);
router.use('/role', role);

module.exports = router;
