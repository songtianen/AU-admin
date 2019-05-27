/* eslint-disable no-undef */
const { roleModel } = require('../model/model');
// const uuidv4 = require('uuid/v4');
const _ = require('lodash');
const context = 'role';
const permissionContext = 'permission';
// const roleUserContext = 'roleUser';
module.exports = {
  getRolePagedList: async (pageIndex, pageSize, sortBy, descending, filter) => {
    // 创建数据库
    // roleModel.create({
    //   code: 'role_website_admin',
    //   name: '管理员账号',
    //   description: '',
    //   id: uuidv4(),
    // });
    // 数据库插入一条数据
    // const insertRole = new roleModel({
    //   code: 'role_test',
    //   name: '测试账号',
    //   description: '',
    //   id: uuidv4(),
    // });
    // insertRole.save();
    // // 1 查询数据库
    let db = await roleModel.find();
    console.log('用户角色filter', filter);
    // let roleList = db.value();
    // eslint-disable-next-line no-unused-vars
    let resultList = db;
    if (filter.code) {
      resultList = _.filter(resultList, (o) => {
        return o.code.indexOf(filter.code) > -1;
      });
    }
    if (filter.name) {
      resultList = _.filter(resultList, (o) => {
        return o.name.indexOf(filter.name) > -1;
      });
    }
    if (filter.userId) {
      let roleUserDb = await model.init(roleUserContext);
      let roleUserList = roleUserDb.filter({ userId: filter.userId }).value();
      roleUserList = roleUserList.map((s) => {
        return s.roleId;
      });
      resultList = _.map(resultList, (item) => {
        if (roleUserList.indexOf(item.id) > -1) {
          item.isAdd = 1;
        } else {
          item.isAdd = 2;
        }
        return item;
      });
      sortBy = 'isAdd';
    }
    let totalCount = resultList.length;
    if (sortBy) {
      resultList = _.sortBy(resultList, [sortBy]);
      if (descending === 'true') {
        resultList = resultList.reverse();
      }
    }
    let start = (pageIndex - 1) * pageSize;
    let end = pageIndex * pageSize;
    resultList = _.slice(resultList, start, end);

    return {
      totalCount: totalCount,
      rows: resultList,
    };
  },
  delRole: async (id) => {
    let db = await model.init(context);
    await db.remove({ id: id }).write();
  },
  saveRole: async (role) => {
    let db = await model.init(context);
    let exist = db.find({ code: role.code }).value();
    if (exist && exist.id !== role.id) {
      return {
        success: false,
        msg: '角色编码已经存在',
      };
    }
    let exist1 = db.find({ name: role.name }).value();
    if (exist1 && exist1.id !== role.id) {
      return {
        success: false,
        msg: '角色名称已经存在',
      };
    }
    if (role.id) {
      await db
        .find({ id: role.id })
        .assign(role)
        .write();
    } else {
      await db.insert(role).write();
    }
    return {
      success: true,
      msg: '',
    };
  },
  getRoleFunctions: async (roleId) => {
    let db = await model.init(permissionContext);
    let list = db.value();
    let roleFunctions = list.filter((s) => {
      // eslint-disable-next-line eqeqeq
      return s.roleId == roleId;
    });
    return roleFunctions;
  },
  getRoleFuntionsByRoleIds: async (roleIds) => {
    let db = await model.init(permissionContext);
    let list = db.value();
    let roleFunctions = list.filter((s) => {
      return roleIds.indexOf(s.roleId) > -1;
    });
    return roleFunctions;
  },
  savePermission: async (menuIds, roleId, permissions) => {
    let db = await model.init(permissionContext);
    for (let menuId of menuIds) {
      await db.remove({ moduleId: menuId, roleId: roleId }).write();
    }
    for (let permission of permissions) {
      await db
        .insert({
          roleId: roleId,
          functionId: permission.id,
          moduleId: permission.moduleId,
        })
        .write();
    }
  },
  getRoleListByIdList: async (idList) => {
    let db = await model.init(context);
    let roleList = db.value();
    let result = roleList.filter((s) => {
      return idList.indexOf(s.id) > -1;
    });
    return result;
  },
};
