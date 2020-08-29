import React, {Component} from "react";

import "../../styles/user-profile/ProfileInformation.css"

import userProfileImage from "../../images/person.jpg"

class ProfileInformation extends Component{




    render(){

        return(

            <div>

                <div className={"header"}>Profile of Janek126p</div>

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

}

export default ProfileInformation;