import React from 'react';
import PropTypes from 'prop-types';
import { Button, Divider, Popconfirm } from 'antd';
import PermissionContainer from '../../../util/permissionContainer';

class AddRemoveComponent extends React.PureComponent {
  onConfirm = () => {
    if (this.props.hasSelected) {
      return this.props.onConfirm;
    }
    return false;
  };

  render() {
    const {
      addFunc,
      hasSelected,
      addTitle,
      removeTitle,
      onConfirm,
    } = this.props;
    return (
      <div style={{ marginBottom: 16 }}>
        <PermissionContainer permission={this.props.addPermission}>
          <Button type='primary' icon='plus-square-o' onClick={addFunc}>
            {addTitle}
          </Button>
        </PermissionContainer>
        <Divider type='vertical' />

        {onConfirm ? (
          <PermissionContainer permission={this.props.delPermission}>
            <Popconfirm title='确定删除?' onConfirm={onConfirm}>
              <Button type='danger' disabled={!hasSelected} icon='delete'>
                {removeTitle}
              </Button>
            </Popconfirm>
          </PermissionContainer>
        ) : (
          ''
        )}
      </div>
    );
  }
}
AddRemoveComponent.propTypes = {
  addFunc: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  hasSelected: PropTypes.bool.isRequired,
  addTitle: PropTypes.string.isRequired,
  removeTitle: PropTypes.string.isRequired,
  addPermission: PropTypes.array.isRequired,
  delPermission: PropTypes.array.isRequired,
};
export default AddRemoveComponent;
