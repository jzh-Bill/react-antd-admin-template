import React from "react";
import { Tabs, Row, Col, Checkbox, Input } from 'antd';
import "./TabsDisplay.less"
import MealCalender from "./MealCalender";
import FamilyTable from "./FamilyTable";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}


const TabsDisplay = () => {
  const { TextArea } = Input;
  return (
    <Tabs onChange={callback} type="card">
      <TabPane tab="Information" key="1">
        <div style={{margin: "40px 0 0 0"}}>        
          <Row gutter={[0, 8]}>
            <Col span={8} offset={4}><span className="form-label-container"><label>Address: </label></span> <input type="text" style={{width: "70%"}}></input></Col>
          </Row>    
          <Row gutter={[0, 8]}>
            <Col span={8} offset={4}><span className="form-label-container"><label>City: </label></span> <input type="text"></input></Col>
            <Col span={8}><span className="form-label-container"><label>State: </label></span> <input type="text"></input></Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={8} offset={4}><span className="form-label-container"><label>Phone: </label></span> <input type="text"></input></Col>
            <Col span={8}><span className="form-label-container"><label>Zip: </label></span> <input type="text"></input></Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={8} offset={4}><span className="form-label-container"><label>Fax: </label></span> <input type="text"></input></Col>
            <Col span={8}><span className="form-label-container"><label>Email: </label></span> <input type="text"></input></Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={10} offset={4}><span className="form-label-container"><label>Fellowship: </label></span> <input type="text" style={{width: "70%"}}></input></Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={5} offset={4}><span className="form-label-container"><label>Gender: </label></span> <input type="text" style={{width: "40px"}}></input></Col>
            <Col span={4}><span className="form-label-container"><label>Age: </label></span> <input type="text" style={{width: "40px"}}></input></Col>
            <Col span={8}><span className="form-label-container"><label>PersonalID: </label></span> <input type="text" style={{width: "70%"}}></input></Col>
          </Row>              
          <Row gutter={[0, 8]}>
            <Col span={4} offset={4}><span className="form-label-container"><label>Single: </label></span> <Checkbox /></Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={3} offset={4}><span className="form-label-container"><label>Christian: </label></span> <Checkbox /></Col>
            <Col span={6}><span className="form-label-container"><label>Counselor: </label></span> <input type="text" style={{width: "60%"}}></input></Col>
          </Row>        
          <Row gutter={[0, 8]}>
            <Col span={6} offset={4}><span className="form-label-container"><label>Language: </label></span> <input type="text" style={{width: "60%"}}></input></Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={6} offset={4}><span className="form-label-container"><label>Music: </label></span> <input type="text" style={{width: "60%"}}></input></Col>
          </Row>
          <Row gutter={[0, 8]}>
          </Row>   
          <Row gutter={[0, 8]}>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={3} offset={4}><span className="form-label-container"><label>Lodging: </label></span> <Checkbox /></Col>
            <Col span={3} offset={4}><span className="form-label-container"><label>Active: </label></span> <Checkbox /></Col>
          </Row>           
        </div>
        <br />
      </TabPane>
      <TabPane tab="Reservation" key="2">
        <div style={{margin: "40px 0 0 0"}}>
          <Row gutter={[0, 8]}>
            <Col span={8} offset={4}><span className="form-label-container"><label>Room: </label></span> <input type="text" ></input></Col>
            <Col span={8}><span className="form-label-container-large"><label>Room Type: </label></span> <input type="text" style={{width: "30%"}}></input></Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={10} offset={4}><span className="form-label-container"><label>Hotel: </label></span> <input type="text" style={{width: "70%"}}></input></Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={6} offset={4}><span className="form-label-container"><label>Ch. In:   </label></span><input type="text"  style={{width: "40%"}}></input></Col>
            <Col span={6}><span className="form-label-container"><label>Exp. In:  </label></span> <input type="text"  style={{width: "40%"}}></input></Col>
          </Row>       
          <Row gutter={[0, 8]}>
            <Col span={6} offset={4}><span className="form-label-container"><label>Ch. Out:</label></span><input type="text"  style={{width: "40%"}}></input></Col>
            <Col span={6}><span className="form-label-container"><label>Exp. Out:</label></span> <input type="text"  style={{width: "40%"}}></input></Col>
          </Row>  
          <Row gutter={[0, 8]}>
            <Col span={4} offset={4}><span className="checkbox-form-label-container"><label>Late Arrival: </label></span> <Checkbox /></Col>
            <Col span={14} offset={0}><span style={{paddingRight: "20px"}}>Credit Card</span><span style={{paddingRight: "30px"}}>VS: <Checkbox /></span><span style={{paddingRight: "30px"}}>MS: <Checkbox /></span><span style={{paddingRight: "30px"}}>AE: <Checkbox /></span><span style={{paddingRight: "30px"}}>Other: <Checkbox /></span></Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={4} offset={4}><span className="checkbox-form-label-container"><label>Guarantee: </label></span> <Checkbox /></Col>
            <Col span={12} offset={0}><span className="form-label-container" style={{marginRight: "5px", width: "100px"}}><label>Card Number:</label></span><input type="text" style={{width: "50%"}}></input></Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={4} offset={4}><span className="checkbox-form-label-container"><label>Self Pay:</label></span> <Checkbox /></Col>
            <Col span={10} offset={0}><span className="form-label-container" style={{marginRight: "5px", width: "100px"}}><label>Expiration:</label></span><input type="text" style={{width: "20%"}}></input></Col>
          </Row>    
          <Row gutter={[0, 8]}>
            <Col span={4} offset={4}><span className="checkbox-form-label-container" ><label>Room Leader:</label></span> <Checkbox /></Col>
            <Col span={10} offset={0}><span className="form-label-container" style={{marginRight: "5px", width: "100px"}}><label>Request ID:</label></span><input type="text" style={{width: "20%"}}></input></Col>
          </Row>
        </div>
        <br />
      </TabPane>
      <TabPane tab="Meals" key="3">
        <Row gutter={[0, 8]}>
          <Col span={5} offset={4}>        
            <div>
              <label>Table Number: </label> <input type="text" style={{width: "70px"}}></input>
            </div>
          </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col span={18} offset={4}>        
            <MealCalender />
          </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col span={8} offset={4}>        
            <label>Special Needs:</label>
          </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col span={8} offset={4}>        
            <TextArea autoSize={{ minRows: 3, maxRows: 5 }} value={"123123123"}/>
          </Col>
        </Row>
        <br />
      </TabPane>
      <TabPane tab="WS/Services" key="4">
        <div style={{margin: "40px 0 0 0"}}>
          <Row gutter={[0, 8]}>
            <Col span={10} offset={4}><span className="form-label-container-large padding-right-extend"><label>Workshop Day: </label></span> <input type="text" className="medium-input-box-size"></input></Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={10} offset={4}><hr></hr></Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={10} offset={4}><span className="form-label-container-large padding-right-extend"><label>Workshop Morning: </label></span> <input type="text" className="medium-input-box-size"></input></Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={10} offset={4}><span className="form-label-container-large padding-right-extend"><label>Workshop Afternoon: </label></span> <input type="text" className="medium-input-box-size"></input></Col>
          </Row>          
        </div>
        <br />
        <Row gutter={[0, 8]}>
          <Col span={6} offset={4}><Checkbox /> <span><label>General Affair: </label></span> </Col>
          <Col span={6}><Checkbox /> <span><label>Cantonese Translation: </label></span> </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col span={6} offset={4}><Checkbox /> <span><label>Book Room: </label></span> </Col>
          <Col span={6}><Checkbox /> <span><label>Registration: </label></span> </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col span={6} offset={4}><Checkbox /> <span><label>Dining Room: </label></span> </Col>
          <Col span={6}><Checkbox /> <span><label>Nursery: </label></span> </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col span={6} offset={4}><Checkbox /> <span><label>Tape Recording: </label></span> </Col>
          <Col span={6}><Checkbox /> <span><label>Counselor: </label></span> </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col span={6} offset={4}><Checkbox /> <span><label>Time Keeper: </label></span> </Col>
          <Col span={6}><Checkbox /> <span><label>Table Leader: </label></span> </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col span={6} offset={4}><Checkbox /> <span><label>English Translation: </label></span> </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col span={12} offset={4}>
            <TextArea placeholder="Others">
            </TextArea>
          </Col>
        </Row>
        <br />
      </TabPane>
      <TabPane tab="Family Members" key="5">
        <Row gutter={[0, 8]}>
          <Col span={20} offset={2}>
            <FamilyTable />
          </Col>
        </Row>
      </TabPane>
    </Tabs>
  )
}

export default TabsDisplay;