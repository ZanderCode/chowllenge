import React, { Component } from 'react';
import file from './food_groups/meat.txt'
import './Slot.css';

class Slot extends Component{

    constructor(props){
        super(props)
        this.state = {titles:props.titles,contents:props.data,data:"loading..."}
        console.log(this.state)
    }


    gatherData = () => {
        let value = this.state.meat;
        this.setState({data:this.state.contents.beanpealentil})
    }

    render = () => {

        const dataStyle = {
            "backgroundColor":"gray",
            "color":"white",
            "padding":10}
        const buttonStyle = {
            "display": "inline-block",
            "padding":10,
            "backgroundColor":"lightgray",
            "width" : 200,
            "textAlign" : "center",
            "marginTop" : 20,
            "marginLeft" : 10
        }

        return (
            <div className="Slot">
                <h1>Gather Ingredients</h1>
                <div style={dataStyle}>{this.state.data}</div>
                <div style={buttonStyle} onClick={this.gatherData}>Roll</div>
                <div style={buttonStyle} onClick={()=>{this.setState({data:""})}}>Reset</div>
            </div>
        );
    }
}

export default Slot;
