import React, { Component } from "react";
import './DiningTableList.less';
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
import { diningTableList} from "@/api/table";


const { Column } = Table;

class DiningTableList extends Component {
  _isMounted = false; // 这个变量是用来标志当前组件是否挂载
  state = {
    list: [],
    loading: false,
    total: 0,
    listQuery: {
      pageNumber: 1,
      pageSize: 20000,
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
    diningTableList(this.state.listQuery).then((response) => {
      this.setState({ loading: false });
      const list = response.data.data.items;
      const total = response.data.data.total;
      if (this.state.firstTableNumber) {
        // do nothing if there exists variable firstTableNumber
      } else {
        this.setState({ rowSelectTableNumber: list[0].tableNumber }, ()=>{console.log("The stats is:", this.state)});
      }
      if (this._isMounted) {
        this.setState({ list, total });
      }
    });
  };

  onClickRow = (record) => {
    console.log(record);
    return {
      onClick: () => {
        this.setState({
          rowSelectTableNumber: record.tableNumber,
        });
      },
    };
  }

  setRowClassName = (record) => {
    return record.tableNumber === this.state.rowSelectTableNumber ? 'clickRowStyle' : '';
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchData();
  }

  render() {
    console.log("before rendering", this.state)
    return (
      <div className="dining-table-container">
        <h1 className="title-center title-emphasize">Assigned Tables</h1>
        <Table
          dataSource={this.state.list}
          size="middle"
          pagination={false}
          scroll={{ y: 650 }}
          onRow={this.onClickRow}
          rowClassName={this.setRowClassName}
        >
          <Column title="Table Number" dataIndex="tableNumber" key="tableNumber" width={40} align="center" className="column-font"/>
          <Column title="Available Seats" dataIndex="availableSeats" key="availableSeats" width={40} align="center" className="column-font" />
          <Column title="Max Seats" dataIndex="maxSeats" key="maxSeats" width={30} align="center" className="column-font"/>
        </Table>
      </div>
    );
  }

};

export default DiningTableList;




