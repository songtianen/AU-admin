let mongoose = require('mongoose');
let DB_URL = 'mongodb://localhost:27017/myapp';
// 1 . 连接数据库
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
var dbm = mongoose.connection;
// 监听数据库
dbm.on('error', console.error.bind(console, 'connection error:'));
dbm.once('open', function() {
  // we're connected!
  console.log('欢迎 mongoose!!');
});

const userSchema = new mongoose.Schema({
  isAdmin: { type: String },
  id: String,
  email: String,
  userPermission: [String],
  moduleId: String,
  userRole: [String],
  userName: { type: String },
  nickName: { type: String },
  inviteCode: { type: String },
  captcha: { type: String },
  prefix: { type: String },
  pwd: { type: String },
  phone: { type: String },
  type: { type: String },
  notification: [String],
  avatar: { type: String },
  desc: { type: String },
  title: { type: String },
});

const AccessMemu = new mongoose.Schema({
  functionCode: String,
  icon: String,
  id: String,
  leftMenu: Boolean,
  isLock: Boolean,
  name: String,
  parentId: String,
  parentName: String,
  path: String,
  sort: String,
  title: String,
});
const functionSchema = new mongoose.Schema({
  name: String,
  code: String,
  description: String,
  moduleId: String,
  module: String,
  id: String,
});
// 角色列表
const roleSchema = new mongoose.Schema({
  name: String,
  code: String,
  moduleId: String,
  description: String,
  id: String,
  permission: [String],
  userId: [String],
  departmentId: String,
  level: String,
});
// 部门
const departmentSchema = new mongoose.Schema({
  icon: String,
  id: String,
  code: String,
  leftDepartment: Boolean,
  isLock: Boolean,
  name: String,
  parentId: String,
  parentName: String,
  path: String,
  sort: String,
  title: String,
  userId: [String],
  roleId: [String],
  level: String,
});

let RoleModel = mongoose.model('rolelist', roleSchema); // 角色列表
let UserModel = mongoose.model('user', userSchema); // 用户列表
let AccessMemuModel = mongoose.model('accessMemu', AccessMemu); // 菜单列表
let FunctionModel = mongoose.model('functionList', functionSchema); // 功能列表
let DepartmentModel = mongoose.model('department', departmentSchema); // 功能列表
module.exports = {
  UserModel,
  AccessMemuModel,
  FunctionModel,
  RoleModel,
  DepartmentModel,
};
