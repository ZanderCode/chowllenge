import React from "react";
import {useAuth} from "../contexts/AuthContext"

export default function Login(){
    const {signIn,logOut,currentUser} = useAuth()
    return (
        <div>
            <div onClick={signIn}>Log in</div>
            <div onClick={logOut}>Log out</div>
            <div>{currentUser && currentUser.email}</div>
        </div>
    );
}