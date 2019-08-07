// const proxy = require('http-proxy-middleware')
const router = require('../routes/index.js');
// const session = require('express-session')
module.exports = (app) => {
  app.use('/', router);
  // app.get('*', (req, res, next) => { // eslint-disable-line
  //   console.log('123')
  //   res.send('<div>hello</div>')
  // })
};
