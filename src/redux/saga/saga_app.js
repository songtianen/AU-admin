import { takeEvery, call, put } from 'redux-saga/effects';
import { notification } from 'antd';
import { getAccessMemu, getUserInfo } from '../../api';
import { actionTypes } from '../actions/actions';
import util from '../../util/util';
// 不需要后端返回的菜单
import constantMenu from '../../conf/menuConf';

function* fetchUserInfo(action) {
  try {
    const userInfo = yield call(getUserInfo, action.payload);
    console.log('saga---', userInfo);
    if (userInfo.statusCode === 200) {
      let permission = [
        ...userInfo.data.userRole,
        ...userInfo.data.userPermission,
      ];
      let isAdmin = userInfo.data.isAdmin;
      let userInfoData = {
        // 用户信息
        name: userInfo.data.userName,
        avatar: userInfo.data.avatarUrl,
        isAdmin,
        permission,
      };
      localStorage.setItem(
        'permission',
        JSON.stringify(userInfo.data.permission),
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
    notification.error({
      message: error,
    });
  }
}

function* watchFetchUserInfo() {
  yield takeEvery(actionTypes.DO_GET_USERINFO, fetchUserInfo);
}

function* fetchAccessMemu(action) {
  try {
    const accessMemu = yield call(getAccessMemu, action.payload);

    if (accessMemu.statusCode === 200) {
      let menuRes = accessMemu.data;
      menuRes.push(...constantMenu); // 添加不需要后端返回的菜单列表
      let moduleList = menuRes.filter((item) => {
        // 是左侧菜单(leftMenu字段控制是否显示此菜单)
        return item.leftMenu;
      });
      let currentModule = moduleList[0].name; // 当前显示的菜单
      let moduleMenu = moduleList[0].children;
      let openAccessMenu = util.openAccesseMenu(menuRes); // 添加parentName属性,传入后端返回的菜单数据

      let accessMenuData = {
        // redux 设置菜单
        currentModule, // header组件数据
        accessMenu: menuRes, // 所有菜单
        openAccessMenu, // 打散数组，找出每个menu（添加parentName）以及数组内children内的menu
        moduleMenu, // sider左侧菜单数据，第一个children
        moduleList, // leftMenu等于true的菜单
      };
      console.log('请求菜单1', accessMenuData);

      yield put({
        type: actionTypes.UPDATE_ACCESSMENU_SUCCESS,
        payload: accessMenuData,
      });
    }
    if (accessMemu.statusCode === 500) {
      yield put({ type: actionTypes.LOGIN_ERROR, payload: accessMemu });
    }
  } catch (error) {
    notification.error({
      message: error,
    });
  }
}

function* watchGetAccessMemu() {
  yield takeEvery(actionTypes.DO_UPDATE_ACCESSMENU, fetchAccessMemu);
}

function* updateModule(action) {
  console.log('请求菜单-updateModule', action);

  yield put({
    type: actionTypes.UPDATE_ACCESSMENU_SUCCESS,
    payload: action.payload,
  });
}
function* watchUpdateModule() {
  yield takeEvery(actionTypes.DO_UPDATE_MODULE, updateModule);
}

export const appSagas = [
  watchGetAccessMemu(),
  watchFetchUserInfo(),
  watchUpdateModule(),
];
