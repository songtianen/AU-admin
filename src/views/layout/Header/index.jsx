/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Menu, Icon, Layout, Row, Col, Avatar, Badge } from 'antd';
import { connect } from 'react-redux';
import ModuleMenu from './Component/ModuleMenu';
import { logout } from '../../../api';
import { removeToken } from '../../../util/token';
import FullScreen from './Component/FullScreen';
import SearchInput from './Component/SearchInput';
import { actionTypes } from '../../pages/Login/redux/actions';
import { updateModuleAction } from '../redux/actions/actions';
import './index.less';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MyHeader extends React.PureComponent {
  // 更新左侧的菜单
  onMenuClick = (e) => {
    const { history, dispatch, location } = this.props;
    let accesseMenu = this.props.moduleList;
    let moduleList = accesseMenu.filter((item) => {
      return item.leftMenu && item.name === e.key;
    });
    console.log('Header组件Menu-onClick', moduleList);
    if (location.pathname !== moduleList[0].path) {
      dispatch(
        updateModuleAction({
          siderModuleMenu: moduleList[0].children,
          headerCurrentModuleName: moduleList[0].name,
        }),
      );
      history.push(moduleList[0].path);
    }
  };

  // 头像list
  userMenuClick = (e) => {
    // console.log('navTab toggle', e);
    // eslint-disable-next-line no-unused-expressions
    // e.key === 'logout' && this.logout();
    // eslint-disable-next-line no-unused-expressions
    e.key === 'navTab' && this.props.toggleNavTab && this.props.toggleNavTab();
  };

  logout = async () => {
    const { dispatch } = this.props;
    const out = await logout();
    removeToken();
    if (out.data.isLogout) {
      dispatch({
        type: actionTypes.LOGOUT_SUCCESS,
        payload: {
          isLogin: false,
          isLogout: true,
          error: '',
        },
      });
      this.props.history.replace('/login');
    }
  };

  render() {
    console.log('MyHeader render'); // withRouter的缘故，每次点击同一个菜单，都会re-render
    let isDisplay = this.props.itemDisplay;
    return (
      <Header
        style={{
          height: '50px',
          width: '100%',
          backgroundColor: '#fff',
          borderBottom: 'solid 1px #e8e8e8',
          boxSizing: 'border-box',
          padding: 0,
          position: 'fixed',
          zIndex: 100,
        }}
      >
        <Row type='flex' justify='start'>
          <Col xs={6} sm={4} md={2} lg={2} xl={2}>
            <Menu style={{ border: 'none' }} selectable={false}>
              <Menu.Item key={'style'}>
                {/* 修改样式 */}
                {/* <ul className="top-nav" style={{ lineHeight: '38px', marginLeft: 10 }}>
                <li> */}
                <div
                  style={{ textAlign: 'center' }}
                  onClick={this.props.toggle}
                >
                  <Icon
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    style={{ fontSize: '20px', color: '#08c' }}
                  />
                </div>
                {/* </li>
              </ul> */}
              </Menu.Item>
            </Menu>
          </Col>
          {/* ModuleMenu */}
          <Col xs={14} sm={18} md={8} lg={7} xl={7}>
            <ModuleMenu
              style={{ border: 'none' }}
              moduleList={this.props.moduleList}
              onMenuClick={this.onMenuClick}
              headerCurrentModuleName={this.props.headerCurrentModuleName}
            />
          </Col>
          {/* SearchInput */}
          <Col
            sm={12}
            md={7}
            lg={6}
            xl={6}
            style={{ display: isDisplay ? 'block' : 'none' }}
          >
            <Menu style={{ border: 'none' }} selectable={false}>
              <Menu.Item key={'searchInput'}>
                <SearchInput
                  style={{ width: '100%', height: 50, padding: '0px 20px' }}
                />
              </Menu.Item>
            </Menu>
          </Col>
          {/* githubIcon */}
          <Col
            sm={4}
            md={1}
            lg={1}
            xl={2}
            style={{ display: isDisplay ? 'block' : 'none' }}
          >
            <Menu style={{ border: 'none' }} selectable={false}>
              <Menu.Item
                // style={{padding: '4 0 0 0'}}
                key={'github'}
              >
                <a
                  target={'_blank'}
                  href='https://github.com/songtianen/AU-admin'
                >
                  <Icon
                    style={{ fontSize: '20px', color: '#08c' }}
                    type='github'
                  />
                </a>
              </Menu.Item>
            </Menu>
          </Col>
          {/* FullScreen */}
          <Col
            xs={0}
            sm={4}
            md={2}
            lg={2}
            xl={2}
            style={{ display: isDisplay ? 'block' : 'none' }}
          >
            <Menu style={{ border: 'none' }} selectable={false}>
              <Menu.Item key={'fullScreen'}>
                <FullScreen />
              </Menu.Item>
            </Menu>
          </Col>
          {/* SubMenu */}
          {/* src={this.props.avatar} */}
          {/* <Col xs={12} sm={8} md={7} lg={6} xl={7}> */}
          <Col xs={4} sm={4} md={3} lg={2} xl={2}>
            <Menu
              mode='horizontal'
              style={{ lineHeight: '48px', border: 'none' }}
              onClick={this.userMenuClick}
            >
              <SubMenu
                title={
                  <Badge dot>
                    <Avatar shape='circle'>User</Avatar>
                  </Badge>
                }
              >
                <MenuItemGroup title='用户中心'>
                  <Menu.Item key='navTab'>
                    你好 - 关闭tabs {this.props.name}
                  </Menu.Item>
                  <Menu.Item key='setting:1'>
                    <Icon type='user' />
                    个人信息
                  </Menu.Item>
                  <Menu.Item key='logout'>
                    <span onClick={this.logout}>
                      <Icon type='logout' />
                      退出登录
                    </span>
                  </Menu.Item>
                </MenuItemGroup>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
      </Header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.app.name,
    avatar: state.app.avatar,
    headerCurrentModuleName: state.app.headerCurrentModuleName,
    moduleList: state.app.moduleList,
  };
};

MyHeader.propTypes = {
  dispatch: PropTypes.func.isRequired,
  moduleList: PropTypes.array.isRequired,
  headerCurrentModuleName: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  toggleNavTab: PropTypes.func.isRequired,
  itemDisplay: PropTypes.bool.isRequired,
  // location: PropTypes.object.isRequired,
};
export default withRouter(connect(mapStateToProps)(MyHeader));
