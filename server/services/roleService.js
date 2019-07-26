/* eslint-disable no-undef */
// 角色
const { RoleModel } = require('../model/model');
const uuidv4 = require('uuid/v4');
const _ = require('lodash');
module.exports = {
  getRolePagedList: async (pageIndex, pageSize, sortBy, descending, filter) => {
    // 创建数据库
    // RolePermission.create(
    //   {
    //     name: '',
    //     code: '',
    //     moduleId: '',
    //     roleId: '',
    //     permission: [],
    //     id: uuidv4(),
    //   },
    //   function(err, doc) {
    //     console.log('插入新文档', err, doc);
    //   },
    // );
    // 数据库插入一条数据
    // const insertRole = new RoleModel({
    //   code: 'role_test',
    //   name: '测试账号',
    //   description: '',
    //   permission: [],
    //   id: uuidv4(),
    // });
    // insertRole.save();
    // 数据库更新一条数据
    // User.update(
    //   { userName: 'song' },
    //   {
    //     $set: {
    //       userRole: ['role_test', 'role_website_admin'],
    //     },
    //   },
    //   function(err, doc) {
    //     console.log('更新数据库测试', err, doc);
    //   },
    // );
    // // 1 查询数据库
    let db = await RoleModel.find();
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
    const a = await RoleModel.findOneAndRemove({ id: id });
    console.log('删除角色Role', a);
  },
  saveRole: async (role) => {
    let exist = await RoleModel.findOne({ code: role.code });
    console.log('查询数据库save', exist);
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
    let roleFunctions = await RoleModel.findOne({ id: roleId });
    return roleFunctions.permission;
  },
  // getRoleFuntionsByRoleIds: async (roleIds) => {
  //   let db = await model.init(permissionContext);
  //   let list = db.value();
  //   let roleFunctions = list.filter((s) => {
  //     return roleIds.indexOf(s.roleId) > -1;
  //   });
  //   return roleFunctions;
  // },
  savePermission: async (moduleId, roleId, permissions) => {
    // 查询并更新数据
    let db = await RoleModel.findOneAndUpdate(
      { id: roleId },
      { $set: { moduleId: moduleId, permission: permissions } },
    );
    return db;
  },
  // getRoleListByIdList: async (idList) => {
  //   let db = await model.init(context);
  //   let roleList = db.value();
  //   let result = roleList.filter((s) => {
  //     return idList.indexOf(s.id) > -1;
  //   });
  //   return result;
  // },
};
