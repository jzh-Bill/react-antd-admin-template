import React, { Component } from "react";
import { Form, Input, Select, Modal } from "antd";
import { Popconfirm, message } from 'antd';
const { TextArea } = Input;
class EditUserForm extends Component {
  render() {
    const {
      visible,
      onCancel,
      onOk,
      form,
      confirmLoading,
      currentRowData,
    } = this.props;
    const { getFieldDecorator } = form;
    const { id, name, role, description, userPassword } = currentRowData;
    const formItemLayout = {
      labelCol: {
        sm: { span: 4 },
      },
      wrapperCol: {
        sm: { span: 16 },
      },
    };
    return (
      <Modal
        title="Editing"
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        confirmLoading={confirmLoading}
      >
        <Form {...formItemLayout}>
          <Form.Item label="User ID:">
            {getFieldDecorator("id", {
              initialValue: id,
            })(<Input disabled />)}
          </Form.Item>
          <Form.Item label="Name:">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Please enter user real name" }],
              initialValue: name,
            })(<Input placeholder="Please enter user real name" />)}
          </Form.Item>
          {/* <Form.Item label="User Password:">
            {getFieldDecorator("userPassword", {
              initialValue: userPassword,
            })(<Input disabled />)}
          </Form.Item> */}
          {/* <Form.Item label="用户角色:">
            {getFieldDecorator("role", {
              initialValue: role,
            })(
              <Select style={{ width: 120 }} disabled={id === "admin"}>
                <Select.Option value="admin">admin</Select.Option>
                <Select.Option value="editor">editor</Select.Option>
                <Select.Option value="guest">guest</Select.Option>
              </Select>
            )}
          </Form.Item> */}
          <Form.Item label="Description:">
            {getFieldDecorator("description", {
              initialValue: description,
            })(<TextArea rows={4} placeholder="Please enter user's description" />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create({ name: "EditUserForm" })(EditUserForm);
