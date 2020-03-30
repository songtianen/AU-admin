const { FunctionModel, RoleModel } = require('../model/model');
const uuidv4 = require('uuid/v4');
const dbSchema = require('../db/dbSchema');

const _ = require('lodash');
// const { businessError, success } = require('../lib/responseTemplate');

// 查询功能列表
const findFunctionList = (selector = {}) => {
  return FunctionModel.find(selector);
};

module.exports = {
  findFunctionList,
  functionPagedList: async (
    pageIndex,
    pageSize,
    sortBy,
    descending,
    filter,
  ) => {
    let resultList = await FunctionModel.find({});
    resultList = JSON.parse(JSON.stringify(resultList));
    if (filter.module) {
      resultList = _.filter(resultList, (o) => {
        return o.module.indexOf(filter.module) > -1;
      });
    }
    if (filter.name) {
      resultList = _.filter(resultList, (o) => {
        return o.name.indexOf(filter.name) > -1;
      });
    }
    if (filter.code) {
      resultList = _.filter(resultList, (o) => {
        return o.code.indexOf(filter.code) > -1;
      });
    }
    let totalCount = resultList.length;
    if (sortBy) {
      resultList = _.sortBy(resultList, [sortBy]);
      if (descending === 'true') {
        resultList = resultList.reverse();
      }
    } else {
      resultList = _.sortBy(resultList, ['module', 'name']);
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
  addFunction: async (data) => {
    if (data) {
      if (data.name) {
        const info = await FunctionModel.findOne({ name: data.name });
        if (info) {
          return {
            success: false,
            msg: `${info.name}已存在`,
          };
        }
      }
      if (data.code) {
        const info = await FunctionModel.findOne({ code: data.code });
        if (info) {
          return {
            success: false,
            msg: `${info.code}已存在`,
          };
        }
      }
      await FunctionModel.create({
        ...dbSchema.Function,
        ...data,
        id: uuidv4(),
      });
      return {
        success: true,
        msg: '数据库保存成功',
      };
    }

    return {
      success: false,
      msg: '数据库保存失败',
    };
  },
  delFuntions: async (ids) => {
    if (ids) {
      await FunctionModel.deleteMany({ id: ids });
      await RoleModel.updateMany(
        { permission: { $in: ids } },
        {
          // 删除数组内多条
          $pullAll: {
            permission: ids,
          },
        },
      );
      return {
        success: true,
        msg: '删除成功！',
      };
    }
    return {
      success: false,
      msg: '参数错误',
    };
  },
  editFunction: async (func) => {
    // 查询一条
    const funcCode = await FunctionModel.findOne({ code: func.code });

    if (funcCode && funcCode.id !== func.id) {
      return {
        success: false,
        msg: '功能编码已经存在',
      };
    }
    const funcName = await FunctionModel.findOne({
      moduleId: func.moduleId,
      name: func.name,
    });
    if (funcName && funcName.id !== func.id) {
      return {
        success: false,
        msg: '当前模块功能名称已经存在',
      };
    }
    if (func.id) {
      const d = await FunctionModel.where({ id: func.id }).updateOne({
        $set: { ...func },
      });
      const { ok } = d;
      // console.log('保存的数据', typeof d.ok);
      if (ok) {
        return {
          success: true,
          msg: '数据更新成功！',
        };
      }
    }
  },
};
