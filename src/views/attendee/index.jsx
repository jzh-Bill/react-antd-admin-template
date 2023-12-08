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
      <div className="header">Attendee Information Table</div>
      <Divider orientation="left" orientationMargin="0"><span className="divider-text">Identity</span></Divider>
      <div className="attendee-info-container">
        <label className='display-text '>Confirm ID: </label> 
        <input value={confirmID} type="text" readonly="readonly" className='margin-right emphasize-text'></input>

        <label className='display-text '>Last Name: </label> 
        <input value={lastName} type="text" readonly="readonly" className='margin-right emphasize-text'></input>

        <label className='display-text '>First Name: </label> 
        <input value={firstName} type="text" readonly="readonly" className='margin-right emphasize-text'></input>

        <label className='display-text '>Church Name: </label> 
        <input value={churchName} type="text" readonly="readonly" className='margin-right emphasize-text'></input>
      </div>

      <Divider></Divider>

      <div className="table-tabs-container">
        {/* <Divider orientation="left" orientationMargin="0"><span className="divider-text">Primary Info.</span></Divider> */}
        <div className="tab-display-container">
          <TabsDisplay />
        </div>    
        {/* <Divider orientation="left" orientationMargin="0"><span className="divider-text">Attendees Table</span></Divider> */}
        <div style={{width: "100%"}}>
          <AttendeeTable />
        </div>    
      </div>


    </div>
  );
};

export default Attendee;
