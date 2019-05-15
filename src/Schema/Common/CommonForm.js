import React from 'react';
import PropTypes from 'prop-types';
import commonFormSchemaUtil from './commonFormSchemaUtilPlus';

class CommonForm extends React.PureComponent {
  commonFormhandleSubmit = () => {
    this.formRef.props.form.validateFields((err, values) => {
      if (!err) {
        // 还是要交给上层组件处理
        console.log('CommonForm -组件this.props.handleSubmit(values)', values);
        this.props.modalSaveFunctionData(values);
      }
    });
    // const obj = this.formRef.props.form.getFieldsValue();
  };

  handleReset = () => {
    this.formRef.props.form.resetFields();
  };

  render() {
    console.log('CommonForm render');
    const { schema, uiSchema, formData, style } = this.props;
    // 根据当前的schema, 获取对应的表单组件
    const FormComponent = commonFormSchemaUtil.getForm(schema, uiSchema);

    return (
      <div style={style}>
        <FormComponent
          formData={formData}
          wrappedComponentRef={(instance) => {
            this.formRef = instance;
          }}
        />
      </div>
    );
  }
}
CommonForm.propTypes = {
  schema: PropTypes.object.isRequired,
  uiSchema: PropTypes.object.isRequired,
  formData: PropTypes.object,
  modalSaveFunctionData: PropTypes.func,
  style: PropTypes.object.isRequired,
};
export default CommonForm;
