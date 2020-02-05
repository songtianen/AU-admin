import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Form,
  Icon,
  Input,
  Button,
  Card,
  Checkbox,
  notification,
} from 'antd';
import { connect } from 'react-redux';
import logo from '../../../resource/assets/logo.jpg';
import { getToken } from '../../../util/token';
import { login, clearRegisterError } from './redux/actions';

const FormItem = Form.Item;
const { Meta } = Card;

class Login extends React.PureComponent {
  state = {
    loading: false,
    username: '#$@!#%',
    password: '#$@!#%',
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
    const { dispatch } = this.props;
    dispatch(
      clearRegisterError({
        error: false,
        data: {},
        msg: '',
      }),
    );
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let vals = { ...values };
        const keys = Object.keys(vals);
        keys.forEach((item) => {
          let a = vals[item];
          this.setState({
            [item]: a,
          });
        });

        const username = values.username;
        const password = values.password;
        dispatch(login({ username, password }));
        this.startLogin();
      }
      if (err) {
        const username = values.username;
        const password = values.password;
        if (!username || !password) {
          notification.error({
            message: '请输入用户名或密码',
          });
        }
        this.endLogin();
      }
    });
  };

  componentWillMount() {
    const { history } = this.props;
    let token = getToken();
    if (token) {
      history.push('/');
    }
  }

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

  // 请求loading的显示与关闭
  componentDidUpdate(prevProps, prevState) {
    // 典型用法（不要忘记比较 props）：
    if (
      this.props.error !== prevProps.error &&
      this.state.loading === prevState.loading
    ) {
      this.endLogin();
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { error, data, msg } = this.props;
    const userNameValidateStatus = this.validateInfo(
      {
        error,
        data,
        msg,
      },
      'password',
    );
    // const phoneValidateStatus = this.validateInfo(backEndInfo, 'phone');
    const form = (
      <Form onSubmit={this.handleSubmit} className='login-form'>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '请输入您的用户名!',
              },
            ],
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Username'
            />,
          )}
        </FormItem>
        <FormItem
          validateStatus={
            userNameValidateStatus ? userNameValidateStatus.error : ''
          }
          help={userNameValidateStatus ? userNameValidateStatus.msg : ''}
          hasFeedback
        >
          {getFieldDecorator('password', {
            initialValue: '',
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
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
            htmlType='submit'
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
    );

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
    msg: state.login.msg,
    data: state.login.data,
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
  error: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Form.create()(Login));
