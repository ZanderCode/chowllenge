import React, { Component } from "react";
import {useAuth} from "../contexts/AuthContext"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

import "../css/login.css"
import GOOGLE from "../assets/Asset 7.svg"
import RIT from "../assets/Asset 8.svg"
import TITLE from "../assets/Asset 9.svg"
import LOGIN from "../assets/Asset 10.svg"
import '../fonts/Futura Heavy font.ttf'; 
import '../fonts/futura medium bt.ttf'; 
import { color } from "@mui/system";

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
                <div className="main-content">
                    
                    <img className="tit" src={TITLE}/>
                    <h1 className="header">Log In</h1>


                    <div className="text-fields">
                        <TextField className="email" label="Enter your email" variant="filled" />
                        <div style={{"height":"20px"}}></div>
                        <TextField className="pass" label="Enter your password" variant="filled" />  
                    </div>
                    
                    <p className="forgot">Forgot Password?</p>
                    <span className="rememberme"><Checkbox color="default" sx={{
                                                                "color": "white",
                                                            }} className="remember" />Remember Me</span>
                    <div className="login-button">
                        <Button variant="contained"  onClick={()=>this.login(this.props.a,this.props.p)}> 
                        LOG IN
                        </Button>
                        <div className="alt-options">
                            <p>- OR -</p>
                            <p>Sign in with</p>
                        </div>
                        <div className="alt-container">
                            <div className="alt-signin"><img src={RIT}/></div>
                            <div className="alt-signin"></div>
                            <div className="alt-signin"><img src={GOOGLE}/></div>
                        </div>
                        <div className="alt-options">
                            <p>Don't have an account? <span className="signup">Sign Up</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;