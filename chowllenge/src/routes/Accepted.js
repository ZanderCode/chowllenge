import React, { Component } from "react";
import { Navigate  } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import AcceptedComps from "../comps/AcceptedComps"

class Accepted extends Component{
    constructor(props){
        super(props)
        this.state = {
            docs : {"alex" : "lam"}
        }
    }

    async readDatabase(db,auth){
        const querySnapshot = await getDocs(collection(db, auth.currentUser.email));
        
        var alldata = {}
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            alldata[doc.id] = doc.data();
        });

        this.setState({
            docs: alldata
        })
    }

    render(){
        return(
            <div>
                <div onClick={()=>this.readDatabase(this.props.d,this.props.a)}>Accepted</div>
                <div>{Object.keys(this.state.docs).map((item, i) => (
                    <li key={i}>
                        <span>{item} : <AcceptedComps items={this.state.docs[item]["ingredients"]}/></span>
                    </li>
                ))}</div>
            </div>
        );
    }
}

export default Accepted;

