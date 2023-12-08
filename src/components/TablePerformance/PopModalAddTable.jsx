import React, { Component } from "react";
import { Modal, Button, Input, Form } from 'antd';
import "./PopModalAddTable.less";

class PopModalAddTable extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 1000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  tableNumberOnchange = (e) => {
    let value = e.target.value;
    this.setState({newTaleNumber: value}, () => {console.log(this.state)})
  }

  maximumPeopleOnChange = (e) => {
    let value = e.target.value;
    this.setState({maximumSeatNumber: value}, () => {console.log(this.state)})
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.handleOk();
      }
    });
  };

  render() {
    const { visible, loading } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add Table
        </Button>
        <Modal
          visible={visible}
          title="Add Table"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            // <Button key="back" onClick={this.handleCancel}>
            //   Cancel
            // </Button>,
            // <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
            //   Add
            // </Button>,
          ]}
        >
          <Form onSubmit={this.handleSubmit}>          
            <div className="self">
              <div className="">
                <Form.Item label="Table Number" style={{display: "flex"}}>
                  {getFieldDecorator("newTableNumber", {
                    rules: [{
                      required: true,
                      message: "Please input the new table number"
                    }]
                  })(<Input placeholder="" onChange={this.tableNumberOnchange}/>)}            
                </Form.Item>                
              </div>

              {/* <br /> */}
              <Form.Item label="Maximum Seats" style={{display: "flex"}}>
                {getFieldDecorator("newTableMaximumSeats", {
                  rules: [{
                    required: true,
                    message: "Please input the new table maximum seats"
                  }]
                })(<Input placeholder="" onChange={this.tableNumberOnchange}/>)}              
              </Form.Item>
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Add
              </Button>
              <Button key="back" onClick={this.handleCancel} style={{margin: "0 0 0 20px"}}>
                Cancel
              </Button>
            </Form.Item>
          </Form>
        
        </Modal>
      </div>
    );
  }
}


export default Form.create()(PopModalAddTable);
