import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
// import { Link } from 'react-router-dom';
// import { MenuToRouter } from '../../../../conf';

class ModuleMenu extends React.PureComponent {
  renderList = () => {
    let list = [];
    // let link = MenuToRouter[name];
    const { moduleList } = this.props;
    for (let i = 0; i < moduleList.length; i++) {
      list.push(
        <Menu.Item key={moduleList[i].name}>
          {/* <Link to={''}> */}
          <div
            style={{ width: '100%', height: '100%', backgroundColor: 'pink' }}
          >
            {moduleList[i].title}
          </div>
          {/* </Link> */}
        </Menu.Item>,
      );
    }
    return list;
  };

  render() {
    const list = this.renderList();
    return (
      <Menu
        onClick={this.props.updateModule}
        selectedKeys={[this.props.currentModule]}
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
  currentModule: PropTypes.string.isRequired,
  updateModule: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};
export default ModuleMenu;
