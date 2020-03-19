import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import { withRouter } from 'react-router-dom';
import { MenuToRouter, MenuMapToComponent } from '../../../conf';

const TabPane = Tabs.TabPane;

class MyNavTabs extends React.PureComponent {
  state = {
    currentPage: '',
    // 当前打开页面的数组
    openPages: [
      {
        name: 'home',
        title: '首页',
        path: '/app/home',
        closable: false,
        content: MenuMapToComponent['home'],
      },
    ],
  };

  hasPermission = true;

  componentWillReceiveProps(nextProps) {
    console.log('content 组件 中 接收的 laocation', nextProps);

    // 如果layout容器组件，请求的数据没有，或者没有设置显示，就不显示tabs,也不进行
    // 下面的逻辑
    if (!nextProps.show || nextProps.openAccessMenu.length === 0) {
      return;
    }
    // 1 得到location 的name属性，
    const pathname = nextProps.location.pathname;
    // 2 找到与路由配置文件内与location.pathanme路径匹配的name， key
    let name = Object.keys(MenuToRouter).find(
      (key) => MenuToRouter[key] === pathname,
    );

    if (name) {
      // 验证state状态openPages 中是否存在 name
      if (this.state.openPages.some((s) => s.name === name)) {
        // 如果openPages中存在这个name，
        // 再判断当前state.currentPage，如果不等于这个name
        if (this.state.currentPage !== name) {
          this.setState({
            currentPage: name,
          });
        }
      } else {
        // 如果state状态openPages中name不等于 配置文件中的name
        const { openAccessMenu } = nextProps;
        const menus = openAccessMenu.filter((s) => s.name === name);
        if (menus.length > 0) {
          let menu = menus[0];
          let openPages = this.state.openPages;
          openPages.push({
            name: menu.name,
            title: menu.title,
            path: MenuToRouter[menu.name],
            closable: true,
          });
          this.setState({
            openPages,
            currentPage: name,
          });
        } else {
          // 403
          // eslint-disable-next-line no-lonely-if
          if (this.state.openPages.some((s) => s.name === 'page403')) {
            if (this.state.currentPage !== 'page403') {
              this.setState({
                currentPage: 'page403',
              });
            }
          } else {
            let openPages = this.state.openPages;
            openPages.push({
              name: 'page403',
              title: '没有权限',
              path: pathname,
              closable: true,
            });
            this.setState({
              openPages,
              currentPage: 'page403',
            });
          }
        }
      }
      // 如果路由配置文件中没找到name，就返回home页面（state默认的）
    } else if (
      nextProps.location.pathname === '/app/home' &&
      this.state.currentPage !== 'home'
    ) {
      this.setState({
        currentPage: 'home',
      });
    } else {
      // 404
      // eslint-disable-next-line no-lonely-if
      if (this.state.openPages.some((s) => s.name === 'page404')) {
        if (this.state.currentPage !== 'page404') {
          this.setState({
            currentPage: 'page404',
          });
        }
      } else {
        let openPages = this.state.openPages;
        openPages.push({
          name: 'page404',
          title: '页面不存在',
          path: pathname,
          closable: true,
        });
        this.setState({
          openPages,
          currentPage: 'page404',
        });
      }
    }
  }

  // tab切换
  onTabClick = (activeKey) => {
    // if (activeKey !== this.state.currentPage) {
    //   this.setState({
    //     currentPage: activeKey
    //   });
    //   return;
    // }
    if (activeKey !== this.state.currentPage && activeKey === 'home') {
      this.props.history.push('/app/home');
      return;
    }
    if (activeKey !== this.state.currentPage) {
      this.props.history.push(MenuToRouter[activeKey]);
    }
  };

  // tab 新增/删除回调
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  // onEdit 返回的删除回调
  remove = (targetKey) => {
    let activeKey = this.state.currentPage;
    let lastIndex;
    this.state.openPages.forEach((pane, i) => {
      if (pane.name === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.openPages.filter(
      (pane) => pane.name !== targetKey,
    );
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].name;
    }
    this.setState({
      openPages: panes,
      currentPage: activeKey,
    });
    let path = this.state.openPages.filter((s) => s.name === activeKey)[0].path;
    this.props.history.push(path);
  };

  render() {
    console.log('MyNavTabs render');
    return (
      <div style={this.props.style}>
        <Tabs
          hideAdd
          activeKey={this.state.currentPage}
          tabBarStyle={{
            position: 'fixed',
            overflow: 'hidden',
            zIndex: 99,
            backgroundColor: '#fff',
            width: '100%',
            paddingLeft: '8px',
            borderBottom: '1px solid #e8e8e8',
          }}
          onEdit={this.onEdit}
          type='editable-card'
          onTabClick={this.onTabClick}
          // size="small"
        >
          {/* 根据state.openPages渲染页面 */}
          {this.state.openPages.map((page) => {
            let Page = MenuMapToComponent[page.name]
              ? MenuMapToComponent[page.name]
              : MenuMapToComponent['page404'];
            return (
              <TabPane
                forceRender
                tab={page.title}
                closable={page.closable} // 是否是可关闭
                key={page.name}
              >
                <div
                  style={{
                    padding: '10px',
                  }}
                >
                  <Page />
                </div>
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    openAccessMenu: state.app.openAccessMenu,
  };
};
MyNavTabs.propTypes = {
  style: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  openAccessMenu: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired, // layout 组件的show属性
};
export default withRouter(connect(mapStateToProps)(MyNavTabs));
