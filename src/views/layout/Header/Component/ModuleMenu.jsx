import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';

class ModuleMenu extends React.PureComponent {
  renderList = () => {
    let list = [];
    const { moduleList } = this.props;
    for (let i = 0; i < moduleList.length; i++) {
      list.push(
        <Menu.Item key={moduleList[i].name}>
          <div>{moduleList[i].title}</div>
        </Menu.Item>,
      );
    }
    return list;
  };

  render() {
    const list = this.renderList();
    return (
      <Menu
        theme={this.props.theme}
        onClick={this.props.onMenuClick}
        selectedKeys={[this.props.headerCurrentModuleName]}
        mode='horizontal'
        style={{ height: 48, border: 'none' }}
      >
        {list}
      </Menu>
    );
  }
}
ModuleMenu.propTypes = {
  moduleList: PropTypes.array.isRequired,
  headerCurrentModuleName: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};
export default ModuleMenu;
