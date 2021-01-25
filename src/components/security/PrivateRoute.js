import React, { useEffect, useState} from 'react';
import { Route, Redirect } from 'react-router-dom'
import jwtDecode from 'jwt-decode';

import AuthenticationRefusedModal from "./AuthenticationRefusedModal";
import MainPage from "../main/MainPage";
import podiumStorage from "../config/Storage";

export default function PrivateRoute(props){

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {

        let token = podiumStorage.get('authorizationToken');

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
        return (

            <div>

                <MainPage/>



                <AuthenticationRefusedModal/>


            </div>



    );
    }

    return (

        <Route path={props.path} exact component={props.component}/>



    );
};

