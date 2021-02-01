import React, { useEffect, useState} from 'react';
import { Route, Redirect } from 'react-router-dom'
import jwtDecode from 'jwt-decode';

import AuthenticationRefusedModal from "./AuthenticationRefusedModal";
import MainPage from "../main/MainPage";
import podiumStorage from "../config/Storage";
import AdminRefusedModal from "./AdminRefusedModal";

export default function AdminRoute(props){

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {

        let token = podiumStorage.get('authorizationToken');

        if(token){

            let tokenExpiration = jwtDecode(token).exp;

            let dateNow = new Date();

            if(tokenExpiration < dateNow.getTime()/1000){
                setIsAuthenticated(false)
            }

            else{

                let roles = jwtDecode(token).auth;

                roles.map(role => {

                    if(role.authority === "admin")
                        setIsAdmin(true);
                });

                setIsAuthenticated(true)
            }

        } else {
            setIsAuthenticated(false)
        }

    });

    if(!(isAuthenticated && isAdmin)){
        return (

            <div>

                <MainPage/>

                <AdminRefusedModal/>

            </div>



        );
    }

    return (

        <Route path={props.path} exact component={props.component}/>



    );
};

