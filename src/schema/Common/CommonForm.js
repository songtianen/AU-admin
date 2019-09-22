import React from 'react';
import PropTypes from 'prop-types';
import commonFormSchemaUtil from './commonFormSchemaUtilPlus';

class CommonForm extends React.PureComponent {
  commonFormhandleSubmit = () => {
    this.formRef.props.form.validateFields((err, values) => {
      // 可以做一些数据的处理
      if (!err) {
        // 还是要交给上层组件处理
        let copy = {
          ...values,
          name: values.name.trim(),
          code: values.code.trim(),
        };
        this.props.modalSaveFunctionData(copy);
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