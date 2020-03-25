/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import MyHeader from './Header';
import Footer from './Footer';
import MySider from './Sider';
import MyNavTabs from './Content/index';
import { getToken } from '../../util/token';
// import util from '../../util/util';
import reduxApp from './redux/redux_app';

import './layout.less';

const { Content } = Layout;

const { initAppDataAction } = reduxApp.actions;
class MyLayout extends React.PureComponent {
  state = {
    collapsed: false,
    responsive: false,
    navTabShow: true,
    // navTabTop: 50,
    headerItemDisplay: true,
    layOutHeight: '',
    layOutWidth: '',
  };

  componentWillMount() {
    console.log('Layout-componentWillMount----');
    this.getClientWidth();
  }

  componentDidMount() {
    console.log('Layout-componentDidMount----');

    this.initAppData(); // 数据初始化完后再触发一次render
    window.onresize = () => {
      this.getClientWidth();
    };
    let loading = document.getElementById('StartLoading');
    document.body.removeChild(loading);
  }

  /*
  优化掉
  componentWillUpdate(nextProps) {
    const thisPathname = this.props.location.pathname;
    const nextPathname = nextProps.location.pathname;
    console.log('宋大明白----', this.props.headerCurrentModuleName);

    if (thisPathname !== nextPathname) {
      const { siderModuleMenu } = nextProps;
      const { dispatch, moduleList } = this.props;
      const isModelMenu = moduleList.some((item) => {
        return item.path === nextPathname;
      });
      console.log('宋大明白----', isModelMenu);
      if (isModelMenu) {
        dispatch(
          updateModuleAction({
            siderOpenKeys: [],
            siderSelectedKey: [],
          }),
        );
        return;
      }
      if (!isModelMenu) {
        // const module = util.findCurrentMenuNameAndModule(moduleList, pathname);
        const siderSelectedKey = util.findSiderComponentSelectedNameAndOpenKeys(
          JSON.parse(JSON.stringify(siderModuleMenu)),
          nextPathname,
        );
        const { siderKey } = siderSelectedKey;
        if (siderKey && siderKey.length) {
          let data = {
            // headerCurrentModuleName: module[0].name,
            // siderModuleMenu: module[0].children,
            siderSelectedKey: siderSelectedKey.siderKey,
          };
          dispatch(updateModuleAction(data));
        }
      }
    }
  }
*/
  // 获取当前浏览器宽度并设置responsive管理响应式
  getClientWidth = () => {
    const clientWidth = document.body.clientWidth;
    const clientHeight = document.body.clientHeight;

    this.setState({
      responsive: clientWidth <= 991,
      collapsed: clientWidth <= 991,
      layOutHeight: clientHeight,
      layOutWidth: clientWidth,
    });
    if (clientWidth < 577) {
      this.setState({
        // navTabTop: 50,
        headerItemDisplay: false,
      });
      return;
    }
    if (clientWidth < 768) {
      this.setState({
        // navTabTop: 96,
        headerItemDisplay: false,
      });
      return;
    }
    if (clientWidth >= 768) {
      this.setState({
        // navTabTop: 50,
        headerItemDisplay: true,
      });
    }
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  // 隐藏 contentTab
  toggleNavTab = () => {
    this.setState({ navTabShow: !this.state.navTabShow });
  };

  // 初始化Layout组件，初始化Sider组件
  initAppData = () => {
    // 获取用户信息,菜单,权限列表(整个应用就一种layout布局,App就是相当母版页,不必在AuthrizedRoute里每次路由跳转的时候判断是否需要获取,是否登录也在此处判断)
    // 没有登录，跳转到登录界面，并记下当前路径
    let token = getToken();
    if (!token) {
      this.props.history.push('/login');
      return;
    }
    const { dispatch, location } = this.props;
    dispatch(initAppDataAction(location.pathname));
  };

  render() {
    const { siderModuleMenu } = this.props;
    console.log('Layout render');
    return (
      <Layout style={{ height: this.state.layOutHeight }}>
        <MySider
          // onRefSider={this.onRefSider}
          responsive={this.state.responsive}
          collapsed={this.state.collapsed}
          siderModuleMenu={siderModuleMenu}
        />
        <Layout style={{ borderLeft: 'solid 1px #e8e8e8' }}>
          <MyHeader
            collapsed={this.state.collapsed}
            toggle={this.toggle}
            toggleNavTab={this.toggleNavTab}
            navTabshow={this.state.navTabShow}
            itemDisplay={this.state.headerItemDisplay}
          />
          <Content
            style={{
              height: '100%',
              overflow: 'auto',
              // background: '#efefef',
            }}
          >
            <MyNavTabs
              style={{
                marginTop: 49,
                width: '100%',
                height: '100%',
                display: this.state.navTabShow ? 'block' : 'none',
              }}
              show={this.state.navTabShow}
            />
          </Content>
          <Footer itemDisplay={this.state.headerItemDisplay} />
        </Layout>
      </Layout>
    );
  }
}

const mapStateToPorps = (state) => {
  const {
    name,
    siderModuleMenu,
    // moduleList,
    // headerCurrentModuleName,
  } = state.app;
  return {
    name,
    // moduleList,
    siderModuleMenu,
    // headerCurrentModuleName,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getUserInfo: (info) => {
//       dispatch(getUserInfo(info));
//     },
//     updateAccessMenu: (accessMenu) => {
//       dispatch(updateAccessMenu(accessMenu));
//     },
//   };
// };
MyLayout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  // moduleList: PropTypes.array.isRequired,
  siderModuleMenu: PropTypes.array.isRequired,
  // headerCurrentModuleName: PropTypes.string.isRequired,
};

export default connect(mapStateToPorps)(MyLayout);
