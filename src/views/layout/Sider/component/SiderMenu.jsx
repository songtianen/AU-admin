import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Layout } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../../../resource/assets/logo.jpg';
// import { MenuToRouter } from '../../../../conf';

const { SubMenu } = Menu;
const { Item } = Menu;
const { Sider } = Layout;

class SubMenuList extends React.PureComponent {
  renderMenuItem = ({ path, name, title, icon }) => {
    // 路由跳转到 配置文件中的 value
    // let link = MenuToRouter[name];
    return (
      <Item key={name}>
        {
          <Link to={path}>
            <span>
              {icon && <Icon type={icon} style={{ color: '#08c' }} />}
              <span>{title}</span>
            </span>
          </Link>
        }
      </Item>
    );
  };

  renderSubMenu = ({ name, title, icon, children }) => {
    // console.log('renderSubMenu的name', name)
    return (
      <SubMenu
        key={name}
        title={
          <span>
            {icon && <Icon type={icon} style={{ color: '#08c' }} />}
            <span>{title}</span>
          </span>
        }
      >
        {children &&
          children.map((item) =>
            item.children && item.children.filter((s) => s.leftMenu).length > 0
              ? this.renderSubMenu(item)
              : this.renderMenuItem(item),
          )}
      </SubMenu>
    );
  };

  render() {
    const {
      siderModuleMenu,
      menuOpenchange,
      siderOpenKeys,
      selectedKey,
      menuOnClick,
    } = this.props;
    return (
      <Sider
        breakpoint='lg'
        collapsedWidth={this.props.responsive ? 0 : undefined}
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        width={180}
        // style={{
        //   // backgroundColor: 'red',
        //   borderRight: '1px solid #e8e8e8',
        // }}
      >
        <div
          className='logo'
          style={{
            height: '50px',
            overflow: 'hidden',
            borderBottom: 'solid 1px #e8e8e8',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={logo}
            alt='logo'
            style={{
              height: 34,
              width: 34,
            }}
          />
          <div
            style={{
              fontWeight: 'bold',
              fontSize: '18px',
              paddingLeft: '10px',
              color: 'rgb(97, 218, 251)',
              display: this.props.collapsed ? 'none' : 'block',
            }}
          >
            AU-andmin
          </div>
        </div>
        <Menu
          mode='inline'
          onClick={menuOnClick}
          onOpenChange={menuOpenchange}
          selectedKeys={selectedKey}
          openKeys={siderOpenKeys}
          style={{ border: 'none' }}
        >
          {siderModuleMenu &&
            siderModuleMenu.map((item) =>
              item.children && item.children.length
                ? this.renderSubMenu(item)
                : this.renderMenuItem(item),
            )}
        </Menu>
      </Sider>
    );
  }
}

SubMenuList.propTypes = {
  responsive: PropTypes.bool.isRequired,
  collapsed: PropTypes.bool.isRequired,
  siderModuleMenu: PropTypes.array.isRequired,
  menuOpenchange: PropTypes.func.isRequired,
  menuOnClick: PropTypes.func.isRequired,
  selectedKey: PropTypes.array.isRequired,
  siderOpenKeys: PropTypes.array.isRequired,
};
export default SubMenuList;
