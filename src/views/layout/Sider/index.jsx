import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MySiderPre from './Component/SiderMenu';
import appActions from '../redux/redux_app';
// import { MenuToRouter } from '../../../conf';
// import util from '../../../util/util';

const { updateModuleAction } = appActions.actions;

class MySider extends React.PureComponent {
  menuOpenchange = (v) => {
    // console.log('sider按钮展开的回调函数', v);
    const { dispatch } = this.props;

    dispatch(updateModuleAction({ siderOpenKeys: v }));
  };

  render() {
    console.log('Sider-Container render');
    return (
      <MySiderPre
        responsive={this.props.responsive}
        collapsed={this.props.collapsed}
        siderModuleMenu={this.props.siderModuleMenu}
        menuOpenchange={this.menuOpenchange}
        selectedKey={this.props.siderSelectedKey}
        siderOpenKeys={this.props.siderOpenKeys}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    openAccessMenu: state.app.openAccessMenu,
    accessMenu: state.app.accessMenu,
    siderSelectedKey: state.app.siderSelectedKey,
    siderOpenKeys: state.app.siderOpenKeys,
  };
};

MySider.propTypes = {
  responsive: PropTypes.bool.isRequired,
  collapsed: PropTypes.bool.isRequired,
  siderModuleMenu: PropTypes.array.isRequired,
  siderSelectedKey: PropTypes.array.isRequired,
  siderOpenKeys: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(MySider);
