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
const delFuntion = ({ req, res }) => {
  const id = req.query.id;
  serviceDelFuntion(id)
    .then((result) => {
      console.log('serviceDelFuntion', result);
      if (result && result.ok) {
        return responseTemplate.success({ res, msg: '删除成功' });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// export let delFuntions = async (ctx) => {
//   let ids = JSON.parse(ctx.query.ids)
//   for (let id of ids) {
//     await functionService.delFuntion(id)
//   }
//   return responseTemplate.success(ctx, null)
// }

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
  postSaveFunction,
};
