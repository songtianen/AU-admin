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

const productsSchema = new mongoose.Schema({
  categoryId: { type: Number },
  id: { type: Number },
  imageHost: { type: String },
  mainImage: { type: String },
  name: { type: String },
  price: { type: Number },
  status: { type: Number },
  subtitle: { type: String },
});

let ProductsModel = mongoose.model('Products', productsSchema);

const userSchema = new mongoose.Schema({
  isAdmin: { type: String },
  id: String,
  email: String,
  userPermission: [String],
  moduleId: Number,
  userRole: [String],
  userName: { type: String },
  nickName: { type: String },
  inviteCode: { type: String },
  captcha: { type: String },
  prefix: { type: String },
  pwd: { type: String },
  phone: { type: String },
  type: { type: String },
  notification: [
    {
      name: { type: String },
      title: { type: String },
      details: { type: String },
    },
  ],
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
  moduleId: Number,
  module: String,
  id: String,
});
// 角色列表
const roleSchema = new mongoose.Schema({
  name: String,
  code: String,
  moduleId: Number,
  description: String,
  id: String,
  permission: [String],
  userId: [String],
  departmentId: String,
});
// 角色权限
const rolePermission = new mongoose.Schema({
  name: String,
  code: String,
  moduleId: Number,
  roleId: String,
  id: String,
  permission: [String],
});
// 用户权限列表
const userPermission = new mongoose.Schema({
  permission: [String],
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
let RolePermission = mongoose.model('role_permission', rolePermission); // 角色权限列表
let UserPermission = mongoose.model('user_permission', userPermission); // 用户权限列表
let UserModel = mongoose.model('user', userSchema); // 用户列表
let AccessMemuModel = mongoose.model('accessMemu', AccessMemu); // 菜单列表
let FunctionModel = mongoose.model('functionList', functionSchema); // 功能列表
let DepartmentModel = mongoose.model('department', departmentSchema); // 功能列表
module.exports = {
  UserModel,
  ProductsModel,
  AccessMemuModel,
  FunctionModel,
  RoleModel,
  RolePermission,
  UserPermission,
  DepartmentModel,
};
