import { takeEvery, call, put } from 'redux-saga/effects';
import { notification } from 'antd';
import { getAccessMenu, getUserInfo } from '../../../../api';
import { actionTypes, initAppDataSuccessAction } from '../actions/actions';
import util from '../../../../util/util';
// 不需要后端返回的菜单
import constantMenu from '../../../../conf/menuConf';

function* initAppData(action) {
  console.log('saga_InitAPP_data', action.payload);
  const pathName = action.payload;

  try {
    // const userInfo = yield call(getUserInfo, '');
    // const accessMenu = yield call(getAccessMenu, '');
    let [accessMenu, userInfo] = yield Promise.all([
      getAccessMenu(),
      getUserInfo(),
    ]);
    // console.log('appData----', accessMenu, userInfo);
    if (userInfo.statusCode === 200 && accessMenu.statusCode === 200) {
      localStorage.setItem('accessMenu', JSON.stringify(accessMenu.data));
      let menuRes = accessMenu.data;
      menuRes.push(...constantMenu); // 添加不需要后端返回的菜单列表
      let moduleList = menuRes.filter((item) => {
        // 是左侧菜单(leftMenu字段控制是否显示此菜单)
        return item.leftMenu;
      });
      let findModule = util.findCurrentMenuNameAndModule(moduleList, pathName);
      let currentModule = findModule[0].name; // Header组件默认选中的：key当前显示的菜单(以name为Header组件的key)
      // 根据找到当前模块的name
      console.log('这返回的是什么', currentModule);
      let moduleMenu = moduleList[0].children;
      let openAccessMenu = util.openAccesseMenu(menuRes); // 添加parentName属性,传入后端返回的菜单数据

      let accessMenuData = {
        // redux 设置菜单
        currentModule, // header组件数据,当前选中的菜单
        accessMenu: menuRes, // 所有菜单
        openAccessMenu, // 打散数组，找出每个menu（添加parentName）以及数组内children内的menu
        moduleMenu, // sider左侧菜单数据，(由header组件的menu改变)
        moduleList, // 1-leftMenu等于true的菜单
      };
      // userInfo---
      let isAdmin = userInfo.data.isAdmin;
      let userInfoData = {
        // 用户信息
        name: userInfo.data.userName,
        avatar: userInfo.data.avatarUrl,
        isAdmin,
        userRole: userInfo.data.userRole,
        permission: userInfo.data.userPermission,
      };
      localStorage.setItem(
        'permission',
        JSON.stringify(userInfo.data.userPermission),
      );
      localStorage.setItem('isAdmin', userInfo.data.isAdmin);
      let appData = {
        ...userInfoData,
        ...accessMenuData,
      };

      yield put(initAppDataSuccessAction(appData));
    }
  } catch (error) {
    if (error.message === '403') {
      notification.error({
        message: '没有请求用户信息的权限',
      });
    }
  }
}

function* fetchUserInfo(action) {
  try {
    const userInfo = yield call(getUserInfo, action.payload);
    // console.log('saga---', userInfo);
    if (userInfo.statusCode === 200) {
      let isAdmin = userInfo.data.isAdmin;
      let userInfoData = {
        // 用户信息
        name: userInfo.data.userName,
        avatar: userInfo.data.avatarUrl,
        isAdmin,
        userRole: userInfo.data.userRole,
        permission: userInfo.data.userPermission,
      };
      localStorage.setItem(
        'permission',
        JSON.stringify(userInfo.data.userPermission),
      );
      localStorage.setItem('isAdmin', userInfo.data.isAdmin);
      yield put({
        type: actionTypes.GET_USERINFO_SUCCESS,
        payload: userInfoData,
      });
    }
    if (userInfo.statusCode === 500) {
      yield put({ type: actionTypes.LOGIN_ERROR, payload: userInfo });
    }
  } catch (error) {
    if (error.message === '403') {
      notification.error({
        message: '没有请求用户信息的权限',
      });
    }
  }
}

function* fetchAccessMemu(action) {
  try {
    const accessMenu = yield call(getAccessMenu, action.payload);

    if (accessMenu.statusCode === 200) {
      localStorage.setItem('accessMenu', JSON.stringify(accessMenu.data));
      let menuRes = accessMenu.data;
      menuRes.push(...constantMenu); // 添加不需要后端返回的菜单列表
      let moduleList = menuRes.filter((item) => {
        // 是左侧菜单(leftMenu字段控制是否显示此菜单)
        return item.leftMenu;
      });
      let currentModule = moduleList[0].name; // Header组件默认选中的：key当前显示的菜单(以name为Header组件的key)
      let moduleMenu = moduleList[0].children;
      let openAccessMenu = util.openAccesseMenu(menuRes); // 添加parentName属性,传入后端返回的菜单数据

      let accessMenuData = {
        // redux 设置菜单
        currentModule, // header组件数据
        accessMenu: menuRes, // 所有菜单
        openAccessMenu, // 打散数组，找出每个menu（添加parentName）以及数组内children内的menu
        moduleMenu, // sider左侧菜单数据，(由header组件的menu改变)
        moduleList, // 1-leftMenu等于true的菜单
      };
      yield put({
        type: actionTypes.UPDATE_ACCESSMENU_SUCCESS,
        payload: accessMenuData,
      });
    }
    if (accessMenu.statusCode === 500) {
      yield put({ type: actionTypes.LOGIN_ERROR, payload: accessMenu });
    }
  } catch (error) {
    // notification.error({
    //   message: error,
    // });

    console.log('saga-fetchAccessMemu-CatchError-', error);
  }
}

// function* initMenu(action) {
//   // const data = action.payload;
//   console.log('data', action.payload);
// }

function* updateModule(action) {
  console.log('请求菜单-updateModule', action);

  yield put({
    type: actionTypes.UPDATE_ACCESSMENU_SUCCESS,
    payload: action.payload,
  });
}
function* watchGetAccessMemu() {
  yield takeEvery(actionTypes.DO_UPDATE_ACCESSMENU, fetchAccessMemu);
}
function* watchFetchUserInfo() {
  yield takeEvery(actionTypes.DO_GET_USERINFO, fetchUserInfo);
}
function* watchUpdateModule() {
  yield takeEvery(actionTypes.DO_UPDATE_MODULE, updateModule);
}
// function* watchInitMenu() {
//   yield takeEvery(actionTypes.DO_INIT_MENU, initMenu);
// }
function* watchInitAppData() {
  yield takeEvery(actionTypes.DO_INIT_APPDATA, initAppData);
}

export const appSagas = [
  watchGetAccessMemu(),
  watchFetchUserInfo(),
  watchUpdateModule(),
  // watchInitMenu(),
  watchInitAppData(),
];
