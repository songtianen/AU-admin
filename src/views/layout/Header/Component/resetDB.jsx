/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Icon, Modal, Button } from 'antd';
import { resetdb } from '../../../../api';

const FormItem = Form.Item;

class ResetDB extends React.PureComponent {
  state = {
    modalVisible: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { password } = values;
        const info = await resetdb({ password });
        // console.log('Received values of form: ', info);
      }
      if (err) {
        // this.endLogin();
      }
    });
  };

  modalOnCancel = () => {
    this.setState({
      modalVisible: false,
    });
  };

  iconClick = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Icon
          style={{ fontSize: '20px', color: '#08c' }}
          type='database'
          onClick={this.iconClick}
        />
        <Modal
          visible={this.state.modalVisible}
          title='重置数据库'
          onCancel={this.modalOnCancel}
          footer={null}
          destroyOnClose
        >
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: '请输入密码!' },
                  { whitespace: true, message: '不能输入空格!' },
                  { max: 10, message: '不能超过10位!' },
                ],
              })(
                <Input.Password
                  prefix={
                    <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type='password'
                  placeholder='请输入密码'
                />,
              )}
            </FormItem>
            <FormItem>
              <Button
                type='primary'
                htmlType='submit'
                loading={this.state.loading}
                style={{ width: '100%' }}
              >
                提交
              </Button>
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

ResetDB.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  form: PropTypes.object.isRequired,
};
export default Form.create({})(ResetDB);
