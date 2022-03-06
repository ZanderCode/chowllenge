import React, { useContext, useEffect, useState } from "react";
import { auth, provider, app,db } from "../fb/firebase"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase, ref, child,push } from "firebase/database";
import { collection, addDoc } from "firebase/firestore"; 

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

    async function sendInfo(ings){
        if (!currentUser) return;

        try {
            const docRef = await addDoc(collection(db, currentUser.email), {
              ingredients: ings,
              comments: "",
              image: ""
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          
    }
    function updateComments(id,comments){
        if (!currentUser) return;

    }
    function updateImage(id,image){
        if (!currentUser) return;

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
        logOut,
        sendInfo,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}