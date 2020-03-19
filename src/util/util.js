import React from 'react';
import { Icon, Tag } from 'antd';

const getMenuByName = (name, menulist) => {
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
const getTreeEleByPropertyValue = (value, property, list) => {
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
const oneOf = (ele, targetArr) => {
  if (targetArr.indexOf(ele) >= 0) {
    return true;
  }
  return false;
};
const getParentMenusByName = (openAccesseMenu, name) => {
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
const openAccesseMenu = (accesseMenu) => {
  let accesseMenus = [];
  let forFn = function(menulist, parentName) {
    for (let item of menulist) {
      // 添加parentName属性
      item.parentName = parentName;
      accesseMenus.push(item);
      if (item.children && item.children.length > 0) {
        forFn(item.children, item.name);
      }
    }
  };
  forFn(accesseMenu, '');
  return accesseMenus;
};
const getTreeEleWithParent = (id, list) => {
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
const handleTitle = (vm, item) => {
  return item.title;
};
const openTreeData = (data) => {
  let Menu = [];
  // eslint-disable-next-line no-shadow
  let forFn = function(data) {
    for (let item of data) {
      Menu.push({ ...item });
      if (item.children && item.children.length > 0) {
        forFn(item.children);
      }
    }
  };
  forFn(data);
  return Menu;
};
const treeData = (data) => {
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
const iconTreeData = (data) => {
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
const deparmentTreeWithRole = (data) => {
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
const unique = (arr) => {
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
// 根据路由找到父级菜单
const findCurrentMenuNameAndModule = (menuList, pathName) => {
  let pathNameItem = '';
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

  if (pathNameItem && pathNameItem.parentId) {
    if (pathNameItem.parentId === '0') {
      return pathNameItem;
    }
    const findTop = (list, currentId) => {
      let upperItem;
      const findUpper = (menu, _id) => {
        for (let i = 0, len = menu.length; i < len; i++) {
          if (menu[i].id === _id) {
            upperItem = {
              ...menu[i],
            };
          }
          if (menu[i].children && menu[i].children.length) {
            findUpper(menu[i].children, _id);
          }
        }
      };
      findUpper(list, currentId);
      if (upperItem.parentId !== '0') {
        findUpper(list, upperItem.parentId);
      }
      return upperItem;
    };
    const topItem = findTop(menuList, pathNameItem.parentId);
    console.log('找到HeaderMenu菜单-顶层id', topItem);

    return topItem;
  }
  return {
    name: '',
    children: [],
  };
};
const findSiderComponentSelectedNameAndOpenKeys = (menuLists, pathName) => {
  const men = JSON.parse(JSON.stringify(menuLists));
  const menuList = men.map((item) => {
    item.parentId = '0';
    return item;
  });
  console.log('Sider组件方法111', menuList);
  console.log('Sider组件方法', menuLists);
  let pathNameItem = '';

  const findSiderItem = (menu, _name) => {
    for (let i of menu) {
      if (i.path === _name) {
        pathNameItem = {
          ...i,
        };
      }
      if (i.children && i.children.length) {
        findSiderItem(i.children, _name);
      }
    }
  };

  findSiderItem(menuList, pathName);
  console.log('sider组件的--pathNameItem', pathNameItem);

  // 找到多个父级
  const findOpenKeys = (list, currentId) => {
    let upperId;
    let siderOpenKeys = [];
    const findUpper = (menu, _id) => {
      for (let i of menu) {
        if (i.id === _id) {
          upperId = i.parentId;
          siderOpenKeys.push(i.name);
        }
        if (i.children && i.children.length) {
          findUpper(i.children, _id);
        }
      }
    };
    findUpper(list, currentId);
    if (upperId !== '0') {
      findUpper(list, upperId);
    }
    return siderOpenKeys;
  };
  if (!pathNameItem) {
    return { siderKey: [], siderOpenKeys: [] };
  }
  const siderOpenKeys = findOpenKeys(menuList, pathNameItem.parentId);
  console.log('sider组件的--siderOpenKeys', siderOpenKeys);
  return {
    siderKey: [pathNameItem.name],
    siderOpenKeys,
  };
};
export default {
  findSiderComponentSelectedNameAndOpenKeys,
  findCurrentMenuNameAndModule,
  unique,
  deparmentTreeWithRole,
  iconTreeData,
  treeData,
  openTreeData,
  handleTitle,
  getTreeEleWithParent,
  openAccesseMenu,
  getParentMenusByName,
  oneOf,
  getTreeEleByPropertyValue,
  getMenuByName,
};

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
