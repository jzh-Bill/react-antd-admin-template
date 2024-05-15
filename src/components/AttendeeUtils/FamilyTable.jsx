import React, { Component } from "react";
import "./FamilyTable.less";
import {
  Table,
  Tag,
  Form,
  Button,
  Input,
  Collapse,
  Pagination,
  Divider,                                      
  
  message,
  Select
} from "antd";

import { familyTableList} from "@/api/table";

const { Column } = Table;

class FamilyTable extends Component {
  _isMounted = false; // 这个变量是用来标志当前组件是否挂载
  state = {
    list: [],
    loading: false,
    total: 0,
    listQuery: {
      pageNumber: 1,
      pageSize: 5,
    }
  };

  changePage = (pageNumber, pageSize) => {
    this.setState(
      (state) => ({
        listQuery: {
          ...state.listQuery,
          pageNumber,
        },
      }),
      () => {
        this.fetchData();
      }
    );
  };

  fetchData = () => {
    this.setState({ loading: true });
    familyTableList(this.state.listQuery).then((response) => {
      this.setState({ loading: false });
      const list = response.data.data.items;
      const total = response.data.data.total;
      if (this._isMounted) {
        this.setState({ list, total });
      }
    });
  };

  componentDidMount() {
    this._isMounted = true;
    this.fetchData();
  }

  render() {
    return (
      <div>
        <Divider orientation="left" orientationMargin="0"><span className="divider-text">Family Members</span></Divider>
        <div className="border">
          <Table
            dataSource={this.state.list}
            pagination={false}
          >
            <Column title="Name" dataIndex="name" key="name" width={150} align="center" />
            <Column title="Age" dataIndex="age" key="age" width={70} align="center" />
            <Column title="M/F" dataIndex="gender" key="gender" width={70} align="center" />
            <Column title="Christian" dataIndex="christian" key="christian" width={150} align="center" />
            <Column title="Fellowship" dataIndex="fellowship" key="fellowship" width={150} align="center" />
          </Table>
        </div>
        <br />
        <div className="show-in-middle lower-margin-bottom">
        <Pagination
          total={this.state.total}

          showTotal={(total) => `共${total}条数据`}
          onChange={this.changePage}
          current={this.state.listQuery.pageNumber}
          hideOnSinglePage={true}
        />
        </div>

      </div>
    );
  }
};

export default FamilyTable;
