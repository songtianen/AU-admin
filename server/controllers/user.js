
const {
  businessError,
  success

} = require('../lib/responseTemplate')
const {
  userModel,
  // ProductManagementModel,
  // ProductsModel,
  // SystemlimitsModel,
  // AccessMemu,
  // menuChildren
} = require('../model/model')

let getUserInfo = ({ req, res }) => {
  // console.log('user-controller', req.user)
  let user = req.user
  if (!user || !user.userId) {
    return businessError(res, '获取用户信息失败!')
  }
  userModel.findOne({ _id: user.userId }, function(err, doc) {
    if (err) {
      return businessError(res, '获取用户信息失败!')
    }
    if (doc) {
      success(res, {
        userName: doc.userName,
        userRole: doc.userRole,
        userPermission: doc.userPermission,
        isAdmin: doc.isAdmin,
        avatarUrl: doc.avatar
      })
    }
  })
}

// let getUserPagedList = async (ctx) => {
//   let pageIndex = ctx.query.pageIndex
//   let pageSize = ctx.query.pageSize
//   let sortBy = ctx.query.sortBy
//   let descending = ctx.query.descending
//   let filter = JSON.parse(ctx.query.filter)
//   let pagedList = await userService.getUserPagedList(pageIndex, pageSize, sortBy, descending, filter)
//   return responseTemplate.success(ctx, pagedList)
// }

// let delUser = async (ctx) => {
//   let id = ctx.query.id
//   let result = await userService.delUser(id)
//   if (!result.success) {
//     return responseTemplate.businessError(ctx, result.msg)
//   }
//   return responseTemplate.success(ctx, null)
// }

// let delUsers = async (ctx) => {
//   let ids = JSON.parse(ctx.query.ids)
//   for (let id of ids) {
//     await userService.delUser(id)
//   }
//   return responseTemplate.success(ctx, null)
// }

// let saveUser = async (ctx) => {
//   let func = ctx.request.body
//   if (func.name === '') {
//     return responseTemplate.businessError(ctx, '账号不能为空!')
//   }
//   let result = await userService.saveUser(func)
//   if (!result.success) {
//     return responseTemplate.businessError(ctx, result.msg)
//   }
//   return responseTemplate.success(ctx, null)
// }

// let editRoleUser = async (ctx) => {
//   let roleUser = ctx.request.body
//   await userService.editRoleUser(roleUser)
//   return responseTemplate.success(ctx, null)
// }

module.exports = {
  getUserInfo,
  // getUserPagedList,
  // delUser,
  // delUsers,
  // saveUser,
  // editRoleUser,
}
