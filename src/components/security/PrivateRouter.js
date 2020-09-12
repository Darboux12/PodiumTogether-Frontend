import React, { useEffect, useState} from 'react';
import { Route, Redirect } from 'react-router-dom'
import jwtDecode from 'jwt-decode';
import Dashboard from "../Dashboard";

export default function PrivateRoute(props){

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {

        let token = localStorage.getItem('authorizationToken');

        if(token){

            let tokenExpiration = jwtDecode(token).exp;

            let dateNow = new Date();

            if(tokenExpiration < dateNow.getTime()/1000){
                setIsAuthenticated(false)
            }

            else{
                setIsAuthenticated(true)
            }

        } else {
            setIsAuthenticated(false)
        }

    });

    if(isAuthenticated === false){
        return <h1>Authentication failed</h1>
    }

    return (

        <Route path={props.path} exact component={props.component}/>



    );
};

