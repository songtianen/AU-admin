import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Icon, Row, Col, Button, Card, notification } from 'antd';
import { connect } from 'react-redux';
import logo from '../../../resource/assets/logo.jpg';
// eslint-disable-next-line no-unused-vars
import { register, clearRegisterError } from './states/actions';

const { Meta } = Card;

class RegistrationForm extends React.Component {
  state = {
    count: 0,
    confirmDirty: false,
    loading: false,
    isValidate: false,
    username: '#$@!#%',
    email: '#$@!#%',
    phone: '#$@!#%',
    confirm: '#$@!#%',
    password: '#$@!#%',
    captcha: '#$@!#%',
    error: false,
    data: {},
    msg: '',
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
    dispatch(
      clearRegisterError({
        error: false,
        data: {},
        msg: '',
      }),
    );
    e.preventDefault();
    this.props.form.validateFields((err, val) => {
      if (!err) {
        let vals = { ...val };
        const keys = Object.keys(vals);
        keys.forEach((item) => {
          let a = vals[item];
          this.setState({
            [item]: a,
          });
        });

        dispatch(register(val));
        this.startLogin();
      }
      if (err) {
        const username = val.username;
        const password = val.phone;
        if (!username || !password) {
          notification.error({
            message: '请输入用户名和手机',
          });
        }
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

  // 根据后端返回error数据提示
  validateInfo = ({ error, data, msg }, key) => {
    const { form } = this.props;
    const FieldValue = form.getFieldValue(key);
    const isTouched = form.isFieldTouched(key);
    if (isTouched && (!FieldValue || !FieldValue.trim())) {
      return {
        error: 'error',
        msg: '不能输入空格',
      };
    }

    if (error && data.info === key) {
      if (this.state[key] !== FieldValue) {
        return '';
      }
      return {
        error: 'error',
        msg,
      };
    }
    return '';
  };

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState) {
    // 典型用法（不要忘记比较 props）
    if (
      this.props.error !== prevProps.error &&
      this.state.loading === prevState.loading
    ) {
      this.endLogin();
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { count } = this.state;
    const { error, data, msg } = this.props;
    const userNameValidateStatus = this.validateInfo(
      {
        error,
        data,
        msg,
      },
      'username',
    );
    const phoneValidateStatus = this.validateInfo(
      {
        error,
        data,
        msg,
      },
      'phone',
    );

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
          validateStatus={
            userNameValidateStatus ? userNameValidateStatus.error : ''
          }
          help={userNameValidateStatus ? userNameValidateStatus.msg : ''}
        >
          {getFieldDecorator(
            'username',
            {
              rules: [
                { required: true, message: '输入用户名' },
                { whitespace: true, message: '用户名不能有空格' },
              ],
            },
            { validateTrigger: 'onChange' },
          )(
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
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item
          label='手机号'
          validateStatus={phoneValidateStatus ? phoneValidateStatus.error : ''}
          help={phoneValidateStatus ? phoneValidateStatus.msg : ''}
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
          <Button
            // disabled={error ? 1 : 0}
            type='primary'
            loading={this.state.loading}
            htmlType='submit'
          >
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
