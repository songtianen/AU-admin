// // 把所有 发向 cnnode API 的 接口 代理出去const axios = require('axios')
// const axios = require('axios')
// const querString = require('query-string')

// const baseUrl = 'https://cnodejs.org/api/v1'

// module.exports = function (req, res, next) { // eslint-disable-line
//   const path = req.path // 拿到接口地址
//   console.log('>>>>>>', baseUrl + path)
//   const user = req.session.user || { } // session 里是否有用户信息
//   const needAccessToken = req.query.needAccessToken // 是否需要 accessTonke
//   if (needAccessToken && !user.accessToken) {
//     res.status(401).send({ // 发送错误信息
//       success: false,
//       msg: 'need login'
//     })
//   }
//   const query = Object.assign({}, req.query, {
//     accesstoken: (needAccessToken && req.method === 'GET') ? user.accessToken : ''
//   })
//   if (query.needAccessToken) delete query.needAccessToken
//   // 如果 有accessToken 与 session.user 存在 就 代理接口

//   axios(`${baseUrl}${path}`, { // eslint-disable-line
//     method: req.method,
//     params: query,
//     data: querString.stringify(Object.assign({}, req.body, {
//       accesstoken: (needAccessToken && req.method === 'POST') ? user.accessToken : ''
//     })),
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//   }).then((resp) => {
//     if (resp.status === 200) {
//       res.send(resp.data)
//     } else {
//       res.status(resp.status).send(resp.data)
//     }
//   })
//     .catch((err) => {
//       if (err.response) {
//         res.status(500).send(err.response.data)
//       } else {
//         res.status(500).send({
//           success: false,
//           msg: 'unkonw err'
//         })
//       }
//     })
// }
