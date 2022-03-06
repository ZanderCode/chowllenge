import React, { Component } from "react";
import {useAuth} from "../contexts/AuthContext"
import { Navigate } from "react-router-dom";

export default function Slot(){
    const {sendInfo,currentUser} = useAuth()

    if (!currentUser){
        return <Navigate to="/"/>
    }

    return (
        <div>
            <div onClick={sendInfo}>Upload</div>
        </div>
    );
}