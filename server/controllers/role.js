const roleService = require('../services/roleService');
// import menuService from '../services/memuService';
// import functionService from '../services/functionService';
const responseTemplate = require('../lib/responseTemplate');

module.exports = {
  getRolePagedList: async ({ req, res }) => {
    let pageIndex = req.query.pageIndex;
    let pageSize = req.query.pageSize;
    let sortBy = req.query.sortBy;
    let descending = req.query.descending;
    let filter = JSON.parse(req.query.filter);
    let pagedList = await roleService.getRolePagedList(
      pageIndex,
      pageSize,
      sortBy,
      descending,
      filter,
    );
    responseTemplate.success({ res, data: pagedList });
  },
};

// export let delRole = async (ctx) => {
//   let id = ctx.query.id;
//   await roleService.delRole(id);
//   return responseTemplate.success(ctx, null);
// };

// export let delRoles = async (ctx) => {
//   let ids = JSON.parse(ctx.query.ids);
//   for (let id of ids) {
//     await roleService.delRole(id);
//   }
//   return responseTemplate.success(ctx, null);
// };

// export let saveRole = async (ctx) => {
//   let func = ctx.request.body;
//   if (func.name == '') {
//     return responseTemplate.businessError(ctx, '名称不能为空!');
//   }
//   if (func.code == '') {
//     return responseTemplate.businessError(ctx, '编码不能为空!');
//   }
//   let result = await roleService.saveRole(func);
//   if (!result.success) {
//     return responseTemplate.businessError(ctx, result.msg);
//   }
//   return responseTemplate.success(ctx, null);
// };

// export let savePermission = async (ctx) => {
//   let data = ctx.request.body;
//   let functionList = [];
//   if (data.moduleId == 0) {
//     functionList = await functionService.getFunctionList();
//   }
//   data.permissions = data.permissions.map((s) => {
//     // react-antd-admin
//     if (data.moduleId == 0) {
//       let f = functionList.filter((p) => p.id == s);
//       let permission = {};
//       permission.id = s;
//       permission.moduleId = f.length > 0 ? f[0].moduleId : 0;
//       return permission;
//     } else {
//       // vue-quasar-admin
//       s = JSON.parse(s);
//       return s;
//     }
//   });
//   let menuWithChildren = await menuService.getMenuFunctions(data.moduleId);
//   let menuIds = menuWithChildren.map((s) => {
//     return s.id;
//   });
//   await roleService.savePermission(menuIds, data.roleId, data.permissions);
//   return responseTemplate.success(ctx, null);
// };
