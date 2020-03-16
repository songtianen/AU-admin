import React from 'react';
import { Icon, Tag } from 'antd';

// eslint-disable-next-line import/no-mutable-exports
let util = {};

util.getMenuByName = function(name, menulist) {
  let menu = {};
  // eslint-disable-next-line no-shadow
  let forFn = function(name, menulist) {
    for (let item of menulist) {
      if (item.name === name) {
        menu = item;
      } else if (item.children && item.children.length > 0) {
        forFn(name, item.children);
      }
      if (menu.name) {
        break;
      }
    }
  };
  forFn(name, menulist);
  return menu;
};

util.getTreeEleByPropertyValue = function(value, property, list) {
  let ele = {};
  // eslint-disable-next-line no-shadow
  let forFn = function(value, property, list) {
    for (let item of list) {
      if (item[property] === value) {
        ele = item;
      } else if (item.children && item.children.length > 0) {
        forFn(value, property, item.children);
      }
      if (ele[property]) {
        break;
      }
    }
  };
  forFn(value, property, list);
  return ele;
};

util.oneOf = function(ele, targetArr) {
  if (targetArr.indexOf(ele) >= 0) {
    return true;
  }
  return false;
};
util.getParentMenusByName = function(openAccesseMenu, name) {
  let temp = [];
  let forFn = function(Menu, _name) {
    for (let item of Menu) {
      if (item.name === _name && item.path !== '/') {
        temp.push(item);
        forFn(openAccesseMenu, item.parentName);
      }
    }
  };
  forFn(openAccesseMenu, name);
  temp.reverse();
  return temp;
};
// 打开的菜单
util.openAccesseMenu = function(accesseMenu) {
  let openAccesseMenu = [];
  let forFn = function(menulist, parentName) {
    for (let item of menulist) {
      // 添加parentName属性
      item.parentName = parentName;
      openAccesseMenu.push(item);
      if (item.children && item.children.length > 0) {
        forFn(item.children, item.name);
      }
    }
  };
  forFn(accesseMenu, '');
  return openAccesseMenu;
};

util.getTreeEleWithParent = function(id, list) {
  let temp = [];
  // eslint-disable-next-line no-shadow
  let forFn = function(id, list) {
    for (let item of list) {
      if (item.id === id) {
        let newItem = { ...item };
        temp.push(newItem);
        forFn(item.parentId, list);
      }
    }
  };
  forFn(id.toString(), list);
  temp.reverse();
  return temp;
};

util.handleTitle = function(vm, item) {
  return item.title;
};

util.openTreeData = (data) => {
  let openAccesseMenu = [];
  // eslint-disable-next-line no-shadow
  let forFn = function(data) {
    for (let item of data) {
      openAccesseMenu.push({ ...item });
      if (item.children && item.children.length > 0) {
        forFn(item.children);
      }
    }
  };
  forFn(data);
  return openAccesseMenu;
};

util.treeData = (data) => {
  const changeData = function(params) {
    for (let i = 0; i < params.length; i++) {
      params[i].value = params[i].id;
      params[i].key = params[i].id;
      if (params[i].children) {
        changeData(params[i].children);
      }
    }
    return params;
  };
  const a = changeData(data);

  return a;
};
util.iconTreeData = (data) => {
  const changeData = function(params) {
    // let count = 1;
    for (let i = 0; i < params.length; i++) {
      params[i].key = `${i}`;
      params[i].value = `${i}`;
      params[i].selectable = false;
      params[i].children = params[i].icons;
      if (params[i].icon) {
        params[i].value = params[i].icon;
        params[i].selectable = true;
        params[i].key = params[i].icon;
        params[i].title = (
          <span>
            <Icon type={params[i].icon} style={{ color: '#08c' }} />
            &nbsp;&nbsp;{params[i].icon}
          </span>
        );
      }
      if (params[i].children) {
        changeData(params[i].children);
      }
    }
    return params;
  };
  const a = changeData(data);
  // const tree = a.filter((item) => {
  //   if (!item.value) {
  //     delete item.value;
  //   }
  //   delete item.icons;
  //   return item;
  // });

  return a;
};

util.deparmentTreeWithRole = (data) => {
  const changeTree = (dataTree) => {
    for (let i = 0; i < dataTree.length; i++) {
      dataTree[i].key = dataTree[i].id;
      dataTree[i].value = dataTree[i].id;
      dataTree[i].title = dataTree[i].title;
      dataTree[i].selectable = false;
      if (dataTree[i].departmentId) {
        dataTree[i].selectable = true;
        dataTree[i].title = <Tag color='green'>{dataTree[i].name}</Tag>;
      }
      if (dataTree[i].children) {
        changeTree(dataTree[i].children);
      }
    }
    return dataTree;
  };
  return changeTree(data);
};
util.unique = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        --i;
        // --j;
      }
    }
  }
  return arr;
};
// 找到父级菜单
util.findCurrentMenuNameAndModule = (menuList, pathName) => {
  let pathNameItem;
  let upperId;
  let module = [];
  const findItem = (data, _name) => {
    for (let i = 0, len = data.length; i < len; i++) {
      if (data[i].path === _name) {
        pathNameItem = {
          ...data[i],
        };
        break;
      }
      if (data[i].children && data[i].children.length) {
        findItem(data[i].children, _name);
      }
    }
  };
  findItem(menuList, pathName);

  const findUpper = (menu, _id) => {
    for (let i = 0, len = menu.length; i < len; i++) {
      if (menu[i].id === _id) {
        upperId = menu[i].parentId;
        break;
      }
      if (menu[i].children && menu[i].children.length) {
        findUpper(menu[i].children, _id);
      }
    }
  };
  findUpper(menuList, pathNameItem.id);
  if (upperId !== '0') {
    findUpper(menuList, upperId);
  }
  const findModule = (menu, _id) => {
    for (let i of menu) {
      if (i.id === _id) {
        module.push(i);
      }
    }
  };
  findModule(menuList, upperId);

  // console.log('找到pathName所在的module', module);
  return module;
};

export default util;

export function formatDateTime(inputTime) {
  let date = new Date(inputTime);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? `0${m}` : m;
  let d = date.getDate();
  d = d < 10 ? `0${d}` : d;
  let h = date.getHours();
  h = h < 10 ? `0${h}` : h;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  return `${y}-${m}-${d} ${h}:${minute}:${second}`;
}
