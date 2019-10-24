const { businessError } = require('../lib/responseTemplate');
// 检查参数是否完整
const checkAllinfos = (localinfos, reqInfos, res) => {
  let errInfo = [];
  for (let i = 0; i < localinfos.length; i++) {
    if (reqInfos.indexOf(localinfos[i]) === -1) {
      errInfo.push(localinfos[i]);
    }
  }
  if (errInfo.length) {
    let msg = errInfo.join();
    return businessError({ res, msg: `请求参数错误`, data: msg });
  }
};
const checkDetailInfo = ({ email, password, confirm, phone }, res) => {
  // eslint-disable-next-line no-useless-escape
  const mobileReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  const phoneReg = /^1[3-578]\d{9}$/;
  if (!mobileReg.test(email)) {
    return businessError({ res, msg: '邮箱格式不正确', data: 'email' });
  }
  if (!phoneReg.test(phone)) {
    return businessError({ res, msg: '手机格式式不正确', data: 'phone' });
  }
  if (confirm !== password) {
    return businessError({ res, msg: '手机格式式不正确', data: 'confirm' });
  }
};
const checkRegister = (reqinfos, res) => {
  const infoArr = [
    'username',
    'email',
    'password',
    'confirm',
    'phone',
    'captcha',
  ];
  let info = Object.keys(reqinfos);
  checkAllinfos(infoArr, info, res);
  checkDetailInfo(reqinfos, res);
};

module.exports = {
  checkRegister,
};
