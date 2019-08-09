import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Layout } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../../../resource/assets/logo.jpg';
import { MenuToRouter } from '../../../../conf';
import './index.less';

const { SubMenu } = Menu;
const { Item } = Menu;
const { Sider } = Layout;

class SubMenuList extends React.PureComponent {
  componentDidMount() {
    // console.log('SiderMenu 的 props', this.props);
  }

  renderMenuItem = ({ name, title, icon }) => {
    // console.log('siderMenu的name', name)
    let link = MenuToRouter[name];
    return (
      <Item key={name}>
        {link ? (
          <Link to={link}>
            <span>
              {icon && <Icon type={icon} style={{ color: '#08c' }} />}
              <span>{title}</span>
            </span>
          </Link>
        ) : (
          <span>
            {icon && <Icon type={icon} style={{ color: '#08c' }} />}
            <span>{title}</span>
          </span>
        )}
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
    console.log('SubMenuList render, selectedKeys', this.props.selectedKeys);
    const { menus, openMenu, openKeys, selectedKeys } = this.props;
    return (
      <Sider
        breakpoint='lg'
        collapsedWidth={this.props.responsive ? 0 : undefined}
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        width={180}
        style={{ border: 'none' }}
      >
        <div
          className='logo'
          style={{ paddingLeft: this.props.collapsed ? '18px' : '6px' }}
        >
          <img src={logo} alt='logo' />
          <span style={{ display: this.props.collapsed ? 'none' : 'block' }}>
            AU-andmin
          </span>
        </div>
        <Menu
          mode='inline'
          onOpenChange={openMenu}
          selectedKeys={[selectedKeys]}
          openKeys={openKeys}
        >
          {menus &&
            menus.map((item) =>
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
  menus: PropTypes.array.isRequired,
  openMenu: PropTypes.func.isRequired,
  selectedKeys: PropTypes.string,
  openKeys: PropTypes.array.isRequired,
};
export default SubMenuList;
