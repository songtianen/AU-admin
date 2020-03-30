import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Menu, Icon, Layout, Row, Col, Avatar, Badge, Radio, Tag } from 'antd';
import { connect } from 'react-redux';
import ModuleMenu from './Component/ModuleMenu';
import { logout } from '../../../api';
import { removeToken } from '../../../util/token';
import FullScreen from './Component/FullScreen';
import SearchInput from './Component/SearchInput';
import { actionTypes } from '../../pages/Login/redux/actions';
import { updateModuleAction } from '../redux/actions/actions';
import ResetDB from './Component/resetDB';
// import './index.less';

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
    if (location.pathname !== moduleList[0].path) {
      dispatch(
        updateModuleAction({
          siderModuleMenu: moduleList[0].children,
          headerCurrentModuleName: moduleList[0].name,
          siderOpenKeys: [],
          siderSelectedKey: [],
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

  radioOnChange = (e) => {
    const { dispatch } = this.props;
    localStorage.setItem('theme', e.target.value);
    dispatch(
      updateModuleAction({
        theme: e.target.value,
      }),
    );
  };

  renderLoadble = (num) => {
    let arr = new Array(num).fill('0');
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {arr.map((item, index) => (
          <div
            key={index}
            style={{
              width: 50,
              height: 30,
              marginRight: 10,
              backgroundColor: '#F0F2F5',
            }}
          />
        ))}
      </div>
    );
  };

  render() {
    console.log('MyHeader render'); // withRouter的缘故，每次点击同一个菜单，都会re-render
    let isDisplay = this.props.itemDisplay;
    const { theme, moduleList } = this.props;
    const HeaderModuleList = moduleList.filter((item) => item.leftMenu);
    return (
      <Header
        style={{
          width: '100%',
          height: 49,
          backgroundColor: '#fff',
          borderBottom: 'solid 1px #e8e8e8',
          padding: 0,
          position: 'fixed',
          zIndex: 100,
        }}
      >
        <Row type='flex' justify='start'>
          <Col xs={4} sm={4} md={2} lg={1} xl={1}>
            <Menu theme={theme} style={{ border: 'none' }}>
              <div
                style={{
                  display: 'flex',
                  height: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={this.props.toggle}
              >
                <Icon
                  type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                  style={{ fontSize: '20px', color: '#08c' }}
                />
              </div>
            </Menu>
          </Col>
          <Col xs={14} sm={16} md={10} lg={10} xl={10}>
            {moduleList.length ? (
              <ModuleMenu
                moduleList={HeaderModuleList}
                onMenuClick={this.onMenuClick}
                headerCurrentModuleName={this.props.headerCurrentModuleName}
                theme={theme}
              />
            ) : (
              this.renderLoadble(5)
            )}
          </Col>
          <Col
            sm={12}
            md={7}
            lg={6}
            xl={6}
            style={{
              display: isDisplay ? 'block' : 'none',
              // backgroundColor: 'green',
            }}
          >
            <Menu theme={theme} style={{ border: 'none' }}>
              <div
                style={{
                  display: 'flex',
                  height: 48,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}
              >
                <SearchInput />
                <a
                  target={'_blank'}
                  href='https://github.com/songtianen/AU-admin'
                >
                  <Icon
                    style={{ fontSize: '20px', color: '#08c' }}
                    type='github'
                  />
                </a>
                <FullScreen />
                <ResetDB />
              </div>
            </Menu>
          </Col>
          <Col xs={6} sm={4} md={5} lg={4} xl={4} xxl={4}>
            <Menu
              mode='horizontal'
              style={{ height: 48, border: 'none', textAlign: 'center' }}
              onClick={this.userMenuClick}
              theme={theme}
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
                    {`你好:${this.props.name}-隐藏tabs`}
                  </Menu.Item>
                  <Menu.Item key='theme'>
                    <Radio.Group onChange={this.radioOnChange} value={theme}>
                      <Radio value={'light'}>
                        <Tag>light</Tag>
                      </Radio>
                      <Radio value={'dark'}>
                        <Tag color='#001529'>dark</Tag>
                      </Radio>
                    </Radio.Group>
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
  // let moduleList = state.app.moduleList.menuRes.filter((item) => {
  //   return item.leftMenu;
  // });
  return {
    name: state.app.name,
    theme: state.app.theme,
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
  theme: PropTypes.string.isRequired,
  // location: PropTypes.object.isRequired,
};
export default withRouter(connect(mapStateToProps)(MyHeader));
