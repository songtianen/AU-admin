import React from 'react';
import { Layout, Icon } from 'antd';

const { Footer } = Layout;
// eslint-disable-next-line react/prefer-stateless-function
export default class Foot extends React.PureComponent {
  render() {
    return (
      <Footer>
        <div
          style={{
            // padding: '10px 24px 24px',
            textAlign: 'center',
            color: '#bebebe',
            // backgroundColor: 'pink',
            fontSize: '12px',
          }}
        >
          <a
            href='https://github.com/songtianen'
            target='_blank'
            rel='noopener noreferrer'
          >
            AU-admin&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon type='github' size='large' />
          </a>
          <div>
            Copyright
            <Icon
              type='copyright'
              style={{ paddingRight: '2px', paddingLeft: '1px' }}
            />
            <span>2019&nbsp;songten@icloud.com</span>
            <div>WeChat:13548106816</div>
            <div>QQ:715298152</div>
          </div>
        </div>
      </Footer>
    );
  }
}
