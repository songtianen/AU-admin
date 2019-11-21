import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Icon, Row, Col, Button, Card } from 'antd';
import { connect } from 'react-redux';
// import { loginRegister } from '../../../api';

import logo from '../../../resource/assets/logo.jpg';
// import { setToken } from '../../../util/token';
import { register } from './states/actions';

const { Meta } = Card;

class RegistrationForm extends React.Component {
  state = {
    count: 0,
    loading: false,
    isValidate: false,
    username: '',
    email: '',
    phone: '',
    confirm: '',
    password: '',
    captcha: '',
  };

  interval = undefined;

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startLogin = () => {
    this.setState({ loading: true });
  };

  endLogin = () => {
    this.setState({ loading: false });
  };

  handleSubmit = (e) => {
    const { dispatch } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, val) => {
      let vals = { ...val };
      const keys = Object.keys(vals);
      let errArr = [];
      keys.forEach((item) => {
        let a = vals[item];
        a += '';
        a = a.trim();
        if (a === 'undefined' || '') {
          console.log('aaaaaa', item);
          errArr.push(a);
          console.log('errArrerrArrerrArr', errArr);
          this.setState({
            [item]: a,
          });
        }
      });

      if (!err) {
        dispatch(register(val));
      }
    });
    // let values = this.props.form.getFieldsError();
    // const keys = Object.keys(values);
    // // let isDoLogin = false;
    // keys.forEach((item) => {
    //   let a = values[item];
    //   a += '';
    //   a = a.trim();
    //   if (a === 'undefined' || '') {
    //     console.log('aaaaaa', item);
    //     this.setState({
    //       [item]: a,
    //     });
    //   }
    // });

    // console.log('EERRRRRRRR', values);

    this.startLogin();
    // dispatch(register(values));
    this.endLogin = () => {
      this.setState({ loading: false });
    };
  };
  // 倒计时

  onGetCaptcha = () => {
    let count = 59;
    this.setState({
      count,
    });
    this.interval = window.setInterval(() => {
      count -= 1;
      this.setState({
        count,
      });

      if (count === 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  };

  render() {
    console.log('-------qing', this.state);

    const { getFieldDecorator } = this.props.form;
    const { count } = this.state;
    const { error, data, msg } = this.props;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    // const tailFormItemLayout = {
    //   wrapperCol: {
    //     xs: {
    //       span: 24,
    //       offset: 0,
    //     },
    //     sm: {
    //       span: 16,
    //       offset: 8,
    //     },
    //   },
    // };
    const form = (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item
          // {...tailFormItemLayout}
          label='用户名'
          validateStatus={error && data.info === 'username' ? 'error' : ''}
          help={error && data.info === 'username' ? `${msg}` : ''}
        >
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '输入用户名' }],
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='用户名'
            />,
          )}
        </Form.Item>
        <Form.Item
          label='邮箱'
          validateStatus={error && data.info === 'email' ? 'error' : ''}
          help={error && data.info === 'email' ? `${msg}` : ''}
        >
          {getFieldDecorator('email', {
            rules: [{ required: true, message: '请输入邮箱' }],
          })(
            <Input
              prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='邮箱'
            />,
          )}
        </Form.Item>
        <Form.Item
          label='密码'
          validateStatus={error && data.info === 'password' ? 'error' : ''}
          help={error && data.info === 'password' ? `${msg}` : ''}
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input.Password
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='密码'
              visibilityToggle={false}
              style={{ width: '100%' }}
            />,
          )}
        </Form.Item>
        <Form.Item
          label='确认密码'
          validateStatus={error && data.info === 'confirm' ? 'error' : ''}
          help={error && data.info === 'confirm' ? `${msg}` : ''}
          hasFeedback
        >
          {getFieldDecorator('confirm', {
            rules: [{ required: true, message: '确认密码' }],
          })(
            <Input.Password
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              visibilityToggle={false}
              placeholder='确认密码'
            />,
          )}
        </Form.Item>
        <Form.Item
          label='手机号'
          validateStatus={error && data.info === 'phone' ? 'error' : ''}
          help={error && data.info === 'phone' ? `${msg}` : ''}
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入手机号' }],
          })(
            <Input
              prefix={
                <Icon type='mobile' style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              placeholder='手机号'
              style={{ width: '100%' }}
            />,
          )}
        </Form.Item>

        <Form.Item
          label='验证码'
          validateStatus={error && data.info === 'confirm' ? 'error' : ''}
          help={error && data.info === 'confirm' ? `${msg}` : ''}
          hasFeedback
        >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: '请输入验证码' }],
              })(<Input />)}
            </Col>
            <Col span={12}>
              <Button
                type='primary'
                disabled={!!count}
                onClick={this.onGetCaptcha}
              >
                {count ? `${count} s` : '获取验证码'}
              </Button>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Button type='primary' loading={this.state.loading} htmlType='submit'>
            提交
          </Button>
        </Form.Item>
      </Form>
    );

    return (
      <div>
        <canvas id='noise-canvas' />
        <Row type='flex' justify='center' align='middle'>
          <Col>
            <Card
              hoverable
              bordered={false}
              style={{ border: '1px solid #efefef' }}
              cover={
                <div style={{ padding: 10 }}>
                  <img
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '150px',
                      marginBottom: 10,
                    }}
                    alt='logo'
                    src={logo}
                  />
                  {form}
                </div>
              }
            >
              <Meta
                avatar={
                  <Icon
                    type='github'
                    style={{ color: '#1890ff', fontSize: 28 }}
                  />
                }
                title='AU-admin'
                description='通用权限控制与表单的后台管理系统'
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    error: state.user.error,
    msg: state.user.msg,
    data: state.user.data,
  };
};
RegistrationForm.propTypes = {
  // history: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(
  Form.create({ name: 'register' })(RegistrationForm),
);
