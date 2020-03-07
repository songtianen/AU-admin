import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import MyHeader from './Header';
import Footer from './Footer';
import Sider from './Sider';
import MyNavTabs from './Content/index';
import { getToken } from '../../util/token';
import reduxApp from '../../redux/redux_app';
import './layout.less';

const { Content } = Layout;
const { MySider } = Sider;

const { updateAccessMenu, getUserInfo } = reduxApp.actions;
class MyLayout extends React.PureComponent {
  state = {
    collapsed: false,
    responsive: false,
    navTabShow: true,
    navTabTop: 50,
    headerItemDisplay: true,
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
    if (clientWidth < 577) {
      this.setState({
        navTabTop: 50,
        headerItemDisplay: false,
      });
      return;
    }
    if (clientWidth < 768) {
      this.setState({
        navTabTop: 96,
        headerItemDisplay: true,
      });
      return;
    }
    if (clientWidth >= 768) {
      this.setState({
        navTabTop: 50,
        headerItemDisplay: true,
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
    // let [infoRes, menuRes] = await Promise.all([
    //   getUserInfo(),
    //   getAccessMemu(),
    // ]);

    // eslint-disable-next-line no-shadow
    const { dispatch } = this.props;
    dispatch(getUserInfo());
    dispatch(updateAccessMenu());

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
      <Layout
        style={{
          borderTop: '1px solid #e8e8e8',
        }}
      >
        <MySider
          onRef={this.onRef}
          responsive={this.state.responsive}
          collapsed={this.state.collapsed}
        />
        <Layout
          style={{
            borderLeft: '1px solid #e8e8e8',
          }}
        >
          <MyHeader
            collapsed={this.state.collapsed}
            toggle={this.toggle}
            toggleNavTab={this.toggleNavTab}
            navTabshow={this.state.navTabShow}
            itemDisplay={this.state.headerItemDisplay}
          />
          <Content
            style={{
              overflow: 'auto',
              background: '#efefef',
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
          <Footer itemDisplay={this.state.headerItemDisplay} />
        </Layout>
      </Layout>
    );
  }
}

const mapStateToPorps = (state) => {
  console.log('app state', state);
  const { name } = state.app;
  return {
    name,
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
};

export default connect(mapStateToPorps)(MyLayout);
