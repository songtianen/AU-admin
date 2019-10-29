const { businessError } = require('../lib/responseTemplate');

const checkDetailInfo = (localinfos, reqInfos) => {
  // eslint-disable-next-line no-useless-escape
  const mobileReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  const phoneReg = /^1[3-578]\d{9}$/;
  const { email, password, confirm, phone } = reqInfos;
  const infoArr = Object.keys(reqInfos);
  // 检查参数是否完整
  let errInfo = [];
  for (let i = 0; i < localinfos.length; i++) {
    if (infoArr.indexOf(localinfos[i]) === -1) {
      errInfo.push(localinfos[i]);
    }
  }
  if (errInfo.length && errInfo.length > 0) {
    let msg = errInfo.join();
    return { msg: `请输入${msg}` };
  }

  if (!mobileReg.test(email)) {
    return { msg: '邮箱格式不正确', data: 'mail' };
  }
  if (!phoneReg.test(phone)) {
    return { msg: '手机格式式不正确', data: 'mobile' };
  }
  if (confirm !== password) {
    return { msg: '手机格式式不正确', data: 'confirm' };
  }
  return 1;
};
const checkRegister = () => {
  const infoArr = [
    'username',
    'email',
    'password',
    'confirm',
    'phone',
    'captcha',
  ];

  return (req, res, next) => {
    const reqinfos = req.body;
    const checkDetail = checkDetailInfo(infoArr, reqinfos);
    if (checkDetail === 1) {
      return next();
    } else {
      return businessError({ res, ...checkDetail });
    }
  };
};

module.exports = {
  checkRegister,
};
