import football from "../../../images/desk.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkedAlt, faUsers} from "@fortawesome/free-solid-svg-icons";
import {faCalendarAlt} from "@fortawesome/free-regular-svg-icons";
import Button from "react-bootstrap/Button";
import React from "react";

import "../../../styles/display-places/page/Place.css"
import Container from "react-bootstrap/Container";

export default function Place(props) {

    return(

        <Container className={"PlaceContainer d-flex align-items-center p-3"}>

            <img className={"placeImage"} src={`data:image/jpeg;base64,${props.image.content}`} alt={"Place image"}/>

            <div className={"placeInformation d-flex flex-column"}>

                <h className={"placeTitle"}>{props.name}</h>

                <div className={"placeLocalization"}>
                    <FontAwesomeIcon className={"placeLocalizationIcon placeLocalizationItem"} icon={faMapMarkedAlt}/>
                    <h className={"placeLocalizationItem localization"}>{props.city}</h>
                    <h className={"placeLocalizationItem localization"}>{props.postalCode}</h>
                    <h className={"placeLocalizationItem localization"}>{props.street}</h>
                    <h className={"placeLocalizationItem localization"}>{props.number}</h>
                </div>

                <div className={"placeDate"}>
                    <FontAwesomeIcon className={"placeDateIcon placeDateItem"} icon={faCalendarAlt}/>
                    <h className={"placeDateItem"}>{props.date}</h>
                </div>

                <div className={"placeRequiredPeopleNumber"}>
                    <FontAwesomeIcon className={"placePeopleIcon placeRequiredPeopleItem"} icon={faUsers}/>
                    <h className={"placeRequiredPeopleItem"}>{props.bookedPeople}</h>
                    <h className={"placeRequiredPeopleItem"}>from</h>
                    <h className={"placeRequiredPeopleItem"}>{props.numberPeople}</h>
                </div>

            </div>

            <h2
                className={"placeBadgeHeader"}>
                <span className="badge badge-primary placeBadge p-2">{props.discipline}</span>
            </h2>


            <Button className={"placeDetailsButton"} variant={"primary"}>

                See place details

            </Button>

        </Container>

    );

}
