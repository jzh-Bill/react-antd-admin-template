import React, { Component } from "react";
import "./UnAssignedAttendeeList.less"
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
  Select,
  Radio
} from "antd";

import states from "./americaStates.jsx";
import fellowships from "./fellowships";

import { attendeeTableList} from "@/api/table";

const { Column } = Table;
const { Panel } = Collapse;
const { Option } = Select;

class UnAssignedAttendeeList extends Component {
  _isMounted = false; // 这个变量是用来标志当前组件是否挂载
  state = {
    list: [],
    rowCfrId: 0,
    loading: false,
    total: 0,
    listQuery: {
      pageNumber: 1,
      pageSize: 5,
      confirmID: "",
      lastName: "",
      firstName: "",
      chineseName: "",
      personalID: "",
      paymentType: "all",
      state: "all",
      fellowship: "all",
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

  filterCnfrmIDChange = (e) => {
    let value = e.target.value;
    this.setState((state) => ({
      listQuery: {
        ...state.listQuery,
        confirmID:value,
      }
    }), ()=>{console.log(this.state)});
  };
  filterLNameChange = (e) => {
    let value = e.target.value;
    this.setState((state) => ({
      listQuery: {
        ...state.listQuery,
        lastName:value,
      }
    }), ()=>{console.log(this.state)});
  };
  filterFNameChange = (e) => {
    let value = e.target.value;
    this.setState((state) => ({
      listQuery: {
        ...state.listQuery,
        firstName:value,
      }
    }), ()=>{console.log(this.state)});
  };

  filterChnNameChange = (e) => {
    let value = e.target.value;
    this.setState((state) => ({
      listQuery: {
        ...state.listQuery,
        chineseName:value,
      }
    }), ()=>{console.log(this.state)});
  };

  statesOnChange = (value) => {
    this.setState((state) => ({
      listQuery: {
        ...state.listQuery,
        state:value,
      }
    }), ()=>{this.fetchData();});
  };
  
  fellowshipOnChange = (value) => {
    this.setState((state) => ({
      listQuery: {
        ...state.listQuery,
        fellowship:value,
      }
    }), ()=>{this.fetchData();});
  };

  paymentTypeSelectOnChange = (e) => {
    let value = e.target.value;
    this.setState((state) => ({
      listQuery: {
        ...state.listQuery,
        paymentType:value,
      }
    }), ()=>{this.fetchData();});
  };

  filterPersonalIDChange = (e) => {
    let value = e.target.value;
    this.setState((state) => ({
      listQuery: {
        ...state.listQuery,
        personalID:value,
      }
    }), ()=>{console.log(this.state)});
  };

  fetchData = () => {
    this.setState({ loading: true });
    attendeeTableList(this.state.listQuery).then((response) => {
      this.setState({ loading: false });
      const list = response.data.data.items;
      const total = response.data.data.total;
      console.log("the total is", total);
      if (this._isMounted) {
        this.setState({ list, total });
      }
    });
  };

  componentDidMount() {
    this._isMounted = true;
    this.fetchData();
  }

  changePageSize = (current, pageSize) => {
    this.setState(
      (state) => ({
        listQuery: {
          ...state.listQuery,
          pageNumber: 1,
          pageSize,
        },
      }),
      () => {
        this.fetchData();
      }
    );
  };

  onClickRow = (record) => {
    console.log(record);
    return {
      onClick: () => {
        this.setState({
          rowCfrId: record.confirmID,
        });
      },
    };
  }

  setRowClassName = (record) => {
    return record.confirmID === this.state.rowCfrId ? 'clickRowStyle' : '';
  }

  render() {
    return (
      <fieldset className="fieldset-border">
        <legend>Unassigned Attendees List</legend> 
        <div style={{width: "100%"}} >
          {/* <Collapse defaultActiveKey={["1"]}>
            <Panel header="List Filter" key="1" >

              <Form layout="inline">

                <Form.Item label="Payment Type">
                  <Radio.Group onChange={this.paymentTypeSelectOnChange} value={this.state.listQuery.paymentType}>
                    <Radio value={"single"}>Single</Radio>
                    <Radio value={"family"}>Family</Radio>
                    <Radio value={"self-pay"}>Self-pay</Radio>
                    <Radio value={"all"}>All</Radio>
                  </Radio.Group>
                </Form.Item>

                <span style={{marginLeft: "50px"}}>
                  <Form.Item label="State:">
                    <Select
                      showSearch
                      style={{ width: 160 }}
                      placeholder="Select a State"
                      optionFilterProp="children"
                      onChange={this.statesOnChange}
                      defaultValue="all"
                      filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value = "all">All</Option>
                      {states.map(item => (<Option value = {item.abbreviation}>{item.name}</Option>))}
                    </Select>                    
                  </Form.Item>
                </span>
                <span style={{marginLeft: "50px"}}>
                  <Form.Item label="Fellowship:">
                      <Select
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select a Fellowship"
                        optionFilterProp="children"
                        onChange={this.fellowshipOnChange}
                        defaultValue="All"
                        filterOption={(input, option) =>
                          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value = "all">All</Option>
                        {fellowships.map(item => (<Option value = {item}>{item}</Option>))}
                      </Select>                    
                    </Form.Item>                  
                </span>
              </Form>
            </Panel>
          </Collapse> */}

          <Collapse defaultActiveKey={["2"]}>
            <Panel header="Search By" key="2">
              <Form layout="inline">
                <Form.Item label="Confirm ID">
                  <Input onChange={this.filterCnfrmIDChange} />
                </Form.Item>
                <Form.Item label="Last Name:">
                  <Input onChange={this.filterLNameChange} />
                </Form.Item>
                <Form.Item label="First Name:">
                  <Input onChange={this.filterFNameChange} />
                </Form.Item>


                <Form.Item label="Chinese Name:">
                  <Input onChange={this.filterChnNameChange} />
                </Form.Item>
                <Form.Item label="Personal ID:">
                  <Input onChange={this.filterPersonalIDChange} />
                </Form.Item>


                <Form.Item>
                  <Button type="primary" icon="search" onClick={this.fetchData}>
                    search
                  </Button>
                </Form.Item>
              </Form>
            </Panel>
          </Collapse>

          <Table
            dataSource={this.state.list}
            pagination={false}
            onRow={this.onClickRow}
            rowClassName={this.setRowClassName}
            scroll={{ y: 500}}
            size={"small"}
          >
            <Column title="Confirm ID" dataIndex="confirmID" key="confirmID" width={55} align="center" className="title-font-size-large"/>
            <Column title="Last Name" dataIndex="lastName" key="lastName" width={50} align="center" className="title-font-size-large"/>
            <Column title="First Name" dataIndex="firstName" key="firstName" width={50} align="center" className="title-font-size-large"/>
            <Column title="Chinese Name" dataIndex="chineseName" key="chineseName" width={70} align="center" className="title-font-size-large" />
            <Column title="Personal ID" dataIndex="personalID" key="fellowship" width={70} align="center" className="title-font-size-large"/>

            <Column title="Payment Type" dataIndex="paymentType" key="paymentType" width={60} align="center" className="title-font-size-large"/>
            <Column title="State" dataIndex="state" key="state" width={45} align="center" className="title-font-size-large"/>
            <Column title="Fellowship" dataIndex="fellowship" key="fellowship" width={150} align="center" className="title-font-size-large"/>
          </Table>
        </div>
        <br />
        <div className="centralize-items">
          <div>
            <Pagination
              total={this.state.total}
              defaultPageSize={5}
              pageSizeOptions={["5", "10", "20"]}
              onShowSizeChange={this.changePageSize}
              showTotal={(total) => `共${total}条数据`}
              onChange={this.changePage}
              current={this.state.listQuery.pageNumber}
              showSizeChanger
              showQuickJumper
              hideOnSinglePage={true}
            />            
          </div>
        </div>
      </fieldset>
    );
  }
};

export default UnAssignedAttendeeList;