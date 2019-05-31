import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import CommonForm from '../../../../schema/Common/CommonForm';

class EditRoleModal extends React.PureComponent {
  onCancel = () => {
    this.props.onCancel();
  };

  onOk = () => {
    this.editForm.commonFormhandleSubmit();
  };

  render() {
    return (
      <Modal
        visible={this.props.visible}
        cancelText='关闭'
        okText='提交'
        title={this.props.title}
        onCancel={this.onCancel}
        onOk={this.onOk}
        destroyOnClose
      >
        <CommonForm
          ref={(instance) => {
            this.editForm = instance;
          }}
          schema={this.props.schema}
          uiSchema={this.props.uiSchema}
          formData={this.props.formData}
          modalSaveFunctionData={this.props.handFormSubmit}
        />
      </Modal>
    );
  }
}
EditRoleModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  schema: PropTypes.object.isRequired,
  uiSchema: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,
  handFormSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditRoleModal;
