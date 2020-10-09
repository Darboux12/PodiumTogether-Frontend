import React, {Component, useEffect, useState} from "react";

import "../../../styles/navbar/Navbar.css"

import NavBarUserNotLogged from "./NavBarUserNotLogged";
import NavBarUserLogged from "./NavBarUserLogged";
import NavBarUserAdmin from "./NavBarUserAdmin";

function NavBar(){

    const [isUserLogged, setIsUserLogged] = useState(false);
    const [isUserAdmin, setIsUSerAdmin] = useState(false);
    const [profileImage,setProfileImage] = useState();

    const username = localStorage.getItem('Username');

    useEffect(() => {

        let userLoggedSession = localStorage.getItem('userLogged');

        if(userLoggedSession)
            setIsUserLogged(true);

        if(isUserLogged){

            const PostUrl = 'http://localhost:8080/user/find/' + username;

            fetch(PostUrl)

                .then((res) => {

                    if (res.status === 409){
                        console.log("Server error 409");
                    }

                    else return res.json()
                })

                .then(res => {

                    setProfileImage(res.profileImage);

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

    if(!isUserLogged)
        return <NavBarUserNotLogged username = {username}/>;
    if(isUserLogged && !isUserAdmin)
        return <NavBarUserLogged
            username = {username}
            profileImage={profileImage}
            logOut = {() => logOut()}/>;
    if(isUserAdmin)
        return <NavBarUserAdmin
            username = {username}
            profileImage={profileImage}
            logOut = {() => logOut()}/>;

}

export default NavBar;