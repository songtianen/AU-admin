let mongoose = require('mongoose');
const isEnv = process.env.NODE_ENV;
console.log('这是数据mongodb数据库', isEnv);
let DB_URL = 'mongodb://localhost:27017/myapp';
// 1 . 连接数据库
mongoose.connect(DB_URL, { useNewUrlParser: true });
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

const productManagementSchema = new mongoose.Schema({
  products: {
    name: { type: String },
    key: { type: String },
    lists: [
      { name: { type: String }, key: { type: String } },
      { name: { type: String }, key: { type: String } },
    ],
  },
  order: {
    name: { type: String },
    key: { type: String },
    lists: [{ name: { type: String }, key: { type: String } }],
  },
  users: {
    name: { type: String },
    key: { type: String },
    lists: [{ name: { type: String }, key: { type: String } }],
  },
});
let ProductManagementModel = mongoose.model(
  'ProductManagementSchema',
  productManagementSchema,
);

const systemManagementSchema = new mongoose.Schema({
  system_user: {
    name: { type: String },
    key: { type: String },
    lists: [
      { name: { type: String }, key: { type: String } },
      { name: { type: String }, key: { type: String } },
    ],
  },
  order: {
    name: { type: String },
    key: { type: String },
    lists: [{ name: { type: String }, key: { type: String } }],
  },
  users: {
    name: { type: String },
    key: { type: String },
    lists: [{ name: { type: String }, key: { type: String } }],
  },
});
let SystemlimitsModel = mongoose.model(
  'usersManagementSchema',
  systemManagementSchema,
);

const userSchema = new mongoose.Schema({
  isAdmin: { type: Number },
  userPermission: [String],
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

const menuChildren = new mongoose.Schema({
  functionCode: String,
  icon: String,
  id: Number,
  leftMenu: Boolean,
  isLock: Boolean,
  name: String,
  parentId: Number,
  parentName: String,
  path: String,
  sort: Number,
  title: String,
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
let userModel = mongoose.model('User', userSchema);
let AccessMemuModel = mongoose.model('AccessMemu', AccessMemu);
let FunctionModel = mongoose.model('FunctionList', functionSchema);
module.exports = {
  userModel,
  ProductManagementModel,
  ProductsModel,
  SystemlimitsModel,
  AccessMemuModel,
  menuChildren,
  FunctionModel,
};
