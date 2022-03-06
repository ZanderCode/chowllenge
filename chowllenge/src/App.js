import React, { Component } from 'react';
import Slot from "./Slot"
import Lottie from "lottie-react";
import anim from "./anims/anim.json";

import {getFileName} from 'expo_file_name'
import file1 from "./food_groups/meat.txt";
import file2 from "./food_groups/beanpealentil.txt";
import file3 from "./food_groups/soy.txt";

class App extends Component{

  constructor(props){
    super(props)
    this.state = {loading:true,contents:{}}
  }

  componentDidMount() {
    this.readFiles();
  }

  // Reads all the files which contain food groups
  readFiles(){

    const dest = "./food_groups/";
    const files = [file1,file2,file3];

    let content = {
      // files wil be populated here
    }

    let names = [
      // File names will appear here
    ]

    for(let i = 0; i < files.length; i ++){
      fetch(files[i])
      .then(response => response.text())
      .then(data => {
        let name = getFileName(files[i]).split(".")[0]
        names.push(name)
        content[name] = data;
      });
    }
    this.setState({contents:content,loading:false,titles:names})
  }

  render = () => {
    if (this.state.loading){
      return (<Lottie animationData={anim} style={{"width":200}}/>);
    }else{
      return (
        <Slot titles={this.state.titles} data={this.state.contents}/>
      );
    }
  }
}

export default App;
