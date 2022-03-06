import React from "react";
import {useAuth} from "../contexts/AuthContext"

export default function Login(){
    const {signIn,currentUser} = useAuth()
    return (
        <div>
            <div onClick={signIn}>Login</div>
            <div>{currentUser && currentUser.email}</div>
        </div>
    );
}