const { FunctionPagedList, findFunctionList } = require('../services/functionService')
const { PermissionCheck } = require('../util/PermissionCheck')
const { getUserInfoById } = require('../services/userService')

const responseTemplate = require('../lib/responseTemplate')
const { success, businessError } = require('../lib/responseTemplate')

const getFunctionPagedList = ({ req, res }) => {
  // console.log('function Http', req.query)
  let pageIndex = req.query.pageIndex
  let pageSize = req.query.pageSize
  let sortBy = req.query.sortBy
  let descending = req.query.descending
  let filter = JSON.parse(req.query.filter)
  getUserInfoById(req.user.userId).then(result => {
    PermissionCheck({ result, req, res, permission: ['function_view'], role: ['role_website_admin'] }).then(rs => {
      // console.log('PermissionCheck', rs)
      if (rs) {
        findFunctionList().then((doc) => {
          const pagedList = FunctionPagedList(doc, req, res, pageIndex, pageSize, sortBy, descending, filter)
          return success(res, pagedList)
        })
      } else {
        return businessError(res, '您可能没有权限')
      }
    })
  }).catch(err => { console.log('getFunctionPagedList错误', err) })
}
const delFuntion = async (ctx) => {
  // let id = ctx.query.id
  // await functionService.delFuntion(id)
  return responseTemplate.success(ctx, null)
}

module.exports = {
  getFunctionPagedList,
  delFuntion
}
// export let delFuntions = async (ctx) => {
//   let ids = JSON.parse(ctx.query.ids)
//   for (let id of ids) {
//     await functionService.delFuntion(id)
//   }
//   return responseTemplate.success(ctx, null)
// }

// export let saveFuntion = async (ctx) => {
//   let func = ctx.request.body
//   if (func.name === '') {
//     return responseTemplate.businessError(ctx, '名称不能为空!')
//   }
//   if (func.code === '') {
//     return responseTemplate.businessError(ctx, '编码不能为空!')
//   }
//   if (!func.moduleId) {
//     return responseTemplate.businessError(ctx, '请选择模块!')
//   }
//   let result = await functionService.saveFunction(func)
//   if (!result.success) {
//     return responseTemplate.businessError(ctx, result.msg)
//   }
//   return responseTemplate.success(ctx, null)
// }
