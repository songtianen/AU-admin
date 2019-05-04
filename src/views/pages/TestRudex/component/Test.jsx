import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';

export default class Test extends React.Component {
  componentDidMount() {
    console.log('test', this.props);
  }

  render() {
    const {num, actions} = this.props;
    return (
      <div>
        <p>
          {num}
        </p>
        <Button onClick={() => actions.add()}>+</Button>
      </div>
    );
  }
}
Test.propTypes = {
  num: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};
