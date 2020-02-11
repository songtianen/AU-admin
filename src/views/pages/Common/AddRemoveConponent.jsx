import React from 'react';
import PropTypes from 'prop-types';

import { Button, Divider, Popconfirm } from 'antd';

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
        <Button type='primary' icon='plus-square-o' onClick={addFunc}>
          {addTitle}
        </Button>
        <Divider type='vertical' />

        {onConfirm ? (
          <Popconfirm title='确定删除?' onConfirm={onConfirm}>
            <Button type='danger' disabled={!hasSelected} icon='delete'>
              {removeTitle}
            </Button>
          </Popconfirm>
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
};
export default AddRemoveComponent;
