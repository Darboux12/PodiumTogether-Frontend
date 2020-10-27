import React, {Component, useEffect, useState} from "react";

import "../../../styles/navbar/Navbar.css"

import NavBarUserNotLogged from "./NavBarUserNotLogged";
import NavBarUserLogged from "./NavBarUserLogged";
import NavBarUserAdmin from "./NavBarUserAdmin";
import serverAddress, {findUserByUsernameEndpoint, findUsernameFromTokenEndpoint} from "../../config/Constants";

function NavBar(){

    const [isUserLogged, setIsUserLogged] = useState(false);
    const [isUserAdmin, setIsUSerAdmin] = useState(false);
    const [profileImage,setProfileImage] = useState();
    const [username,setUsername] = useState("");
    const token = localStorage.getItem("authorizationToken");

    const [loaded,setLoaded] = useState(false);

    useEffect(() => {

        let userLoggedSession = localStorage.getItem('userLogged');

        if(userLoggedSession)
            setIsUserLogged(true);

        if(userLoggedSession){

            const formData = new FormData();
            formData.append("token",token);

            fetch(serverAddress + findUsernameFromTokenEndpoint,
                {
                    method: 'POST',
                    body: formData
                })

                .then((res) => {

                    if (res.status === 409){
                        console.log("Server error 409");}



                    else return res.json();
                })

                .then(res => {

                    setUsername(res.username);

                    fetch(serverAddress + findUserByUsernameEndpoint + res.username)

                        .then((res) => {

                            if (res.status === 409){
                                console.log("Server error 409");
                            }

                            else return res.json()
                        })

                        .then(res => {

                            setProfileImage(res.profileImage);

                            setLoaded(true);

                        })

                        .catch((error) => {
                            console.log(error);
                        });

                })

                .catch((error) => {
                    console.log(error);
                });

        }

    },[]);

    const logOut = () => {

        let userLogged = localStorage.getItem('userLogged');

        if(userLogged){
            localStorage.clear();
            window.location = "/home";
        }


    };



        if (!isUserLogged)
            return <NavBarUserNotLogged username={username}/>;
        if (isUserLogged && !isUserAdmin)
            return <NavBarUserLogged
                username={username}
                profileImage={profileImage}
                logOut={() => logOut()}
            loaded = {loaded}/>;

        if (isUserAdmin)
            return <NavBarUserAdmin
                username={username}
                profileImage={profileImage}
                logOut={() => logOut()}/>;



}

export default NavBar;