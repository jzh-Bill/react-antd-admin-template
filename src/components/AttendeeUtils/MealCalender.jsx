import React, { Component, Fragment } from 'react';
import { Checkbox } from 'antd'
import './MealCalender.css';
import days from './mockUpCalender.js';

class MealCalender extends Component {
    constructor(props) {
        super(props);
        this.state = this.initializeDays(days);
        console.log(this.state)
        this.state = {
            ...this.state,
            allDisable: false,
        }
    }

    render () {
        return (
            <div style={{ width:'600px', margin: '30px 0 0 0'}}>
                <table>
                    <tr>
                        <td className='title_emphasize'>Date/Services</td>
                        <td className='title_emphasize'>Breakfast</td>
                        <td className='title_emphasize'>Lunch</td>
                        <td className='title_emphasize'>Dinner</td>
                        <td className='title_emphasize'>Lodge</td>
                    </tr>    

                    {days.map((day) => {
                        return <tr>
                                    <td className='emphasize'>{day.date} <br />{day.day}</td> 
                                    {day.breakfast == "N/A" ? <td className='banned'>N/A</td> : <td><Checkbox onChange={(e) => this.handleCheckBoxClick(e, day.date, "breakfast")} checked={this.state[day.date][0]==='1' ? true : false} disabled={this.state.allDisable}/></td>}
                                    {day.lunch == "N/A" ? <td className='banned'>N/A</td> : <td><Checkbox onChange={(e) => this.handleCheckBoxClick(e, day.date, "lunch")} checked={this.state[day.date][1]==='1' ? true : false} disabled={this.state.allDisable}/></td>}
                                    {day.dinner == "N/A" ? <td className='banned'>N/A</td> : <td><Checkbox onChange={(e) => this.handleCheckBoxClick(e, day.date, "dinner")} checked={this.state[day.date][2]==='1' ? true : false} disabled={this.state.allDisable}/></td>}
                                    {day.lodge == "N/A" ? <td className='banned'>N/A</td> : <td><Checkbox onChange={(e) => this.handleCheckBoxClick(e, day.date, "lodge")} checked={this.state[day.date][3]==='1' ? true : false} disabled={this.state.allDisable}/></td>}
                               </tr>
                    })}                      
                </table>
            </div>
            
        );
    }
    
    checkAllBox = () => {
        days.map((d) => {
            let tempMealStr = ""
            if (d.breakfast === "X"){
                tempMealStr += "1"
            }
            else
            {
                tempMealStr += "0"
            }

            if (d.lunch === "X"){
                tempMealStr += "1"
            }
            else
            {
                tempMealStr += "0"
            }

            if (d.dinner === "X"){
                tempMealStr += "1"
            }
            else
            {
                tempMealStr += "0"
            }

            if (d.lodge === "X"){
                tempMealStr += "1"
            }
            else
            {
                tempMealStr += "0"
            }

            this.setState((preState) => ({
                ...preState,
                [d.date]: tempMealStr,
            }),()=>{console.log(this.state)})
        })
    }

    uncheckAllBox = () => {
        days.map((d) => {
            this.setState((preState) => ({
                ...preState,
                [d.date]: "0000",
            }),()=>{console.log(this.state)})
        })
    }

    disableCheckBox = () => {
        this.setState((preState) => ({
            ...preState,
            allDisable: true,
        }))
    }

    enableCheckBox = () => {
        this.setState((preState) => ({
            ...preState,
            allDisable: false,
        }))
    }

    handleCheckBoxClick = (e, date, meal) => {
        console.log("in the on change")
        var index = 0;
        switch (meal) {
            case 'breakfast': index = 0;
            break;
         
            case 'lunch': index = 1;
            break;
         
            case 'dinner': index = 2;
            break;
         
            case 'lodge': index = 3;
            break;
         }
         var tempMealStr = this.state[date];
         
         if (e.target.checked === true) {
            tempMealStr = this.replaceAt(tempMealStr, index, "1");
         }
         else{
            tempMealStr = this.replaceAt(tempMealStr, index, "0");
         }

        this.setState((preState) => ({
            ...preState,
            [date]: tempMealStr,
        }), ()=>{console.log(this.state)})
    }

    initializeDays = (days) =>{
        var stateObj = {}
        days.map((day) => {
            stateObj = {
                ...stateObj,
                [day.date]: "0000",
            }
        })
        console.log(stateObj)
        return stateObj;
    }

    replaceAt = (tempMealStr, index, replacement) => {
        return tempMealStr.substring(0, index) + replacement + tempMealStr.substring(index + replacement.length);
    }
}

export default MealCalender;
