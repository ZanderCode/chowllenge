import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import file from './food_groups/meat.txt'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {data:"loading data..."}
  }

  gatherData = async () => {
    fetch(file)
  .then(response => response.text())
  .then(data => {
  	this.setState({data:data})
  });
  }

  render = () => {
    return (
      <div className="App">
        <div style={{"backgroundColor":"blue","color":"white"}}>{this.state.data}</div>
        <button onClick={this.gatherData}>Get data</button>
      </div>
    );
  }

}

export default App;
