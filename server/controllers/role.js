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
  saveRole: ({ req, res }) => {
    let func = req.body;
    console.log('角色保存', func);
    if (func.name === '') {
      return responseTemplate.businessError(res, '名称不能为空!');
    }
    if (func.code === '') {
      return responseTemplate.businessError(res, '编码不能为空!');
    }
    roleService
      .saveRole(func)
      .then((result) => {
        if (!result.success) {
          return responseTemplate.businessError(res, result.msg);
        } else {
          return responseTemplate.success({
            res,
            data: '',
            msg: '数据库保存成功!!!',
          });
        }
      })
      .catch((err) => {
        return responseTemplate.businessError(res, err);
      });
  },

  delRole: async ({ req, res }) => {
    let id = req.body.id;
    await roleService.delRole(id);
    return responseTemplate.success({ res, msg: '删除成功' });
  },

  delRoles: async ({ req, res }) => {
    let ids = JSON.parse(req.body.ids);
    for (let id of ids) {
      await roleService.delRole(id);
    }
    return responseTemplate.success({ res, msg: '多条删除成功' });
  },
};

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
