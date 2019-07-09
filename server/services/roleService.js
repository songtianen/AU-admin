/* eslint-disable no-undef */
const { roleModel } = require('../model/model');
const uuidv4 = require('uuid/v4');
const _ = require('lodash');
// const context = 'role';
// const permissionContext = 'permission';
const { dbConfig } = require('../db/db');
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
    // console.log('用户角色filter----', filter);
    // let roleList = db.value();
    // eslint-disable-next-line no-unused-vars
    let resultList = db;
    // 前端模糊查询
    if (filter.code) {
      resultList = _.filter(resultList, (o) => {
        return o.code.indexOf(filter.code) > -1;
      });
      // console.log('用户角色filter', resultList);
    }
    // 前端模糊查询
    if (filter.name) {
      resultList = _.filter(resultList, (o) => {
        return o.name.indexOf(filter.name) > -1;
      });
      // console.log('用户角色filter', resultList);
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
    const a = await roleModel.findOneAndRemove({ id: id });
    console.log('删除角色Role', a);
  },
  saveRole: async (role) => {
    let exist = await roleModel.findOne({ code: role.code });
    console.log('查询数据库save', exist);
    if (exist && exist.id !== role.id) {
      return {
        success: false,
        msg: '角色编码已经存在',
      };
    }
    let exist1 = await roleModel.findOne({ name: role.name });
    // console.log('查询数据库save', exist);
    if (exist1 && exist1.id !== role.id) {
      return {
        success: false,
        msg: '角色名称已经存在',
      };
    }
    // eslint-disable-next-line new-cap
    const insertRole = new roleModel({
      ...role,
      id: uuidv4(),
    });
    if (role.id) {
      console.log('查询数据库save===--id', role.id);
      await roleModel.where({ id: role.id }).update({ $set: { ...role } });
    } else {
      await insertRole.save({ ...role });
    }
    return {
      success: true,
      msg: '',
    };
  },
  getRoleFunctions: async (roleId) => {
    console.log('roleId', roleId);
    let list = dbConfig.permission;
    let roleFunctions = list.filter((s) => {
      // eslint-disable-next-line eqeqeq
      return s.roleId == roleId;
    });
    return roleFunctions;
  },
  // getRoleFuntionsByRoleIds: async (roleIds) => {
  //   let db = await model.init(permissionContext);
  //   let list = db.value();
  //   let roleFunctions = list.filter((s) => {
  //     return roleIds.indexOf(s.roleId) > -1;
  //   });
  //   return roleFunctions;
  // },
  // savePermission: async (menuIds, roleId, permissions) => {
  //   let db = await model.init(permissionContext);
  //   for (let menuId of menuIds) {
  //     await db.remove({ moduleId: menuId, roleId: roleId }).write();
  //   }
  //   for (let permission of permissions) {
  //     await db
  //       .insert({
  //         roleId: roleId,
  //         functionId: permission.id,
  //         moduleId: permission.moduleId,
  //       })
  //       .write();
  //   }
  // },
  // getRoleListByIdList: async (idList) => {
  //   let db = await model.init(context);
  //   let roleList = db.value();
  //   let result = roleList.filter((s) => {
  //     return idList.indexOf(s.id) > -1;
  //   });
  //   return result;
  // },
};
