const { FunctionModel } = require('../model/model');
const uuidv4 = require('uuid/v4');

const _ = require('lodash');
// const { businessError, success } = require('../lib/responseTemplate');

// 查询功能列表
const findFunctionList = (selector = {}) => {
  return FunctionModel.find(selector);
};

module.exports = {
  findFunctionList,
  functionPagedList: (
    doc,
    req,
    res,
    pageIndex,
    pageSize,
    sortBy,
    descending,
    filter,
  ) => {
    console.log('前端数据filter', filter);
    let resultList = doc;
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
  //   getFunctionList: async () => {
  //     let db = await model.init(context)
  //     return db.value()
  //   },
  //   getFunctionListByIds: async (ids) => {
  //     let db = await model.init(context)
  //     let list = db.value()
  //     let functions = list.filter(s => {
  //       return ids.indexOf(s.id) > -1
  //     })
  //     return functions
  //   },
  serviceDelFuntion: async (id) => {
    // 删除一条
    const de = await FunctionModel.deleteOne({ id: id });
    return de;
  },
  saveFunction: async (func) => {
    // 查询一条
    const funcCode = await FunctionModel.findOne({ code: func.code });

    if (funcCode && funcCode.id !== func.id) {
      return {
        success: false,
        msg: '功能编码已经存在',
      };
    }
    console.log('async 测试funcCode', funcCode);
    const funcName = await FunctionModel.findOne({
      moduleId: func.moduleId,
      name: func.name,
    });
    console.log('async 测试funcName', funcName);

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
      console.log('保存的数据', typeof d.ok);
      if (ok) {
        return {
          success: true,
          msg: '数据更新成功！',
        };
      }
    } else {
      const insertFunc = {
        ...func,
        id: uuidv4(),
      };
      const dbFunc = new FunctionModel(insertFunc);
      await dbFunc.save((er) => {
        console.log('保存错误', er);
      });
      return {
        success: true,
        msg: '数据保存成功！',
      };
    }
  },
};
