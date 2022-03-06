import React, { Component } from "react";
import {useAuth} from "../contexts/AuthContext"
import { Navigate  } from "react-router-dom";

export default function Accepted(){
    
    const {currentUser} = useAuth();

    if (!currentUser){
        return <Navigate to="/"/>;
    }

    return (<div>Accepted</div>);
}