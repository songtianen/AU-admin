import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import { withRouter } from 'react-router-dom';
import MenuToRouter from '../../../conf/menuToRouter';
import MenuMapToComponent from '../../../util/menuMapToComponent';

const TabPane = Tabs.TabPane;

class MyNavTabs extends React.PureComponent {
  state = {
    currentPage: '',
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

  componentWillReceiveProps(nextProps, nextState) {
    if (!nextProps.show || nextProps.openAccessMenu.length === 0) {
      return;
    }
    const pathname = nextProps.location.pathname;
    let name = Object.keys(MenuToRouter).find(
      (key) => MenuToRouter[key] === pathname,
    );
    if (name) {
      if (this.state.openPages.some((s) => s.name === name)) {
        if (this.state.currentPage !== name) {
          this.setState({
            currentPage: name,
          });
        }
      } else {
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
    } else if (
      nextProps.location.pathname === '/app/home' &&
      nextState.currentPage !== 'home'
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

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

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
            zIndex: 99,
            backgroundColor: '#fff',
            width: '100%',
            // height: 60,
            padding: '10px 0px 10px 18px',
            margin: 0,
            border: 'none',
          }}
          onEdit={this.onEdit}
          type='editable-card'
          onTabClick={this.onTabClick}
          // size="small"
        >
          {this.state.openPages.map((page) => {
            let Page = MenuMapToComponent[page.name]
              ? MenuMapToComponent[page.name]
              : MenuMapToComponent['page404'];
            return (
              <TabPane
                forceRender
                tab={page.title}
                closable={page.closable}
                key={page.name}
              >
                <Page />
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
  show: PropTypes.bool.isRequired,
};
export default withRouter(connect(mapStateToProps)(MyNavTabs));
