import React, { Component } from "react";
import {useAuth} from "../contexts/AuthContext"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";
import Button from '@mui/material/Button';

import "../css/login.css"

// export default function Login(){
//     const {signIn,logOut,currentUser} = useAuth()
//     return (
//         <div>
//             <div onClick={signIn}>Log in</div>
//             <div onClick={logOut}>Log out</div>
//             <div>{currentUser && currentUser.email}</div>
//         </div>
//     );
// }


class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            slotpage: false
        }
    }

    login(auth,prov){
        signInWithPopup(auth,prov)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            this.setState({
                slotpage:true
            })
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    logOut(auth){
        signOut(auth).then(()=>{
            this.setState({})
        })
    }

    render(){
        if (this.state.slotpage){
            return (<Navigate to="/slot"/>);       
        }

        return(
            <div>
                <div className="login-button">
                    <Button variant="contained" onClick={()=>this.login(this.props.a,this.props.p)}> login </Button>
                    <p>w/ google</p>
                </div>
            </div>
        );
    }
}

export default Login;