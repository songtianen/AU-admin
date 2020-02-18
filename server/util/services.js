const Modal = require('../model/model');
// modal, func, arrParams, operator, data

// 解析nameKeys的值，返回一个函数（查询数据库的函数）
const transformSchema = (field) => {
  const keys = Object.keys(field);

  if (keys.indexOf('modalSchema') < 0) {
    return '没有modalSchema';
  }
  if (keys.indexOf('func') < 0) {
    return '没有func';
  }
  if (keys.indexOf('query') < 0) {
    return '没有query';
  }
  if (keys.indexOf('operator') < 0) {
    return '没有operator';
  }
  if (keys.indexOf('name') < 0) {
    return 'name';
  }

  const { modalSchema, func, query, operator, name } = field;
  return {
    modal: modalSchema,
    func,
    query,
    operator,
    name,
  };
};

const commonService = async (serviceSchema) => {
  let serviceData = []; // 存储操作数据库的方法
  const nameKeys = Object.keys(serviceSchema);
  for (let i = 0; i < nameKeys.length; i++) {
    const val = serviceSchema[nameKeys[i]];
    serviceData.push(transformSchema(val));
  }
  if (serviceData) {
    // map 并发执行
    const resData = serviceData.map(async (item) => {
      const { modal, func, query, operator, name } = item;
      const res = await Modal[modal][func](query, ...operator);
      return {
        data: res,
        name,
      };
    });
    // 返回一个对象
    let obj = {};
    for (let item of resData) {
      const itemData = await item;
      obj[itemData.name] = itemData;
    }
    return obj;
  }
};

module.exports = {
  commonService,
};
