import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDollarSign, faMapMarkedAlt, faUsers} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../../../styles/display-places/page/DisplayPlacesPage.css"

export default function CostRow(props) {

    if(props.cost > 0 || props.usageTime > 0)

        return (

            <div className={"placeRequiredPeopleNumber"}>
                <FontAwesomeIcon className={"placePeopleIcon placeRequiredPeopleItem"} icon={faDollarSign}/>
                <h className={"placeRequiredPeopleItem"}>{props.cost} PLN</h>
                <h className={"placeRequiredPeopleItem"}>for</h>
                <h className={"placeRequiredPeopleItem"}>{props.usageTime}</h>
                <h className={"placeRequiredPeopleItem"}>hours of usage</h>
            </div>

        );

    else

        return (

            <div className={"placeRequiredPeopleNumber"}>
                <FontAwesomeIcon className={"placePeopleIcon placeRequiredPeopleItem"} icon={faDollarSign}/>
                <h className={"placeRequiredPeopleItem"}>Free entry</h>
            </div>



        );

}
