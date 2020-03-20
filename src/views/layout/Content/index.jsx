import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import { withRouter } from 'react-router-dom';
import { MenuMapToComponent } from '../../../conf';
import { updateModuleAction } from '../redux/actions/actions';
import util from '../../../util/util';

const TabPane = Tabs.TabPane;

class MyNavTabs extends React.PureComponent {
  state = {
    currentPage: '',
    // 当前打开页面的数组
    openPages: [],
  };

  componentWillReceiveProps(nextProps) {
    // 还可以优化一下
    if (!nextProps.show || nextProps.moduleList.length === 0) {
      return;
    }
    // console.log('Content组件中componentWillReceiveProps'); // 第一次接收的moduleList是空

    const { location, moduleList } = nextProps;

    const pageModule = util.findInModuleList(
      moduleList,
      'path',
      location.pathname,
    );

    if (pageModule && pageModule.length) {
      // console.log('Content组件中componentWillReceiveProps-有'); // 第一次接收的moduleList是空

      const currentPage = pageModule[0];
      const isInOpenPages = this.state.openPages.some(
        (s) => s.name === currentPage.name,
      );
      if (!isInOpenPages) {
        let openPages = this.state.openPages;
        openPages.push({
          name: currentPage.name,
          title: currentPage.title,
          path: currentPage.path,
          closable: true,
        });
        this.setState({
          openPages,
          currentPage: currentPage.name,
        });
      }
      if (isInOpenPages) {
        // 1.4 如果当前的tab页面（currentPage），不是这页面，那么切换到这个页面
        if (this.state.currentPage !== currentPage.name) {
          this.setState({
            currentPage: currentPage.name,
          });
        }
      }
    }
    // 后端返回的数据没有这个路由,返回404页面
    if (pageModule.length === 0) {
      console.log('Content组件中componentWillReceiveProps-无'); // 第一次接收的moduleList是空

      // openPages 内是否有404的页面？
      let openPages = this.state.openPages;
      const isPage404 = openPages.some((s) => s.name === 'page404');
      const currentPage404 = this.state.currentPage === 'page404';
      if (!isPage404) {
        console.log('Content组件中componentWillReceiveProps-openPages-没有404'); // 第一次接收的moduleList是空

        openPages.push({
          name: 'page404',
          title: '页面不存在',
          path: location.pathname,
          closable: true,
        });
        this.setState({
          openPages,
          currentPage: 'page404',
        });
      }
      if (isPage404 && !currentPage404) {
        this.setState({
          currentPage: 'page404',
        });
      }
    }
  }

  tabsOnChange = (activeKey) => {
    // 还可以优化一下
    const { dispatch, moduleList } = this.props;
    const openPages = this.state.openPages;
    const activeItem = openPages.find((item) => item.name === activeKey);

    // 找到Header.name
    const pageModule = util.findCurrentMenuNameAndModule(
      moduleList,
      activeItem.path,
    );

    if (pageModule.name) {
      // 找到SidermoduleMenu
      const siderData = util.findSiderComponentSelectedNameAndOpenKeys(
        JSON.parse(JSON.stringify(pageModule.children)),
        activeItem.path,
      );

      dispatch(
        updateModuleAction({
          siderModuleMenu: pageModule.children,
          siderSelectedKey: siderData.siderKey,
          headerCurrentModuleName: pageModule.name,
          siderOpenKeys: siderData.siderOpenKeys,
        }),
      );
    }
    this.props.history.push(activeItem.path);
  };

  // tab 新增/删除回调
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  // onEdit 返回的删除回调/还可以优化一下
  remove = (targetKey) => {
    const { dispatch, moduleList } = this.props;
    let currentPage = this.state.currentPage;
    let lastIndex;
    this.state.openPages.forEach((pane, i) => {
      if (pane.name === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.openPages.filter(
      (pane) => pane.name !== targetKey,
    );

    if (lastIndex >= 0 && currentPage === targetKey) {
      currentPage = panes[lastIndex].name;
    }
    this.setState({
      openPages: panes,
      currentPage,
    });

    let path = this.state.openPages.filter((s) => s.name === currentPage)[0]
      .path;
    const pageModule = util.findCurrentMenuNameAndModule(moduleList, path);
    const siderData = util.findSiderComponentSelectedNameAndOpenKeys(
      JSON.parse(JSON.stringify(pageModule.children)),
      path,
    );
    dispatch(
      updateModuleAction({
        siderModuleMenu: pageModule.children,
        siderSelectedKey: siderData.siderKey,
        headerCurrentModuleName: pageModule.name,
        siderOpenKeys: siderData.siderOpenKeys,
      }),
    );
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
          // onTabClick={this.onTabClick}
          onChange={this.tabsOnChange}
          // size="small"
        >
          {/* 根据state.openPages渲染页面 */}
          {this.state.openPages.map((item) => {
            let Page = MenuMapToComponent[item.name]
              ? MenuMapToComponent[item.name]
              : MenuMapToComponent['notdone']; // 如果前端本地没有这个页面，返回page404
            return (
              <TabPane
                forceRender
                tab={item.title}
                closable={item.closable} // 是否是可关闭
                key={item.name}
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
    moduleList: state.app.moduleList,
  };
};
MyNavTabs.propTypes = {
  dispatch: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  moduleList: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired, // layout 组件的show属性
};
export default withRouter(connect(mapStateToProps)(MyNavTabs));
