import React, { useState } from "react";
import './CircleTable.less'


const CircleTable = (props) => {

  let rotatingAngle = 360 / props.data.maximumPeople;
  let lastAngle = rotatingAngle;
  let componentsArr = [];
  for (let i = 0; i < props.data.maximumPeople; i++) {
    if (componentsArr.length !== 0) {
      if (i <= props.data.numberOfPeople - 1) {
        componentsArr.push(<li style={{ transform: "rotate(" + lastAngle + "deg)", transformOrigin: "10px 115px"}}></li>);        
      } else {
        componentsArr.push(<li style={{ transform: "rotate(" + lastAngle + "deg)", transformOrigin: "10px 115px", backgroundColor: "#1DA57A"}}></li>);
      }
      lastAngle += rotatingAngle;
    }
    if (i <= props.data.numberOfPeople) {
      componentsArr.push(<li></li>);
    } else {
      componentsArr.push(<li className="empty-seat"></li>);
    }
  }


  return (
    <div>
      <div className="circle-table-container">
        <div className="demo">
          <ul>
            {componentsArr}
          </ul>
        </div>
        <div className="label-container">
          <p>Table Number</p>
          <p>#{props.data.tableNumber}</p>
          <p>{props.data.numberOfPeople}/{props.data.maximumPeople} Persons</p>
        </div>
      </div>  
      <div className="legends-container">
      <div className="circle-green" ></div><span className="legend-font">Empty</span>
        <div className="circle-red" style={{margin: "0 0 0 30px"}}></div><span className="legend-font">Occupied</span>
      </div>    
    </div>
  );
};

export default CircleTable;




