const express = require('express');
const path = require('path');
const favicon = require('serve-favicon'); // 引用标签页图标
const bodyParser = require('body-parser'); // 转化 请求body 为 json格式的数据
const router = require('./routes/index.js');
// const expressStaticGzip = require('express-static-gzip');
const compression = require('compression');

const isEnv = process.env.NODE_ENV;
const PORT = isEnv === 'production' ? 8888 : 6666;
let app = express();

app.use(bodyParser.json()); // 请求体 json格式的数据转换成 req.body 格式的数据
app.use(bodyParser.urlencoded({ extended: false })); // form data 格式转换 req.body 格式
app.use(favicon(path.join(__dirname, '../favicon.ico'))); // 浏览器标签页的图标
app.use(compression()); // 注册资源压缩的中间件

if (isEnv === 'production') {
  // ----------------------
  // 托管静态资源目录
  app.use(
    '/public/',
    express.static(path.join(__dirname, '../dist'), {
      maxAge: 1000 * 60 * 60,
    }),
  );
  // ----------------------
  // app.use('/public/', expressStaticGzip(path.join(__dirname, '../dist')));
  app.use('/api', router);
  app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
    // next();
  });
}

if (isEnv === 'development') {
  console.log('isEnv === development');
  const devStatic = require('./util/dev-static');
  devStatic(app);
}
// 处理express 抛出错误 的中间件
app.use((error, req, res, next) => {
  // eslint-disable-line
  res.status(500).send(error);
});
let host = process.env.HOST || '0.0.0.0'; // eslint-disable-line
let port = process.env.PORT || PORT; // eslint-disable-line
// pm2 start process.yml --env production // eslint-disable-line
app.listen(port, host, () => {
  console.log('server is listening ', port);
});
