import React, { Component } from "react";
import { Card, Button, Table, message, Divider, Popconfirm } from "antd";
import { getUsers, deleteUser, editUser, addUser } from "@/api/user";
import TypingCard from '@/components/TypingCard'
import EditUserForm from "./forms/edit-user-form"
import AddUserForm from "./forms/add-user-form"
const { Column } = Table;
class User extends Component {
  state = {
    users: [],
    editUserModalVisible: false,
    editUserModalLoading: false,
    currentRowData: {},
    addUserModalVisible: false,
    addUserModalLoading: false,
  };
  getUsers = async () => {
    const result = await getUsers()

    const { data : users, status } = result.data

    console.log(result.data)

    if (status === 0) {
      this.setState({
        users
      })
    }
  }
  handleEditUser = (row) => {
    this.setState({
      currentRowData: Object.assign({}, row),
      editUserModalVisible: true,
    });
  };

  handleDeleteUser = (row) => {
    const { id } = row
    if (id === "admin") {
      message.error("不能删除管理员用户！")
      return
    }
    deleteUser({id}).then(res => {
      message.success("Successfully Deleted")
      this.getUsers();
    })
  }
  
  handleEditUserOk = _ => {
    const { form } = this.editUserFormRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.setState({ editModalLoading: true, });
      editUser(values).then((response) => {
        form.resetFields();
        this.setState({ editUserModalVisible: false, editUserModalLoading: false });
        message.success("编辑成功!")
        this.getUsers()
      }).catch(e => {
        message.success("编辑失败,请重试!")
      })
      
    });
  };

  handleCancel = _ => {
    this.setState({
      editUserModalVisible: false,
      addUserModalVisible: false,
    });
  };

  handleAddUser = (row) => {
    this.setState({
      addUserModalVisible: true,
    });
  };

  handleAddUserOk = _ => {
    const { form } = this.addUserFormRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.setState({ addUserModalLoading: true, });
      addUser(values).then((response) => {
        form.resetFields();
        this.setState({ addUserModalVisible: false, addUserModalLoading: false });
        message.success("添加成功!")
        this.getUsers()
      }).catch(e => {
        message.success("添加失败,请重试!")
      })
    });
  };

  componentDidMount() {
    this.getUsers()
  }
  render() {
    const { users } = this.state
    const title = (
      <span>
        <Button type='primary' onClick={this.handleAddUser}>Add a User</Button>
      </span>
    )
    const cardContent = `Here you can manage the users in the system, such as adding a new user or modifying a user that already exists in the system.`
    return (
      <div className="app-container">
        <TypingCard title='Users Managment' source={cardContent} />
        <br/>
        <Card title={title}>
          <Table bordered rowKey="id" dataSource={users} pagination={false}>
            <Column title="User ID" dataIndex="id" key="id" align="center"/>
            <Column title="Username" dataIndex="username" key="username" align="center"/>
            <Column title="User Real name" dataIndex="name" key="name" align="center"/>
            <Column title="Role" dataIndex="role" key="role" align="center"/>
            <Column title="Description" dataIndex="description" key="description" align="center" />
            <Column title="Action" key="action" width={195} align="center"render={(text, row) => (
              <span>
                <Button type="primary" shape="circle" icon="edit" title="Editing" onClick={this.handleEditUser.bind(null,row)}/>
                <Divider type="vertical" />
                <Popconfirm
                  title="Are you sure delete this task?"
                  onConfirm={this.handleDeleteUser.bind(null,row)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="primary" shape="circle" icon="delete" title="Deleting"/>
                </Popconfirm>
                
              </span>
            )}/>
          </Table>
        </Card>
        <EditUserForm
          currentRowData={this.state.currentRowData}
          wrappedComponentRef={formRef => this.editUserFormRef = formRef}
          visible={this.state.editUserModalVisible}
          confirmLoading={this.state.editUserModalLoading}
          onCancel={this.handleCancel}
          onOk={this.handleEditUserOk}
        />  
        <AddUserForm
          wrappedComponentRef={formRef => this.addUserFormRef = formRef}
          visible={this.state.addUserModalVisible}
          confirmLoading={this.state.addUserModalLoading}
          onCancel={this.handleCancel}
          onOk={this.handleAddUserOk}
        />  
      </div>
    );
  }
}

export default User;
