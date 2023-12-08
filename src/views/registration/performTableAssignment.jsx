import React, { useState } from "react";
import TablesList from "../../components/TablePerformance/DiningTableList"
import CircleTable from "../../components/TablePerformance/CircleTable";
import AssignedAttendeeList from "../../components/TablePerformance/AssignedAttendeeList"
import UnAssignedAttendeeList from "../../components/TablePerformance/UnAssignedAttendeeList";
import PopModalAddTable from "../../components/TablePerformance/PopModalAddTable";
import PopModalDeleteTable from "../../components/TablePerformance/PopModalDeleteTable";


import './performTableAssignment.less';


import { Button } from 'antd';

let data = {
  numberOfPeople: 9,
  maximumPeople: 20,
  tableNumber: 123
};


const PerformTableAssignment = () => {

  return (
    <div>
      <div className="page-container">
        <TablesList />
        <div className="dining-table-container">
          <div style={{display: "flex", flexDirection: "row"}}>
            <CircleTable data={data} />

            {/* <div className="circle-table-legends-container">
              <div className="legend-container">
                <div className="circle-red"></div><span>Occupied</span>                
              </div>
              <br />
              <div className="legend-container">
                <div className="circle-green"></div><span>Empty</span>                
              </div>
            </div> */}

          </div>
          <div className="buttons-container">
            <PopModalAddTable />
            <PopModalDeleteTable />
          </div>
          <div className="attendees-list-container">
            <AssignedAttendeeList />
          </div>
        </div>
        <div className="unassigned-attendees-list-container">
          <UnAssignedAttendeeList />
        </div>
      </div>
    </div>
  );
};

export default PerformTableAssignment;




