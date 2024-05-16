import React, { useState } from "react";
import TabsDisplay from "../../components/AttendeeUtils/TabsDisplay";
import {Divider} from "antd";
import AttendeeTable from  "../../components/AttendeeUtils/AttendeeTable";

import './index.less'



const Attendee = () => {


  // confirmID: "123",
  // lastName: "123",
  // firstName: "123",
  // ChurchName: "123",

  const[confirmID, setConfirmID] = useState("123");
  const[lastName, setLastName] = useState("123");
  const[firstName, setFirstName] = useState("123");
  const[churchName, setChurchNameD] = useState("123");

  return (
    <div className='attendee-lay-out' >
      <div className="header">Attendees Information</div>
      <Divider></Divider>
      <div className="table-tabs-container">
        <div className="Attendee-table-wrapper">
          <Divider orientation="center"><span className="divider-text">Attendees Table</span></Divider>
          <AttendeeTable />
        </div>
        <div className="tab-display-container">
          <Divider orientation="center"><span className="divider-text">Selected Attendee</span></Divider>
          <div className="attendee-info-container">
            <label className='display-text '>Confirm ID: </label> 
            <input value={confirmID} type="text" readonly="readonly" className='margin-right emphasize-text input-size'></input>

            <label className='display-text '>Last Name: </label> 
            <input value={lastName} type="text" readonly="readonly" className='margin-right emphasize-text input-size'></input>

            <label className='display-text '>First Name: </label> 
            <input value={firstName} type="text" readonly="readonly" className='margin-right emphasize-text input-size'></input>

            <label className='display-text '>Church Name: </label> 
            <input value={churchName} type="text" readonly="readonly" className='margin-right emphasize-text input-size'></input>
          </div>
          <Divider orientation="center"><span className="divider-text">Attendee Details</span></Divider>
          <TabsDisplay />
        </div>    
      </div>
    </div>
  );
};

export default Attendee;
