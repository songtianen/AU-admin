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
        onClick={this.props.onMenuClick}
        selectedKeys={[this.props.headerCurrentModuleName]}
        mode='horizontal'
        // eslint-disable-next-line react/jsx-boolean-value
        style={this.props.style}
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
  style: PropTypes.object.isRequired,
};
export default ModuleMenu;
