import React, { Component } from 'react';

class Slider extends Component{

    constructor(props){
        super(props)
        this.state = {name:props.name}
    }

    render = () => {

        const sliderStyle = {
            "textAlign" : "center",
            "width" : "50px",
            "height" : "50px",
            "backgroundColor": "gray",
            "margin" : "10px"
        }

        return (<div style={sliderStyle}>{this.state.name}</div>);
    }
    
}

export default Slider;

