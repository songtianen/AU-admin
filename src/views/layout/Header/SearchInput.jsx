import React from 'react';
import PropTypes from 'prop-types';

import { Input, Icon } from 'antd';

class SearchInput extends React.PureComponent {
    state = {
      value: '',
      focus: false,
    }

    onChangeValue = (e) => {
      this.setState({ value: e.target.value });
    }

    onFocus = () => {
      this.setState({ focus: true });
    }

    onBlur = () => {
      this.setState({ focus: false });
    }

    render() {
      const { value } = this.state;
      return (
        <div style={this.props.style}>
          <Input
            placeholder="Search"
            prefix={<Icon type={this.state.focus ? 'arrow-left' : 'search'} style={{ color: !this.state.focus ? 'rgba(0,0,0,.25)' : '#1890ff' }} />}
            value={value}
            onChange={this.onChangeValue}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        </div>
      );
    }
}
SearchInput.propTypes = {
  style: PropTypes.object.isRequired,
};
export default SearchInput;
