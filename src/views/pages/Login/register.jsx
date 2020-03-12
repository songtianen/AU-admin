import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Icon, Row, Col, Button, Card } from 'antd';
import { connect } from 'react-redux';
import logo from '../../../resource/assets/logo.jpg';
import { register } from './redux/actions';

const { Meta } = Card;

class RegistrationForm extends React.Component {
  state = {
    count: 0,
    confirmDirty: false,
    loading: false,
  };

  interval = undefined;

  componentWillUnmount() {
    clearInterval(this.interval);
    this.endLogin();
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
      if (!err) {
        dispatch(register(val));
        this.startLogin();
      }
      if (err) {
        this.endLogin();
      }
    });
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

  handleConfirmBlur = (e) => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  // 确认密码
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('请输入一致的密码!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLogin) {
      this.props.history.push('/');
    }
    const { error } = nextProps;
    if (error) {
      console.log('componentWillReceiveProps', error);
      this.endLogin();
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { count } = this.state;
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

    const form = (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item
          // {...tailFormItemLayout}
          label='用户名'
        >
          {getFieldDecorator('username', {
            rules: [
              { required: true, message: '输入用户名' },
              { whitespace: true, message: '用户名不能输入空格' },
            ],
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='用户名'
            />,
          )}
        </Form.Item>
        <Form.Item label='邮箱'>
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: '请输入邮箱' },
              { type: 'email', message: '邮箱格式一定要正确' },
            ],
          })(
            <Input
              prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='邮箱'
            />,
          )}
        </Form.Item>
        <Form.Item label='密码'>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请输入密码!',
              },
              { whitespace: true, message: '用户名不能输入空格' },

              {
                validator: this.validateToNextPassword,
              },
            ],
          })(
            <Input.Password
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='密码'
              visibilityToggle
            />,
          )}
        </Form.Item>
        <Form.Item label='确认密码'>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: '请确认密码!',
              },
              { whitespace: true, message: '用户名不能输入空格' },

              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item label='手机号'>
          {getFieldDecorator('phone', {
            rules: [
              { required: true, message: '请输入手机号' },
              { pattern: /^1[3-578]\d{9}$/, message: '请输入正确的手机格式' },
            ],
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

        <Form.Item label='验证码'>
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [
                  { required: true, message: '请输入验证码' },
                  { max: 6, message: '6位' },
                  { whitespace: true, message: '用户名不能输入空格' },
                ],
              })(<Input placeholder='任意6位' />)}
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
    error: state.login.error,
    isLogin: state.login.isLogin,
  };
};
RegistrationForm.propTypes = {
  history: PropTypes.object.isRequired,
  isLogin: PropTypes.bool.isRequired,
  form: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(
  Form.create({ name: 'register' })(RegistrationForm),
);
