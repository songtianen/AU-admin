import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import MyHeader from './Header';
import Footer from './Footer';
// import MySiderContainer from './Sider/component'
import Sider from './Sider';
import MyNavTabs from './Content/index';
import { getToken } from '../../util/token';
import { getUserInfo, getAccessMemu } from '../../api';
import reduxUser from '../../redux/redux_user';
import reduxApp from '../../redux/redux_app';
import util from '../../util/util';
// 不需要后端返回的菜单
import constantMenu from '../../conf/MenuConf';
import './layout.less';

const { Content } = Layout;
const { MySider } = Sider;
const { updateUserInfo } = reduxUser.actions;

const { updateAccessMenu } = reduxApp.actions;
class MyLayout extends React.PureComponent {
  state = {
    collapsed: false,
    responsive: false,
    navTabShow: true,
    navTabTop: 50,
  };

  componentDidMount() {
    this.initAppData(); // 数据初始化完后再触发一次render
    this.getClientWidth(); // 判断屏幕尺寸再触发一次render(不需要可去掉)
    window.onresize = () => {
      this.getClientWidth();
    };
    setTimeout(() => {
      let loading = document.getElementById('StartLoading');
      // eslint-disable-next-line no-unused-expressions
      loading && document.body.removeChild(loading);
    }, 200);
  }

  componentWillUpdate(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      // 路由变更,选中菜单
      this.initChildData(nextProps);
    }
  }

  // 获取当前浏览器宽度并设置responsive管理响应式
  getClientWidth = () => {
    const clientWidth = document.body.clientWidth;
    this.setState({
      responsive: clientWidth <= 992,
      collapsed: clientWidth <= 992,
    });
    if (clientWidth < 576) {
      this.setState({
        navTabTop: 150,
      });
      return;
    }
    if (clientWidth < 768) {
      this.setState({
        navTabTop: 100,
      });
      return;
    }
    if (clientWidth >= 768) {
      this.setState({
        navTabTop: 50,
      });
    }
  };

  toggle = () => {
    this.child.setOpenKeys(this.state.collapsed);
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  // 隐藏 contentTab
  toggleNavTab = () => {
    this.setState({ navTabShow: !this.state.navTabShow });
  };

  // 初始化Layout组件，初始化Sider组件
  initAppData = async () => {
    // 获取用户信息,菜单,权限列表(整个应用就一种layout布局,App就是相当母版页,不必在AuthrizedRoute里每次路由跳转的时候判断是否需要获取,是否登录也在此处判断)
    // 没有登录，跳转到登录界面，并记下当前路径
    let token = getToken();
    if (!token) {
      this.props.history.push('/login');
      return;
    }
    let [infoRes, menuRes] = await Promise.all([
      getUserInfo(),
      getAccessMemu(),
    ]);
    // console.log('infoRes', infoRes, 'menuRes', menuRes);
    let permission = [...infoRes.data.userRole, ...infoRes.data.userPermission];
    let isAdmin = infoRes.data.isAdmin;
    let userInfo = {
      // 用户信息
      name: infoRes.data.userName,
      avatar: infoRes.data.avatarUrl,
      isAdmin,
      permission,
    };
    localStorage.setItem('permission', JSON.stringify(permission));
    localStorage.setItem('isAdmin', isAdmin);
    menuRes.data.push(...constantMenu); // 添加不需要后端返回的菜单列表
    let openAccessMenu = util.openAccesseMenu(menuRes.data); // 添加parentName属性,传入后端返回的菜单数据
    // console.log('openAccesseMenu', openAccesseMenu);
    let moduleList = menuRes.data.filter((item) => {
      // 是左侧菜单(leftMenu字段控制是否显示此菜单)
      return item.leftMenu;
    });
    let currentModule = moduleList[0].name; // 当前显示的菜单
    let moduleMenu = moduleList[0].children;
    this.props.updateAccessMenu({
      // redux 设置菜单
      currentModule, // 当前打开模块
      accessMenu: menuRes.data, // 所有菜单
      openAccessMenu, // 打开的菜单
      moduleMenu, // 当前打开有左侧菜单第一个children
      moduleList, // 是左侧菜单的菜单 header tab 所有菜单
    });
    this.props.updateUserInfo(userInfo); // redux 存入userInfo
    // 初始化子组件
    this.initChildData(this.props);
  };

  initChildData(props) {
    // 传给sider组件当前路由 pathname
    this.child.initMenu(props.location.pathname);
  }

  onRef = (ref) => {
    this.child = ref;
  };

  render() {
    console.log('Layout render');
    return (
      <Layout>
        <MySider
          onRef={this.onRef}
          responsive={this.state.responsive}
          collapsed={this.state.collapsed}
        />
        <Layout>
          <MyHeader
            collapsed={this.state.collapsed}
            toggle={this.toggle}
            toggleNavTab={this.toggleNavTab}
            navTabshow={this.state.navTabShow}
          />
          <Content
            style={{
              overflow: 'auto',
              background: '#efefef',
              borderLeft: '1px solid #e8e8e8',
            }}
          >
            <MyNavTabs
              style={{
                marginTop: this.state.navTabTop,
                width: '100%',
                display: this.state.navTabShow ? 'block' : 'none',
              }}
              show={this.state.navTabShow}
            />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

const mapStateToPorps = (state) => {
  // console.log('app state', state)
  const { name } = state.user;
  return {
    name,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateUserInfo: (info) => {
      dispatch(updateUserInfo(info));
    },
    updateAccessMenu: (accessMenu) => {
      dispatch(updateAccessMenu(accessMenu));
    },
  };
};
MyLayout.propTypes = {
  history: PropTypes.object.isRequired,
  updateAccessMenu: PropTypes.func.isRequired,
  updateUserInfo: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default connect(
  mapStateToPorps,
  mapDispatchToProps,
)(MyLayout);
