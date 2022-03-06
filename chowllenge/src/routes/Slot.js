import React, { Component } from "react";
import {useAuth} from "../contexts/AuthContext"

export default function Slot(){
    const {currentUser} = useAuth()
    return (<div>{currentUser.email}</div>);
}