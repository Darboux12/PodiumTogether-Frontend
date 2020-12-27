import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDollarSign, faMapMarkedAlt, faUsers} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../../../styles/display-places/page/DisplayPlacesPage.css"

export default function CostRow(props) {

    const price = Math.round((props.cost / props.usageTime + Number.EPSILON) * 100) / 100;

    if(props.cost > 0 || props.usageTime > 0)

        return (

            <div className={"placeRequiredPeopleNumber"}>
                <FontAwesomeIcon className={"placePeopleIcon placeRequiredPeopleItem"} icon={faDollarSign}/>
                <h className={"placeRequiredPeopleItem"}>{price} PLN</h>
                <h className={"placeRequiredPeopleItem"}>per</h>
                <h className={"placeRequiredPeopleItem"}>hour of usage</h>
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
