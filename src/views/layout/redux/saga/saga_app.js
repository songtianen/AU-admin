import { takeEvery, put } from 'redux-saga/effects';
import { notification } from 'antd';
import { getAccessMenu, getUserInfo } from '../../../../api';
import { actionTypes, initAppDataSuccessAction } from '../actions/actions';
import util from '../../../../util/util';
// 不需要后端返回的菜单
// import constantMenu from '../../../../conf/menuConf';

function* initAppData(action) {
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
      // menuRes.push(...constantMenu); // 添加不需要后端返回的菜单列表
      // let moduleList = menuRes.filter((item) => {
      //   // 是左侧菜单(leftMenu字段控制是否显示此菜单)
      //   return item.leftMenu;
      // });
      let menus = JSON.parse(JSON.stringify(menuRes));
      let findModule = util.findCurrentMenuNameAndModule(menus, pathName);
      let siderModuleMenu = JSON.parse(JSON.stringify(findModule.children));
      let siderData = util.findSiderComponentSelectedNameAndOpenKeys(
        siderModuleMenu,
        pathName,
      ); // 查找的Sider组件需要的key和openKeys
      let openAccessMenu = util.openAccesseMenu(menuRes); // 添加parentName属性,传入后端返回的菜单数据
      let accessMenuData = {
        headerCurrentModuleName: findModule.name, // header组件数据,当前选中的菜单
        accessMenu: menuRes, // 所有菜单
        openAccessMenu, // 打散数组，找出每个menu（添加parentName）以及数组内children内的menu
        siderModuleMenu: findModule.children, // sider左侧菜单数据，(由header组件的menu改变)
        moduleList: menuRes, // 1-leftMenu等于true的菜单
        siderSelectedKey: siderData.siderKey,
        siderOpenKeys: siderData.siderOpenKeys,
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
    console.log('初始化失败', error);
  }
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
// function* watchInitMenu() {
//   yield takeEvery(actionTypes.DO_INIT_MENU, initMenu);
// }
function* watchInitAppData() {
  yield takeEvery(actionTypes.DO_INIT_APPDATA, initAppData);
}

export const appSagas = [
  watchUpdateModule(),
  // watchInitMenu(),
  watchInitAppData(),
];
