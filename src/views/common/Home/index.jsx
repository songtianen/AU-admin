import React from 'react';
import Bar from '../../echarts/bar';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div style={{ padding: 14 }}>
        <Bar />
      </div>
    );
  }
}
