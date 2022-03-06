import React, { Component } from "react";
import {useAuth} from "../contexts/AuthContext"
import { Navigate  } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore"; 

import "../css/slot.css"
import BRICK from "../assets/Asset 15.svg"
import CHARACTER from "../assets/Asset 14.svg"

import Lottie from "lottie-react";

import SPINNER from "../anims/spinner.json";
import LEVER from "../anims/lever.json";
import WILD from "../assets/Asset 19.svg";

import {getFileName} from 'expo_file_name'
import solid1 from "../food_groups/meat.txt";
import solid2 from "../food_groups/beanpealentil.txt";
import solid3 from "../food_groups/soy.txt";
import solid4 from "../food_groups/cannedfish.txt";
import solid5 from "../food_groups/cheese.txt";
import solid6 from "../food_groups/eggs.txt";
import solid7 from "../food_groups/finfish.txt";
import solid8 from "../food_groups/fruits.txt";
import solid9 from "../food_groups/grains.txt";
import liquid3 from "../food_groups/milk.txt";
import solid10 from "../food_groups/milkdesserts.txt";
import solid11 from "../food_groups/nutsseeds.txt";
import solid12 from "../food_groups/shellfish.txt";
import liquid2 from "../food_groups/soymilk.txt";
import solid13 from "../food_groups/vegitables.txt";
import wildcard from "../food_groups/wildcard.txt";
import liquid1 from "../food_groups/yogurt.txt";

class Slot extends Component{

    constructor(props){
        super(props)
        this.state = {
            solidOne:"Roll",
            solidTwo:"Roll",
            liquid:"Roll",
            wildCard:"Roll",
            saved : false
        }
    }

    async readFiles(){

        const solidFiles = [
            solid1,solid2,
            solid3,solid4,
            solid5,solid6,
            solid7,solid8,
            solid9,solid10,
            solid11,solid12,
            solid13];
        
        const liquidFiles = [liquid1,
            liquid2,liquid3];


        var solidResult = await this.read(solidFiles)
        var liquidResult = await this.read(liquidFiles)
        var wildResult = await this.read([wildcard])
        
        // choose random key
        var len = Object.keys(solidResult).length
        var rnd = Object.keys(solidResult)[this.getRandomInt(len)];
        var list = solidResult[rnd];
        var rnd2 = this.getRandomInt(list.length);
        var first = solidResult[rnd][rnd2];

        var secondlen = Object.keys(solidResult).length
        var secondrnd = Object.keys(solidResult)[this.getRandomInt(secondlen)];
        var secondlist = solidResult[secondrnd];
        var secondrnd2 = this.getRandomInt(secondlist.length);
        var second = solidResult[secondrnd][secondrnd2];

        var thirdlen = Object.keys(liquidResult).length
        var thirdrnd = Object.keys(liquidResult)[this.getRandomInt(thirdlen)];
        var thirdlist = liquidResult[thirdrnd];
        var thirdrnd2 = this.getRandomInt(thirdlist.length);
        var third = liquidResult[thirdrnd][thirdrnd2];

        var fourthlen = Object.keys(wildResult).length
        var fourthrnd = Object.keys(wildResult)[this.getRandomInt(fourthlen)];
        var fourthlist = wildResult[fourthrnd];
        var fourthrnd2 = this.getRandomInt(fourthlist.length);
        var fourth = wildResult[fourthrnd][fourthrnd2];

        console.log(first)
        console.log(second)
        console.log(third)
        console.log(fourth)

        this.setState({
            solidOne:first,
            solidTwo:second,
            liquid:third,
            wildCard:fourth,
        })

        
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    async read(files){
        let content = {}
        for(let i = 0; i < files.length; i ++){
            await fetch(files[i])
            .then(response => response.text())
            .then(data => {
                let name = getFileName(files[i]).split(".")[0]
                content[name] = data.trim().replace(/(\r\n|\n|\r)/gm, "").split(",");
            });
        }
        return content
    }

    async save(db,auth,ingredients){

        let ings = [...ingredients]

        try {
            const docRef = await addDoc(collection(db, auth.currentUser.email), {
              ingredients: ings,
              comments: "",
              image: ""
            });
            this.setState({
                saved : true
            })
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    render(){

        if (!this.props.a.currentUser){
            return (<Navigate to="/"/>);
        }
        if (this.state.saved){
            return (<Navigate to="/accepted"/>);
        }

        const rollStyle = {
            "padding" : "30px",
            "backgroundColor" : "gray",
            "color" : "white",
            "width" : "50px",
            "textAlign" : "center"
        }

        const saveStyle = {
            "padding" : "30px",
            "backgroundColor" : "green",
            "color" : "white",
            "width" : "50px",
            "marginTop" : "10px",
            "textAlign" : "center"
        }
        return (
            <div>
                <div className="main-body">
                    <div className="container">
                        <div className="brick">
                            <img src={BRICK}/>
                            <div className="spinners">
                                <div className="spinner"><Lottie className="lev" animationData={SPINNER} /></div>
                                <div className="spinner"><Lottie className="lev" animationData={SPINNER} /></div>
                                <div className="spinner"><Lottie className="lev" animationData={SPINNER} /></div>
                                <div className="spinner"><Lottie className="lev" animationData={SPINNER} /></div>
                            </div>
                            <div className="sub" style={saveStyle} onClick={()=>this.save(this.props.d,this.props.a,[this.state.solidOne,this.state.solidTwo,this.state.liquid,this.state.wildCard])}>Submit </div>
                        </div>
                        <div className="lever"><Lottie className="lev" animationData={LEVER} /></div>
                    </div>
                </div>
                <div>{this.state.solidOne}</div>
                <div>{this.state.solidTwo}</div>
                <div>{this.state.liquid}</div>
                <div>{this.state.wildCard}</div>
                
            </div>        
        );
    }

}

export default Slot;