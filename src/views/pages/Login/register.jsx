import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Icon, Row, Col, Button, Card } from 'antd';
import { loginRegister } from '../../../api';
import logo from '../../../resource/assets/logo.jpg';
import { setToken } from '../../../util/token';

const { Meta } = Card;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    count: 0,
    loading: false,
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
    const { history } = this.props;
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      console.log('Received values of form: ', values);

      if (!err) {
        this.startLogin();
        // const userName = values.userName;
        // const password = values.password;
        try {
          let res = await loginRegister(values);
          // console.log('loginByUsername', res);
          const data = res.data;
          setToken(data.accessToken);
          // eslint-disable-next-line no-shadow
        } catch (e) {
          // eslint-disable-line
          console.log('Login; err', e);
        }
        setTimeout(() => {
          this.endLogin();
          history.push('/');
        }, 2000);
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

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      // eslint-disable-next-line standard/no-callback-literal
      callback('密码不一致!');
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

  render() {
    const { getFieldDecorator } = this.props.form;
    const { count } = this.state;
    const form = (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '请填入用户名!',
                whitespace: true,
              },
            ],
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='用户名'
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: '确保邮箱格式正确！',
              },
              {
                required: true,
                message: '请填入邮箱',
              },
            ],
          })(
            <Input
              prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='邮箱'
            />,
          )}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请填入密码',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(
            <Input.Password
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='密码'
              visibilityToggle={false}
              style={{ width: '100%' }}
            />,
          )}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: '请确认你的密码',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(
            <Input.Password
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              onBlur={this.handleConfirmBlur}
              visibilityToggle={false}
              placeholder='确认密码'
            />,
          )}
        </Form.Item>
        <Form.Item>
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

        <Form.Item label='验证码'>
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
RegistrationForm.propTypes = {
  history: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
};

export default Form.create({ name: 'register' })(RegistrationForm);
