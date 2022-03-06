import React, { Component } from 'react';
import Slot from "./Slot"
import Lottie from "lottie-react";
import anim from "./anims/anim.json";

import {getFileName} from 'expo_file_name'
import file1 from "./food_groups/meat.txt";
import file2 from "./food_groups/beanpealentil.txt";
import file3 from "./food_groups/soy.txt";
import file4 from "./food_groups/cannedfish.txt";
import file5 from "./food_groups/cheese.txt";
import file6 from "./food_groups/eggs.txt";
import file7 from "./food_groups/finfish.txt";
import file8 from "./food_groups/fruits.txt";
import file9 from "./food_groups/grains.txt";
import file10 from "./food_groups/milk.txt";
import file11 from "./food_groups/milkdesserts.txt";
import file12 from "./food_groups/nutsseeds.txt";
import file13 from "./food_groups/shellfish.txt";
import file14 from "./food_groups/soymilk.txt";
import file15 from "./food_groups/vegitables.txt";
import file16 from "./food_groups/wildcard.txt";
import file17 from "./food_groups/yogurt.txt";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { provider } from "./fb/firebase"

class App extends Component{

  constructor(props){
    super(props)
    this.state = {loading:true,contents:{}}
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.readFiles();
  }

  // Reads all the files which contain food groups
  readFiles(){

    const dest = "./food_groups/";
    const files = [
      file1,file2,
      file3,file4,
      file5,file6,
      file7,file8,
      file9,file10,
      file11,file12,
      file13,file14,
      file15,file16,
      file17];

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
