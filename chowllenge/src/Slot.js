import React, { Component } from 'react';
import './Slot.css';
import Slider from './Slider.js';

class Slot extends Component{

    constructor(props){
        super(props)
        this.state = {titles:props.titles,contents:props.data,data:"loading..."}
    }


    gatherData = () => {
        let max = this.state.titles.length;
        let list = Math.floor(Math.random() * (max));
        this.setState({data:this.state.contents[this.state.titles[list]]})
    }

    render = () => {

        const dataStyle = {
            "backgroundColor":"gray",
            "color":"white",
            "padding":10,
        }
        const buttonStyle = {
            "display": "inline-block",
            "padding":10,
            "backgroundColor":"lightgray",
            "width" : "80%",
            "textAlign" : "center",
            "marginTop" : 20,
            "marginLeft" : 10
        }

        return (
            <div className="Slot">
                <h1>Gather Ingredients</h1>
                <div style={dataStyle}>{this.state.data}</div>
                <Slider name={"Item 1"}/>
                <Slider name={"Item 2"}/>
                <Slider name={"Item 3"}/>
                <Slider name={"Item 4"}/>
                <div style={buttonStyle} onClick={this.gatherData}>Roll</div>
                <div style={buttonStyle} onClick={()=>{this.setState({data:""})}}>Reset</div>
            </div>
        );
    }
}

export default Slot;
