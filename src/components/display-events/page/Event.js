import emptyPlaceImage from "../../../images/emptyPlaceImage.jpg";
import Button from "react-bootstrap/Button";
import React from "react";

import Container from "react-bootstrap/Container";
import LocalizationRow from "../../display-places/page/LocalizationRow";
import "../../../styles/display-events/page/Events.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkedAlt, faUsers} from "@fortawesome/free-solid-svg-icons";
import {faCalendarCheck, faCalendarTimes} from "@fortawesome/free-regular-svg-icons";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import {format} from "date-fns";


export default function EventImproved(props) {

    const image = props.image === undefined ? emptyPlaceImage : `data:image/jpeg;base64,${props.image.content}`;

    return(

        <Container className={"EventContainer d-flex align-items-center p-3"}>

            <img className={"eventImage"} src={image} alt={"Event image"}/>

            <div className={"eventInformation d-flex flex-column"}>

                <h className={"eventTitle"}>{props.title}</h>

                <h className={"eventDiscipline"}>{props.place.discipline}</h>

                <div className={"eventLocalization"}>
                    <FontAwesomeIcon className={"eventLocalizationIcon eventLocalizationItem"} icon={faMapMarkedAlt}/>
                    <a href={"/place/details/" + props.place.id} className={"eventLocalizationItem localization"}>{props.place.name}</a>
                </div>

                <div className={"eventLocalization"}>
                    <FontAwesomeIcon className={"eventLocalizationIcon eventLocalizationItem"} icon={faCalendarCheck}/>
                    <h className={"eventLocalizationItem localization"}>{format(new Date(props.dateFrom), "dd-MM-yyyy hh:mm")}</h>
                </div>

                <div className={"eventLocalization"}>
                    <FontAwesomeIcon className={"eventLocalizationIcon eventLocalizationItem"} icon={faCalendarTimes}/>
                    <h className={"eventLocalizationItem localization"}>{format(new Date(props.dateFrom), "dd-MM-yyyy hh:mm")}</h>
                </div>

                <div className={"eventLocalization"}>
                    <FontAwesomeIcon className={"eventLocalizationIcon eventLocalizationItem"} icon={faUsers}/>
                    <h className={"eventLocalizationItem localization"}>{props.usersJoined.length}</h>
                    <h className={"eventLocalizationItem localization"}>from</h>
                    <h className={"eventLocalizationItem localization"}>{props.peopleNumber}</h>


                </div>



            </div>

            <h2
                className={"eventBadgeHeader"}>
                <span className="badge badge-primary eventBadge p-2">{props.place.discipline}</span>
            </h2>

            <Button href={"/place/details/" + props.id} className={"eventDetailsButton"} variant={"dark"}>

                See place details

            </Button>

        </Container>

    );

}
