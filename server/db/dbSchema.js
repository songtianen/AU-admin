const uuidv4 = require('uuid/v4');

module.exports = {
  User: {
    isAdmin: '',
    email: '',
    userPermission: [],
    moduleId: 0,
    userRole: [],
    userName: '',
    nickName: '',
    inviteCode: '',
    captcha: '',
    prefix: '',
    pwd: '',
    phone: '',
    type: '',
    notification: [],
    avatar: '',
    desc: '',
    title: '',
    id: uuidv4(),
  },
};
