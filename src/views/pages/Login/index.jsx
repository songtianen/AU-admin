import React from 'react';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';

import {
  Row,
  Col,
  Form,
  Icon,
  Input,
  Button,
  Card,
  Checkbox,
  // notification,
} from 'antd';
import { connect } from 'react-redux';
import logo from '../../../resource/assets/logo.jpg';
// import { getToken } from '../../../util/token';
import { login, logout } from './redux/actions';

const FormItem = Form.Item;
const { Meta } = Card;

class Login extends React.Component {
  state = {
    loading: false,
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

  handleSubmit = () => {
    console.log('提交表单');
    const { dispatch } = this.props;
    const { getFieldsValue } = this.props.form;
    const values = getFieldsValue();
    const { username, password } = values;
    dispatch(login({ username, password }));
    this.startLogin();
    this.endLogin();
  };

  logoutUser = () => {
    const { dispatch } = this.props;

    dispatch(logout({}));
  };

  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  // componentDidMount() {
  //   console.log('componentDidMount');
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLogin) {
      this.endLogin();
      this.props.history.push('/');
    }
    // console.log('componentWillReceiveProps');
  }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  //   this.endLogin();
  // }
  // eslint-disable-next-line lines-between-class-members
  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate');
  //   return true;
  // }

  // componentWillUpdate() {
  //   console.log('UNSAFE_componentWillUpdate');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

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
                  <Form className='login-form'>
                    <FormItem hasFeedback>
                      {getFieldDecorator('username', {
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
                    <FormItem hasFeedback>
                      {getFieldDecorator('password', {
                        initialValue: '',
                        rules: [
                          { required: true, message: '请输入密码!' },
                          { whitespace: true, message: '不能输入空格!' },
                        ],
                      })(
                        <Input
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
                        loading={this.state.loading}
                        onClick={this.handleSubmit}
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
        <Button
          type='primary'
          loading={this.state.loading}
          onClick={this.logoutUser}
          style={{ width: '100%' }}
        >
          登录
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Login-state--', state);
  return {
    isLogin: state.login.isLogin,
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
  // eslint-disable-next-line react/no-unused-prop-types
  isLogin: PropTypes.bool.isRequired,
  // token: PropTypes.string.isRequired,
  // data: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Form.create({})(Login));
