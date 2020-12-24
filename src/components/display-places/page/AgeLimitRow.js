import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkedAlt, faUsers} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../../../styles/display-places/page/DisplayPlacesPage.css"

export default function AgeLimitRow(props) {

    if(props.minAge !== 0 || props.maxAge !== 99)

    return (

        <div className={"placeRequiredPeopleNumber"}>
            <FontAwesomeIcon className={"placePeopleIcon placeRequiredPeopleItem"} icon={faUsers}/>
            <h className={"placeRequiredPeopleItem"}>From</h>
            <h className={"placeRequiredPeopleItem"}>{props.minAge}</h>
            <h className={"placeRequiredPeopleItem"}>to</h>
            <h className={"placeRequiredPeopleItem"}>{props.maxAge}</h>
            <h className={"placeRequiredPeopleItem"}>years old</h>
        </div>

    );

    else

        return (

            <div className={"placeRequiredPeopleNumber"}>
                <FontAwesomeIcon className={"placePeopleIcon placeRequiredPeopleItem"} icon={faUsers}/>
                <h className={"placeRequiredPeopleItem"}>No age limit</h>
            </div>



        );

}
