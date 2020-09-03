import React, {Component, useState} from "react";
import Container from "react-bootstrap/Container";
import userProfileImage from "../../images/person.jpg";

import "../../styles/user-profile/UserProfilePage.css"
import TabsBar from "./TabsBar";
import ProfileInformation from "./ProfileInformation";
import ProfileEvents from "./ProfileEvents";

import ProfileWarnings from "./ProfileWarnings";
import ProfileMarkedPlaces from "./ProfileMarkedPlaces";

export default function UserProfilePage(){

    const [profile,setProfile] = useState(true);
    const [events,setEvents] = useState(false);
    const [places,setPlaces] = useState(false);
    const [warnings,setWarnings] = useState(false);

    const handleTabChange = (e) => {

        if(e=== "profile") {

            setProfile(true);
            setEvents(false);
            setPlaces(false)
            setWarnings(false)

        }

        if(e === "events") {

            setProfile(false);
            setEvents(true);
            setPlaces(false)
            setWarnings(false)

        }

        if(e === "places") {

            setProfile(false);
            setEvents(false);
            setPlaces(true)
            setWarnings(false)

        }

        if(e === "warnings") {

            setProfile(false);
            setEvents(false);
            setPlaces(false)
            setWarnings(true)

        }

    }

    if(profile === true){

            return (
                <Container>
                    <TabsBar
                        onTabChange = {(e) => handleTabChange(e)}
                    />
                    <ProfileInformation/>
                </Container>
            );

        }

    if(events === true){

            return (
                <Container>
                    <TabsBar
                        onTabChange = {(e) => handleTabChange(e)}
                    />
                    <ProfileEvents/>
                </Container>
            );

        }

    if(places === true){

            return (
                <Container>
                    <TabsBar
                        onTabChange = {(e) => handleTabChange(e)}
                    />
                    <ProfileMarkedPlaces/>
                </Container>
            );

        }

    if(warnings === true){

            return (
                <Container>
                    <TabsBar
                        onTabChange = {(e) => handleTabChange(e)}
                    />
                    <ProfileWarnings/>
                </Container>
            );

        }

}

