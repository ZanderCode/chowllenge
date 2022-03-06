import React from "react";
import {Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({component : C, ...rest}){

    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <C {...props} /> : <Navigate to="/"/>
            }}
        >
        </Route>
    );
}