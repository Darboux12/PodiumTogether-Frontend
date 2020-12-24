import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function LocalizationRow(props) {

    return (

        <div className={"placeLocalization"}>
            <FontAwesomeIcon className={"placeLocalizationIcon placeLocalizationItem"} icon={faMapMarkedAlt}/>
            <h className={"placeLocalizationItem localization"}>{props.city}</h>
            <h className={"placeLocalizationItem localization"}>{props.postalCode}</h>
            <h className={"placeLocalizationItem localization"}>{props.street}</h>
            <h className={"placeLocalizationItem localization"}>{props.number}</h>
        </div>

    )

}
