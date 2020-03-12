const { RoleModel, UserModel, DepartmentModel } = require('../model/model');
const uuidv4 = require('uuid/v4');
const dbSchema = require('../db/dbSchema');

const { commonService } = require('../util/services');

const _ = require('lodash');

const findRoleInfo = async (ids) => {
  let c = [];
  for (let i = 0, len = ids.length; i < len; i++) {
    const s = await RoleModel.findOne({ id: ids[i] });
    if (!s) {
      return null;
    }
    c.push(s);
  }
  return c;
};
// eslint-disable-next-line no-unused-vars
const findRoleById = async (id) => {
  const role = await RoleModel.findOne({ id: id });
  return role;
};
module.exports = {
  getRolePagedList: async (pageIndex, pageSize, sortBy, descending, filter) => {
    // 如果有UserId就获取相应用户的角色列表
    if (filter.userId) {
      const userId = filter.userId;
      const user = await UserModel.findOne({ id: userId });
      if (!user) {
        return null;
      }
      let roleIds = user.userRole;
      roleIds = JSON.parse(JSON.stringify(roleIds));

      let roleInfo = await findRoleInfo(roleIds);
      let roleInfoList = JSON.parse(JSON.stringify(roleInfo));

      if (filter.code) {
        roleInfoList = _.filter(roleInfoList, (o) => {
          return o.code.indexOf(filter.code) > -1;
        });
      }
      if (filter.name) {
        roleInfoList = _.filter(roleInfoList, (o) => {
          return o.name.indexOf(filter.name) > -1;
        });
      }

      // 总页数
      let totalCount = roleInfoList.length;
      // 是否已经已经添加
      roleInfoList.forEach((item) => {
        item.isAdd = 1;
      });
      // 排序
      if (sortBy) {
        sortBy = 'isAdd';
        roleInfoList = _.sortBy(roleInfoList, [sortBy]);
        if (descending === 'true') {
          roleInfoList = roleInfoList.reverse();
        }
      }
      // 返回给前端第几页，的 数量。（）
      let start = (pageIndex - 1) * pageSize;
      let end = pageIndex * pageSize;
      roleInfoList = _.slice(roleInfoList, start, end);
      return {
        totalCount: totalCount,
        rows: roleInfoList,
      };
    }
    // 如果没有就获取全部的角色
    let roleLists = await RoleModel.find();
    roleLists = JSON.parse(JSON.stringify(roleLists));
    if (filter.code) {
      roleLists = _.filter(roleLists, (o) => {
        return o.code.indexOf(filter.code) > -1;
      });
    }
    if (filter.name) {
      roleLists = _.filter(roleLists, (o) => {
        return o.name.indexOf(filter.name) > -1;
      });
    }
    if (filter.departmentId) {
      roleLists = _.filter(roleLists, (o) => {
        return o.departmentId.indexOf(filter.departmentId) > -1;
      });
    }

    // 总页数
    let totalCount = roleLists.length;
    // 是否已经已经添加
    roleLists.forEach((item) => {
      item.isAdd = 1;
    });
    // 排序
    if (sortBy) {
      sortBy = 'isAdd';
      roleLists = _.sortBy(roleLists, [sortBy]);
      if (descending === 'true') {
        roleLists = roleLists.reverse();
      }
    }
    // 返回给前端第几页，的 数量。（）
    if (pageIndex && pageSize) {
      let start = (pageIndex - 1) * pageSize;
      let end = pageIndex * pageSize;
      roleLists = _.slice(roleLists, start, end);
    }
    return {
      totalCount: totalCount,
      rows: roleLists,
    };
  },
  delRole: async (id) => {
    const isRemoveRole = await RoleModel.findOneAndDelete({ id: id });
    // console.log('isRemoveRole', isRemoveRole);

    return isRemoveRole;
  },
  delRoles: async ({ ids, departmentIds }) => {
    const update = await Promise.all([
      RoleModel.deleteMany({ id: ids }),
      DepartmentModel.updateMany(
        { id: departmentIds },
        {
          // addToSet 更新添加数组中的元素(可以是单条，也可以是数组)
          $pullAll: {
            roleId: ids,
          },
        },
      ),
      UserModel.updateMany(
        { userRole: { $in: ids } },
        {
          $pullAll: {
            userRole: ids,
          },
        },
      ),
    ]);
    if (update) {
      return update;
    }
    return Promise.reject(new Error({ msg: '错误了song' }));
  },
  editRole: async (role) => {
    let exist = await RoleModel.findOne({ code: role.code });
    // console.log('查询数据库save', exist);
    if (exist && exist.id !== role.id) {
      return {
        success: false,
        msg: '角色编码已经存在',
      };
    }
    let exist1 = await RoleModel.findOne({ name: role.name });
    // console.log('查询数据库save', exist);
    if (exist1 && exist1.id !== role.id) {
      return {
        success: false,
        msg: '角色名称已经存在',
      };
    }
    // eslint-disable-next-line new-cap
    if (role.id) {
      // console.log('查询数据库save===--id', role.id);
      const res = await RoleModel.where({ id: role.id }).updateOne({
        $set: { ...role },
      });
      return {
        success: true,
        msg: '',
        data: res,
      };
    }
    return {
      success: false,
      msg: '参数错误',
    };
  },
  addRole: async (role) => {
    if (role.name) {
      const info = await RoleModel.findOne({ name: role.name });
      if (info) {
        return {
          success: false,
          msg: `${info.name}已存在`,
        };
      }
    }
    if (role.code) {
      const info = await RoleModel.findOne({ name: role.code });
      if (info) {
        return {
          success: false,
          msg: `${info.code}已存在`,
        };
      }
    }
    const created = await RoleModel.create({
      ...dbSchema.Menu,
      ...role,
      id: uuidv4(),
    });
    // 更新部门中的Role
    let departmentAddRoleIdSchema = {
      setDepartmentRole: {
        name: 'setDepartmentRole',
        modalSchema: 'DepartmentModel',
        func: 'updateOne',
        query: { id: role.departmentId },
        operator: [
          {
            // addToSet 更新添加数组中的元素(可以是单条，也可以是数组)
            $addToSet: {
              roleId: created.id,
            },
          },
        ],
      },
    };
    const res = await commonService(departmentAddRoleIdSchema);
    if (res.setDepartmentRole.data) {
      return {
        success: true,
        msg: '',
      };
    }
    return Promise.reject(new Error({ msg: '服务端错误' }));
  },
  getRoleFunctions: async (roleId) => {
    let roleFunctions = await RoleModel.findOne({ id: roleId });
    return roleFunctions.permission;
  },
  savePermission: async (moduleId, roleId, permissions) => {
    // 查询并更新数据
    let db = await RoleModel.findOneAndUpdate(
      { id: roleId },
      { $set: { moduleId: moduleId, permission: permissions } },
    );
    return db;
  },
  addRoleForUser: async (roleId, userId) => {
    if (roleId && userId) {
      return Promise.all([
        UserModel.updateOne(
          { id: userId },
          {
            // addToSet 更新添加数组中的元素(可以是单条，也可以是数组)
            $addToSet: {
              userRole: roleId,
            },
          },
        ),
        RoleModel.updateOne(
          { id: roleId },
          {
            // addToSet 更新添加数组中的元素(可以是单条，也可以是数组)
            $addToSet: {
              userId: userId,
            },
          },
        ),
      ]);
    }
    return Promise.reject(new Error({ msg: '参数错误' }));
  },
  addUserForRole: async ({ userIds, roleId }) => {
    // 1,查询roleid
    if (roleId && userIds) {
      return Promise.all([
        RoleModel.updateOne(
          { id: roleId },
          {
            // addToSet 更新添加数组中的元素(可以是单条，也可以是数组)
            $addToSet: {
              userId: userIds,
            },
          },
        ),
        UserModel.updateMany(
          {
            id: userIds,
          },
          {
            $addToSet: {
              userRole: roleId,
            },
          },
        ),
      ]);
    }
    return Promise.reject(new Error({ msg: '参数错误' }));
  },
  delUserForRoleId: async ({ roleId, userIds }) => {
    if (roleId && userIds) {
      const updateRoleModel = await RoleModel.updateOne(
        { id: roleId },
        {
          // pullAll删除数组内多条
          $pullAll: {
            userId: userIds,
          },
        },
      );
      const updateUserModel = await UserModel.updateMany(
        {
          id: userIds,
        },
        {
          // pull删除数组内单条
          $pull: {
            userRole: roleId,
          },
        },
      );
      return updateRoleModel && updateUserModel;
    } else {
      return null;
    }
  },
  delRoleForUserId: async ({ userId, roleIds }) => {
    if (userId && roleIds) {
      // 1 删role下的userId
      // findByIdAndUpdate 可返回文档
      // updateMany 不返回文档
      const updateRoleModel = await RoleModel.updateMany(
        { id: roleIds },
        {
          // pull删除数组内单条
          $pull: {
            userId: userId,
          },
        },
      );
      const updateUserModel = await UserModel.updateOne(
        {
          id: userId,
        },
        {
          // pullAll删除数组内多条
          $pullAll: {
            userRole: roleIds,
          },
        },
      );
      // console.log('updataUserModel删除userModel下的RoleIds', updateUserModel);

      return updateRoleModel && updateUserModel;
    } else {
      return new Error({ msg: '请求参数错误' });
    }
  },
  getUserFromRoleId: async (
    pageIndex,
    pageSize,
    sortBy,
    descending,
    filter,
  ) => {
    if (filter.roleId) {
      const roleId = filter.roleId;
      // 查询role下所有的userId
      const Role = await RoleModel.findOne({ id: roleId });
      if (!Role) {
        return null;
      }
      let userId = Role.userId;
      userId = JSON.parse(JSON.stringify(userId));

      const findUserInfo = async (ids) => {
        // let c = [];
        // for (let i = 0, len = ids.length; i < len; i++) {
        //   const s = await UserModel.findOne({ id: ids[i] });
        //   if (!s) {
        //     return null;
        //   }
        //   c.push(s);
        // }
        // return c;
        const c = await UserModel.find({ id: ids });
        return c;
      };
      let userInfo = await findUserInfo(userId);
      let userInfoList = JSON.parse(JSON.stringify(userInfo));
      // console.log('userId', userInfoList);

      if (filter.name) {
        userInfoList = _.filter(userInfoList, (o) => {
          // console.log('ooooooo', o);
          return (
            o.userName.indexOf(filter.name) > -1 ||
            o.nickName.indexOf(filter.name) > -1
          );
        });
      }
      if (filter.email) {
        userInfoList = _.filter(userInfoList, (o) => {
          return o.email.indexOf(filter.email) > -1;
        });
      }
      if (userInfoList && userInfoList.length) {
        // 总条数
        let totalCount = userInfoList.length;
        // 是否已经已经添加
        userInfoList.forEach((item) => {
          item.isAdd = 1;
        });
        // 排序
        if (sortBy) {
          sortBy = 'isAdd';
          userInfoList = _.sortBy(userInfoList, [sortBy]);
          if (descending === 'true') {
            userInfoList = userInfoList.reverse();
          }
        }
        // 返回给前端第几页，的 数量。（）
        let start = (pageIndex - 1) * pageSize;
        let end = pageIndex * pageSize;
        userInfoList = _.slice(userInfoList, start, end);
        return {
          totalCount: totalCount,
          rows: userInfoList,
        };
      }
      return {
        totalCount: 0,
        rows: [],
      };
    }

    return null;
  },
  getRoleFromUserId: async ({
    filter,
    pageIndex,
    pageSize,
    sortBy,
    descending,
  }) => {
    // console.log('userid-', filter.userId);
    if (filter.userId) {
      // 获取所有Role模型中有userId的的Role
      let roleLists = await RoleModel.find({ userId: filter.userId });
      if (filter.code) {
        roleLists = _.filter(roleLists, (o) => {
          return o.code.indexOf(filter.code) > -1;
        });
      }
      if (filter.name) {
        roleLists = _.filter(roleLists, (o) => {
          return o.name.indexOf(filter.name) > -1;
        });
      }

      // 总页数
      let totalCount = roleLists.length;
      // 是否已经已经添加
      roleLists.forEach((item) => {
        item.isAdd = 1;
      });
      // 排序
      if (sortBy) {
        sortBy = 'isAdd';
        roleLists = _.sortBy(roleLists, [sortBy]);
        if (descending === 'true') {
          roleLists = roleLists.reverse();
        }
      }
      // 返回给前端第几页，的 数量。（）
      let start = (pageIndex - 1) * pageSize;
      let end = pageIndex * pageSize;
      roleLists = _.slice(roleLists, start, end);
      return {
        totalCount: totalCount,
        rows: roleLists,
      };
    }
    return new Error({ msg: '没有userid' });
  },
};
