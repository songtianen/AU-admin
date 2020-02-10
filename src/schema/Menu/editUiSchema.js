import icon from '../../conf/icon';
import util from '../../util/util';

const treeData = util.treeData;
const iconTreeData = util.iconTreeData;
// console.log('图标树', iconTreeData(icon));
const arr = JSON.parse(localStorage.getItem('accessMenu'));

export default {
  title: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      options: { title: 'songtisnen' },
      placeholder: '',
    },
    'ui:rules': [
      { required: true, message: '请输入角色编码' },
      { max: 25, message: '最多输入25字符' },
    ], // 校验规则
    'ui:title': '菜单title',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
  name: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '',
      // onBlur: (e) => {
      //   const value = e.target.value;
      //   // console.log(value);
      // },
    },
    'ui:rules': [
      { required: true, message: '请输入角色名称' },
      { max: 25, message: '最多输入25字符' },
    ], // 校验规则
    'ui:title': '菜单名称',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
    // 'ui:onBlur': (e) => {
    //   const value = e.target.value;
    //   // console.log(value);
    // },
  },
  functionCode: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '',
    },
    'ui:rules': [
      { required: true, message: '请输入角色编码' },
      { max: 25, message: '最多输入25字符' },
    ], // 校验规则
    'ui:title': '菜单编码',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
  path: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '',
    },
    'ui:rules': [
      { required: true, message: '请输入角色编码' },
      { max: 25, message: '最多输入25字符' },
    ], // 校验规则
    'ui:title': '菜单路径',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
  leftMenu: {
    'ui:widget': 'radio',
    'ui:options': {
      initialValue: true,
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
    'ui:rules': [{ required: true, message: '请输入角色编码' }], // 校验规则
    'ui:title': '左侧',
    'ui:description': '',
    'ui:formItemConfig': {
      // hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
  isLock: {
    'ui:widget': 'radio',
    'ui:options': {
      initialValue: true,
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
    'ui:rules': [{ required: true, message: '请输入角色编码' }], // 校验规则
    'ui:title': '锁定',
    'ui:description': '',
    'ui:formItemConfig': {
      // hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
  sort: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '请输入数字',
      // onBlur: (e) => {
      //   const value = e.target.value;
      //   // console.log(value);
      // },
    },
    'ui:rules': [
      { required: true, message: '输入数字' },
      { max: 25, message: '最多输入25字符' },
    ], // 校验规则
    'ui:title': '排序',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
    // 'ui:onBlur': (e) => {
    //   const value = e.target.value;
    //   // console.log(value);
    // },
  },
  parentId: {
    'ui:widget': 'treeSelect', // 级联
    'ui:options': {
      // fieldNames: { title: 'name', value: 'id', key: 'id' },
      treeData: treeData(arr),
    },
    'ui:rules': [{ required: true, message: '请选择模块!' }], // 校验规则
    'ui:title': '所属菜单', // 未设置取schema 中定义的title
    'ui:description': '请选择模块',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      // label: '角色', // 未设置取ui:title,
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
  icon: {
    'ui:widget': 'treeSelect', // 级联
    'ui:options': {
      // fieldNames: { title: 'name', value: 'id', key: 'id' },
      treeData: iconTreeData(icon),
    },
    'ui:rules': [{ required: true, message: '请选择模块!' }], // 校验规则
    'ui:title': '图标', // 未设置取schema 中定义的title
    'ui:description': '请选择图标',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      // label: '角色', // 未设置取ui:title,
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    },
  },
};
