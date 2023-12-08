import React, { Component } from "react";
import "./AssignedAttendeeList.less"

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


const { Column } = Table;


const data = [];

for (let i = 0; i < 5; i++) {
  data.push({
    confirmedID: "001015"+i,
    name: `Edward King ${i}`,
    details: `London, Park Lane no. ${i}`,
  });
}


class AssignedAttendeeList extends Component {
  _isMounted = false; // 这个变量是用来标志当前组件是否挂载
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    list: [],
    loading: false,
    total: 0,
    listQuery: {
      pageNumber: 1,
      pageSize: 20,
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
    // this.setState({ loading: true });
    // diningTableList(this.state.listQuery).then((response) => {
    //   this.setState({ loading: false });
    //   const list = response.data.data.items;
    //   const total = response.data.data.total;
    //   if (this.state.firstTableNumber) {
    //     // do nothing if there exists variable firstTableNumber
    //   } else {
    //     this.setState({ rowSelectTableNumber: list[0].tableNumber }, ()=>{console.log("The stats is:", this.state)});
    //   }
    //   if (this._isMounted) {
    //     this.setState({ list, total });
    //   }
    // });
  };


  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  
  componentDidMount() {
    this._isMounted = true;
    this.fetchData();
  }

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      columnWidth: 25,
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div style={{ height: "100%" }}>
        <h1 className="attendee-list-title-emphasize">Assigned Attendees</h1>
        <Table
          dataSource={data}
          size="small"
          pagination={false}
          scroll={{ y: 250 }}
          rowSelection={rowSelection}
        >
          <Column title="Confirmed ID" dataIndex="confirmedID" key="confirmedID" width={50} align="center" />
          <Column title="Name" dataIndex="name" key="name" width={50} align="center" />
          <Column title="Details" dataIndex="details" key="details" width={50} align="center" />
          {/* <Column title="Action" dataIndex="action" key="action" width={50} align="center" /> */}
        </Table>
        <div style={{ margin: "10px 10px 10px 10px" }}>
          <Button type="primary" onClick={this.removeAssignedAttendees} disabled={!hasSelected} loading={loading}>
            Remove
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
      </div>
    );
  }

};

export default AssignedAttendeeList;




