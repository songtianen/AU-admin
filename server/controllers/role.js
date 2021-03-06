// 角色
const roleService = require('../services/roleService');

const { businessError, success } = require('../lib/responseTemplate');
const responseTemplate = require('../lib/responseTemplate');
const { checkParametersEmpety } = require('../util/util');
const { commonService } = require('../util/services');

module.exports = {
  getRolePagedList: async ({ req, res }) => {
    // console.log('获取Role', req.query);
    let pageIndex = req.query.pageIndex || '';
    let pageSize = req.query.pageSize || '';
    let sortBy = req.query.sortBy || '';
    let descending = req.query.descending || '';
    let filter = req.query.filter ? JSON.parse(req.query.filter) : '';
    let pagedList = await roleService.getRolePagedList(
      pageIndex,
      pageSize,
      sortBy,
      descending,
      filter,
    );
    // console.log('请求角色', pagedList);
    responseTemplate.success({
      res,
      data: pagedList,
      info: 'getRolePagedList',
    });
  },
  editRole: async ({ req, res }) => {
    let roleData = req.body;
    // console.log('角色管理', roleData);
    const isEmpty = await checkParametersEmpety(roleData);
    if (isEmpty.msg || isEmpty.keys.length) {
      return businessError({ res, msg: isEmpty.msg, data: isEmpty.keys });
    }
    if (isEmpty.keys.length === 0 && isEmpty.msg === '') {
      // 更新部门中的Role
      let departmentData = {
        setDepartmentRole: {
          name: 'setDepartmentRole',
          modalSchema: 'DepartmentModel',
          func: 'updateOne',
          query: { id: roleData.departmentId },
          operator: [
            {
              // addToSet 更新添加数组中的元素(可以是单条，也可以是数组)
              $addToSet: {
                roleId: roleData.id,
              },
            },
          ],
        },
      };
      await commonService(departmentData);
      const editRes = await roleService.editRole(roleData);
      if (!editRes.success) {
        return businessError({ res, msg: editRes.msg });
      }
      if (editRes.success && editRes.data) {
        return success({ res, msg: '服务器保存成功！' });
      }
    }
  },

  addRole: async ({ req, res }) => {
    let func = req.body;
    // 非空
    const isEmpty = await checkParametersEmpety(func);
    if (isEmpty.msg || isEmpty.keys.length) {
      return businessError({ res, msg: isEmpty.msg, data: isEmpty.keys });
    }
    roleService
      .addRole(func)
      .then((result) => {
        if (!result.success) {
          return responseTemplate.businessError({ res, msg: result.msg });
        } else {
          return responseTemplate.success({
            res,
            data: '',
            msg: '数据库保存成功!!!',
          });
        }
      })
      .catch((e) => {
        // console.log(err);
        return responseTemplate.businessError({ res, msg: e.message });
      });
  },

  delRoles: async ({ req, res }) => {
    let { ids, departmentIds } = req.body;
    await roleService
      .delRoles({ ids, departmentIds })
      .then((doc) => {
        return responseTemplate.success({ res, msg: '多条删除成功' });
      })
      .catch((e) => {
        return responseTemplate.businessError({ res, msg: e.message });
      });
  },
  savePermission: async ({ req, res }) => {
    let { moduleId, roleId, permissions } = req.body;
    // console.log('保存权限', permissions.length);
    let db = await roleService.savePermission(moduleId, roleId, permissions);
    if (db) {
      return responseTemplate.success({ res, msg: '角色权限保存成功' });
    }
    responseTemplate.businessError({ res, msg: '数据库保存失败!' });
  },
  addRoleForUser: async ({ req, res }) => {
    const { moduleId, userId } = req.body;
    roleService
      .addRoleForUser(moduleId, userId)
      .then((doc) => {
        return success({ res, data: '', msg: '服务器保存成功' });
      })
      .catch((e) => {
        return businessError({ res, msg: e.message });
      });
  },
  // 删除Role,里面的userId
  delUserForRoleId: async ({ req, res }) => {
    const { roleId, userIds } = req.body;

    roleService
      .delUserForRoleId({ roleId, userIds })
      .then((doc) => {
        return success({ res, msg: '删除成功' });
      })
      .catch((e) => {
        return businessError({ res, msg: e.message });
      });
  },

  // 删除某个user里面的Role
  delRoleForUserId: async ({ req, res }) => {
    const { userId, roleIds } = req.body;
    // console.log('userId, roleIds ', userId, roleIds);

    roleService
      .delRoleForUserId({ userId, roleIds })
      .then((doc) => {
        // console.log('docdoc-- ', doc);

        return success({ res, msg: '删除成功' });
      })
      .catch((e) => {
        return businessError({ res, msg: e.message });
      });
  },
  // 给Role添加用户
  addUserForRole: async ({ req, res }) => {
    const { userIds, roleId } = req.body;
    roleService
      .addUserForRole({ userIds, roleId })
      .then((doc) => {
        if (doc) {
          return success({ res, msg: '添加成功' });
        }
      })
      .catch((e) => {
        return businessError({ res, msg: e.message });
      });
  },
  // 得到Roleid下的所有user
  getUserFromRoleId: async ({ req, res }) => {
    let pageIndex = req.query.pageIndex;
    let pageSize = req.query.pageSize;
    let sortBy = req.query.sortBy;
    let descending = req.query.descending;
    let filter = JSON.parse(req.query.filter);
    const info = await roleService.getUserFromRoleId(
      pageIndex,
      pageSize,
      sortBy,
      descending,
      filter,
    );
    if (!info) {
      return businessError({ res, msg: '数据库保存失败' });
    }
    return success({ res, data: info, meg: '数据库更新成功' });
  },
  // 获取userID下的所有role
  getRoleFromUserId: async ({ req, res }) => {
    let pageIndex = req.query.pageIndex;
    let pageSize = req.query.pageSize;
    let sortBy = req.query.sortBy;
    let descending = req.query.descending;
    let filter = JSON.parse(req.query.filter);
    // console.log('前端请求过来的数据', filter);

    roleService
      .getRoleFromUserId({ filter, pageIndex, pageSize, sortBy, descending })
      .then((doc) => {
        success({ res, msg: '查询成功', data: doc });
      })
      .catch((e) => {
        businessError({ res, msg: e.message });
      });
  },
};
