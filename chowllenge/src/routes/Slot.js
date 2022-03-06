import React, { Component } from "react";
import {useAuth} from "../contexts/AuthContext"
import { useNavigate  } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore"; 


class Slot extends Component{

    constructor(props){
        super(props)
    }

    async save(db,auth){

        let ings = ["a","b","c"]

        try {
            const docRef = await addDoc(collection(db, auth.currentUser.email), {
              ingredients: ings,
              comments: "",
              image: ""
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    render(){
        return (
            <div>
                <div>Slot</div>
                <div onClick={()=>this.save(this.props.d,this.props.a)}>Submit </div>
            </div>        
        );
    }

}

export default Slot;