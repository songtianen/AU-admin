import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';

class ModuleMenu extends React.PureComponent {
  renderList = (moduleList) => {
    let list = [];
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
    const { moduleList } = this.props;
    console.log('HeaderModuleRender', moduleList);
    return (
      <Menu
        theme={this.props.theme}
        onClick={this.props.onMenuClick}
        selectedKeys={[this.props.headerCurrentModuleName]}
        mode='horizontal'
        style={{ height: 48, border: 'none' }}
      >
        {this.renderList(moduleList)}
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
