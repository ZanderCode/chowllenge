import React, { Component } from "react"

class AcceptedComps extends Component{

    constructor(props){
        super(props)
        this.state = {
            list: this.props.items
        }
        console.log(this.props.items)
    }

    render (){
        return(
            <div>{this.state.list}</div>
        );
    }
}

export default AcceptedComps;