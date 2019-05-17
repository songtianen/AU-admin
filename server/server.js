const express = require('express');
const path = require('path');
const fs = require('fs');
const favicon = require('serve-favicon'); // 引用标签页图标
const bodyParser = require('body-parser'); // 转化 请求body 为 json格式的数据
// const session = require('express-session')
const router = require('./routes/index.js');

// const cookieParser = require('cookie-parser')
// -------
const isEnv = process.env.NODE_ENV;
console.log('环境变量', isEnv);
let app = express();
const userRouter = require('./routes/user-router.js');
// const manageRouter = require('./manage.js')

// app.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With')
//   res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
//   res.header('X-Powered-By', ' 3.2.1')
//   res.header('Content-Type', 'application/json;charset=utf-8')
//   next()
// })

// app.use(cookieParser())
app.use(bodyParser.json()); // 请求体 json格式的数据转换成 req.body 格式的数据
app.use(bodyParser.urlencoded({ extended: false })); // form data 格式转换 req.body 格式
// app.use(session({ // 设置session
//   maxAge: 10 * 60 * 10000,
//   name: 'tid', // session 会放一个 cooke id 在浏览器端 的名字
//   resave: false, // 每次请求 是否重新 放一个cookie id
//   saveUninitialized: false,
//   secret: 'song' // 加密用的字符串
// }))
app.use(favicon(path.join(__dirname, '../favicon.ico'))); // 浏览器标签页的图标
// app.use('/api/user', require('./util/handel-login')) // 代理 登入写入 session
// app.use('/api', require('./util/proxy')) // 代理其他接口
if (isEnv === 'production') {
  app.use('/public/', express.static(path.join(__dirname, '../dist'))); // 静态文件指定对应的请求返回
  app.use('/api', router);
  app.use('/api/user', userRouter);
  const index = fs.readFileSync(
    path.join(__dirname, '../dist/index.html'),
    'utf8',
  );
  app.get('*', (req, res, next) => {
    // eslint-disable-line
    // res.header('Content-Encoding', 'gzip')
    res.send(index);
    next();
  });
}

if (isEnv === 'development') {
  const devStatic = require('./util/dev-static');
  devStatic(app);
}
// 处理express 抛出错误 的中间件
app.use((error, req, res, next) => {
  // eslint-disable-line
  console.log(error);
  res.status(500).send(error);
});
let host = process.env.HOST || '0.0.0.0'; // eslint-disable-line
let port = process.env.PORT || 2223; // eslint-disable-line
// pm2 start process.yml --env production // eslint-disable-line
app.listen(port, host, () => {
  console.log('server is listening ', port);
});
