/* eslint-disable no-undef */
// 角色
const { RoleModel, UserModel } = require('../model/model');
const uuidv4 = require('uuid/v4');
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
  },
  delRole: async (id) => {
    const isRemoveRole = await RoleModel.findOneAndDelete({ id: id });
    return isRemoveRole;
  },
  saveRole: async (role) => {
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
      console.log('查询数据库save===--id', role.id);
      await RoleModel.where({ id: role.id }).update({ $set: { ...role } });
    } else {
      await RoleModel.create({
        ...role,
        id: uuidv4(),
      });
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
  savePermission: async (moduleId, roleId, permissions) => {
    // 查询并更新数据
    let db = await RoleModel.findOneAndUpdate(
      { id: roleId },
      { $set: { moduleId: moduleId, permission: permissions } },
    );
    return db;
  },
};
