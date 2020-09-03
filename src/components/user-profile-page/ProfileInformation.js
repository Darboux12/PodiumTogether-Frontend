import React, {Component} from "react";

import "../../styles/user-profile/ProfileInformation.css"

import userProfileImage from "../../images/person.jpg"
import ProfileHeader from "./ProfileHeader";

export default function ProfileInformation(){

        return(

            <div>

                <ProfileHeader text={"Profile of Janek126P"}/>

                <div className={"profileInformation d-flex flex-row"}>

                    <div className={"imageLeft"}>

                        <img className={"profileImage"} src={userProfileImage} alt={"userProfileImage"}/>

                    </div>

                    <div className={"profileHeaders d-flex flex-column justify-content-center"}>

                        <h>Joined: Date</h>
                        <h>Last visit: Time</h>
                        <h>Organized events: Number</h>
                        <h>Tagged places: Number</h>
                        <h>Age: Number</h>
                        <h>Contact: Email / Phone Number</h>

                    </div>

                </div>

            </div>

        );

}

