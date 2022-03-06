import React, { useContext, useEffect, useState } from "react";
import { auth, provider } from "../fb/firebase"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true);
    
    function signIn(){
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
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

    function logOut(){
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscriber = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscriber;
    }, [])

    const value = {
        currentUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}