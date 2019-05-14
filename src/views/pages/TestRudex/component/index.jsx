import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreator from '../states/actions';
import Test from './Test';

class TestContainer extends React.Component {
  componentDidMount() {
    console.log('TestContainer', this.props);
  }

  render() {
    const { num, actions } = this.props;
    return <Test num={num} actions={actions} />;
  }
}

const mapStateToProps = (state) => {
  console.log('ownProp-mapStateToProps===', state);
  return {
    num: state.test.num,
  };
};
const mapDispatchToProps = (dispatch) => {
  console.log('ownProp-mapDispatchToProps', actionCreator);
  return {
    actions: bindActionCreators(actionCreator, dispatch),
  };
};
TestContainer.propTypes = {
  num: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestContainer);
