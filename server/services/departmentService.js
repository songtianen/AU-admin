// const { dbConfig } = require('../db/db');
const { DepartmentModel, RoleModel } = require('../model/model'); // 引入模型
const _ = require('lodash');
const uuidv4 = require('uuid/v4');

const buildDepartList = (deparmentList) => {
  for (let departmenu = 0; departmenu < deparmentList.length; departmenu++) {
    deparmentList[departmenu].children = [];
    for (let j = 0; j < deparmentList.length; j++) {
      if (deparmentList[j].parentId === deparmentList[departmenu].id) {
        deparmentList[departmenu].children.push(deparmentList[j]);
      }
    }
  }

  return deparmentList.filter((item) => {
    return item.parentId === '0';
  });
};
const buildRoleDepartTree = (deparmentList, roleArr) => {
  // eslint-disable-next-line no-unused-vars
  let departmentTree = buildDepartList(deparmentList);
  const addRole = (params, role) => {
    for (let i = 0; i < params.length; i++) {
      for (let r = 0; r < role.length; r++) {
        if (role[r].departmentId === params[i].id) {
          params[i].children.push(role[r]);
        }
      }
      if (params[i].children) {
        addRole(params[i].children, role);
      }
    }
    return params;
  };

  return addRole(departmentTree, roleArr);
};

// eslint-disable-next-line no-unused-vars
const copyMenu = (menuList) => {
  return JSON.parse(JSON.stringify(menuList));
  // let c = [];
  // for (let i = 0; i < menuList.length; i++) {
  //   let doc = menuList[i]['_doc'];
  //   let v = Object.assign({}, doc);
  //   c.push(v);
  // }
  // // for (let a of menuList) {
  // //   let v = Object.assign({}, a['_doc'])
  // //   c.push(v)
  // // }
  // return c;
};

const getAllDepartmentAndRole = async (selector = {}) => {
  const deparment = await DepartmentModel.find(selector).exec();
  const roleList = await RoleModel.find(selector).exec();
  // eslint-disable-next-line no-unused-vars
  // let roleArr = copyMenu(roleList);

  let deparmentList = copyMenu(deparment);

  // 总的菜单列表
  // deparmentList = _.sortBy(deparmentList, ['sort']); // 所有菜单
  const buoldRoleDepartTree = buildRoleDepartTree(deparmentList, roleList);
  return buoldRoleDepartTree;
};
const getAllDepartment = async ({
  pageIndex,
  pageSize,
  sortBy,
  descending,
  filter,
}) => {
  let departmentList = await DepartmentModel.find({});

  // let userInfoList = JSON.parse(JSON.stringify(userList));

  if (filter.name) {
    departmentList = _.filter(departmentList, (o) => {
      return o.name ? o.name.indexOf(filter.name) > -1 : '';
    });
  }
  if (filter.code) {
    departmentList = _.filter(departmentList, (o) => {
      return o.code ? o.code.indexOf(filter.code) > -1 : '';
    });
  }
  // 总页数
  let totalCount = departmentList.length;
  // 是否已经已经添加
  departmentList.forEach((item) => {
    item.isAdd = 1;
  });
  // 排序
  if (sortBy) {
    sortBy = 'isAdd';
    departmentList = _.sortBy(departmentList, [sortBy]);
    if (descending === 'true') {
      departmentList = departmentList.reverse();
    }
  }
  // 返回给前端第几页，的 数量。（）
  if (pageIndex && pageSize) {
    let start = (pageIndex - 1) * pageSize;
    let end = pageIndex * pageSize;
    departmentList = _.slice(departmentList, start, end);
  }
  return {
    totalCount: totalCount,
    rows: departmentList,
  };
};
const getAllDepartmentTree = async (selector = {}) => {
  const deparment = await DepartmentModel.find(selector).exec();
  let deparmentList = JSON.parse(JSON.stringify(deparment));
  // 总的菜单列表
  deparmentList = _.sortBy(deparmentList, ['sort']); // 所有菜单
  return buildDepartList(deparmentList);
};
const addDepartment = async ({ data }) => {
  let departmentSchmea = {
    icon: '',
    id: uuidv4(),
    code: '',
    leftDepartment: false,
    isLock: false,
    name: '',
    parentId: '',
    parentName: '',
    path: '',
    sort: '',
    title: data.name,
    userId: [],
    roleId: [],
    level: '',
    ...data,
  };
  const department = await DepartmentModel.create(departmentSchmea);
  return department;
};
const delDepartment = async ({ departmentIds }) => {
  if (departmentIds) {
    const isdel = DepartmentModel.deleteMany({ id: departmentIds });
    return isdel;
  } else {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({ msg: '服务器错误' });
  }
};
const editDepartment = async (data) => {
  if (data.id) {
    let db = await DepartmentModel.updateOne(
      { id: data.id },
      { $set: { title: data.name, ...data } },
    );
    return db;
  }
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({ msg: '编辑失败没有id' });
};

module.exports = {
  getAllDepartmentAndRole,
  getAllDepartment,
  addDepartment,
  delDepartment,
  getAllDepartmentTree,
  editDepartment,
};
