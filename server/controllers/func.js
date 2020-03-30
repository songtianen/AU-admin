const functionService = require('../services/functionService');

const { success, businessError } = require('../lib/responseTemplate');

const getFunctionPagedList = ({ req, res }) => {
  let pageIndex = req.query.pageIndex;
  let pageSize = req.query.pageSize;
  let sortBy = req.query.sortBy;
  let descending = req.query.descending;
  let filter = JSON.parse(req.query.filter);

  functionService
    .functionPagedList(pageIndex, pageSize, sortBy, descending, filter)
    .then((doc) => {
      return success({ res, data: doc, msg: '功能列表请求成功' });
    })
    .catch(() => {
      return businessError({ res, msg: '查询功能列表失败' });
    });
};
// 删除多条
const delFuntions = ({ req, res }) => {
  const { ids } = req.body;
  // let ids = JSON.parse(req.query.ids);
  functionService
    .delFuntions(ids)
    .then((doc) => {
      if (doc.success) {
        return success({ res, msg: '删除功能成功' });
      }
    })
    .catch((e) => {
      return businessError({ res, msg: e.message });
    });
};

const addFunction = ({ req, res }) => {
  let func = req.body;
  if (func.name === '') {
    return businessError({ res, msg: '名称不能为空!' });
  }
  if (func.code === '') {
    return businessError({ res, msg: '编码不能为空!' });
  }
  if (!func.moduleId) {
    return businessError({ res, msg: '请选择模块!' });
  }
  functionService
    .addFunction(func)
    .then((result) => {
      if (!result.success) {
        return businessError({ res, msg: result.msg });
      }
      return success({ res, msg: result.msg });
    })
    .catch((err) => {
      return businessError({ res, meg: err });
    });
};
const editFunction = ({ req, res }) => {
  const info = req.body;
  // console.log('编辑功能', info);
  functionService
    .editFunction(info)
    .then((doc) => {
      if (doc.success) {
        return success({ res, msg: doc.msg });
      }
      return businessError({ res, msg: doc.msg });
    })
    .catch((e) => {
      return businessError({ res, msg: '编辑失败' });
    });
};

module.exports = {
  getFunctionPagedList,
  delFuntions,
  addFunction,
  editFunction,
};
