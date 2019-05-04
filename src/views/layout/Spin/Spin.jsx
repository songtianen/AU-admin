import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { connect } from 'react-redux';

class MySpin extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const PageRouters = this.props.pageRouters;
    return (
      <Spin size="large" spinning={this.props.spinLoading}>
        <PageRouters />
      </Spin>
    );
  }
}

MySpin.propTypes = {
  pageRouters: PropTypes.func.isRequired,
  spinLoading: PropTypes.bool.isRequired,
};

const mapStateToPorps = (state) => {
  // console.log('statestatestate', state)
  const { spinLoading } = state.spin;
  return { spinLoading };
};
export default connect(mapStateToPorps)(MySpin);
// export default MySpin
