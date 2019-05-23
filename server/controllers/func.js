const {
  functionPagedList,
  findFunctionList,
  saveFunction,
  serviceDelFuntion,
} = require('../services/functionService');

const responseTemplate = require('../lib/responseTemplate');
const { success } = require('../lib/responseTemplate');

const getFunctionPagedList = ({ req, res }) => {
  // console.log('function Http', req.query)
  let pageIndex = req.query.pageIndex;
  let pageSize = req.query.pageSize;
  let sortBy = req.query.sortBy;
  let descending = req.query.descending;
  let filter = JSON.parse(req.query.filter);
  findFunctionList()
    .then((doc) => {
      const pagedList = functionPagedList(
        doc,
        req,
        res,
        pageIndex,
        pageSize,
        sortBy,
        descending,
        filter,
      );
      return success({ res, data: pagedList });
    })
    .catch((err) => {
      console.log('getFunctionPagedList错误', err);
    });
};
// 删除一条
const delFuntion = ({ req, res }) => {
  const id = req.query.id;
  serviceDelFuntion(id)
    .then((result) => {
      if (result && result.ok) {
        return responseTemplate.success({ res, msg: '删除成功' });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
// 删除多条
const delFuntions = ({ req, res }) => {
  let ids = JSON.parse(req.query.ids);
  // 删除多条数据也是一条一条删
  for (let id of ids) {
    serviceDelFuntion(id);
  }
  return responseTemplate.success({ res, msg: '已删除多条数据' });
};

const postSaveFunction = ({ req, res }) => {
  let func = req.body;
  console.log('postSaveFuntion--====-', func);
  if (func.name === '') {
    return responseTemplate.businessError(res, '名称不能为空!');
  }
  if (func.code === '') {
    return responseTemplate.businessError(res, '编码不能为空!');
  }
  if (!func.moduleId) {
    return responseTemplate.businessError(res, '请选择模块!');
  }
  saveFunction(func)
    .then((result) => {
      console.log('saveFunction 异步---', result);
      if (!result.success) {
        return responseTemplate.businessError(res, result.msg);
      }
      return responseTemplate.success({ res, msg: result.msg });
    })
    .catch((err) => {
      return responseTemplate.businessError(res, err);
    });
};

module.exports = {
  getFunctionPagedList,
  delFuntion,
  delFuntions,
  postSaveFunction,
};
