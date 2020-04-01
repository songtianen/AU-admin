import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Row, Col, Form, Icon, Input, Button, Card, Checkbox } from 'antd';
import { connect } from 'react-redux';
import logo from '../../../resource/assets/logo.jpg';
// import { getToken } from '../../../util/token';
import { login } from './redux/actions';

const FormItem = Form.Item;
const { Meta } = Card;

class Login extends React.Component {
  state = {
    loading: false,
    // usernameError: false,
    // passwordError: false,
  };

  startLogin = () => {
    this.setState({ loading: true });
  };

  endLogin = () => {
    this.setState({ loading: false });
  };

  gotoRegister = () => {
    const { history } = this.props;
    history.push('/register');
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values;
        this.startLogin();
        dispatch(login({ username, password }));
        // console.log('Received values of form: ', values);
      }
      if (err) {
        this.endLogin();
      }
    });
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

  componentWillUnmount() {
    this.endLogin();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    console.log('render-Login');
    return (
      <div className='login-container'>
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
                  <span>用户名：admin/admin2/HR/CTO/CFO/CMO</span>
                  <Form className='login-form' onSubmit={this.handleSubmit}>
                    <FormItem>
                      {getFieldDecorator('username', {
                        initialValue: 'admin',
                        rules: [
                          {
                            required: true,
                            message: '请输入您的用户名!',
                          },
                          { whitespace: true, message: '不能输入空格!' },
                        ],
                      })(
                        <Input
                          prefix={
                            <Icon
                              type='user'
                              style={{ color: 'rgba(0,0,0,.25)' }}
                            />
                          }
                          placeholder='Username'
                        />,
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('password', {
                        initialValue: '123456',
                        rules: [
                          { required: true, message: '请输入密码!' },
                          { whitespace: true, message: '不能输入空格!' },
                        ],
                      })(
                        <Input.Password
                          prefix={
                            <Icon
                              type='lock'
                              style={{ color: 'rgba(0,0,0,.25)' }}
                            />
                          }
                          type='password'
                          placeholder='Password'
                        />,
                      )}
                    </FormItem>
                    <FormItem>
                      <a className='login-form-forgot' href=''>
                        忘记密码？
                      </a>
                      <Button
                        type='primary'
                        htmlType='submit'
                        loading={this.state.loading}
                        style={{ width: '100%' }}
                      >
                        登录
                      </Button>
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                      })(<Checkbox>记住我</Checkbox>)}
                      <Button
                        type='primary'
                        onClick={this.gotoRegister}
                        style={{ float: 'right' }}
                      >
                        注册
                      </Button>
                    </FormItem>
                  </Form>
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
  // console.log('Login-state--', state);
  return {
    isLogin: state.login.isLogin,
    error: state.login.error,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateUserInfo: (info) => {
//       dispatch(updateUserInfo(info));
//     },
//     updateAccessMenu: (accessMenu) => {
//       dispatch(updateAccessMenu(accessMenu));
//     },
//   };
// };

Login.propTypes = {
  history: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  // data: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps)(Form.create({})(Login)));
