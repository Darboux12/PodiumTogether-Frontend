import React, {Component} from "react";

import "../../styles/display-events/Events.css"

import footballEvent from "../../images/event-football.jpg"
import Badge from "react-bootstrap/Badge";
import {faMapMarkedAlt, faRunning, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-regular-svg-icons";
import Button from "react-bootstrap/Button";

export default function Event(props){

        return(

            <div className={"Event"}>

                <img className={"eventImage"} src={footballEvent} alt={"footballEvent"}/>

                <div className={"eventInformation d-flex flex-column"}>

                    <h className={"eventTitle"}>{props.title}</h>
                    <h className={"eventDiscipline"}>{props.discipline}</h>

                    <div className={"eventLocalization"}>
                        <FontAwesomeIcon className={"eventLocalizationIcon eventLocalizationItem"} icon={faMapMarkedAlt}/>
                        <h className={"eventLocalizationItem"}>{props.city}</h>
                        <h className={"eventLocalizationItem"}>{props.postalCode}</h>
                        <h className={"eventLocalizationItem"}>{props.street}</h>
                        <h className={"eventLocalizationItem"}>{props.number}</h>
                    </div>

                    <div className={"eventDate"}>
                        <FontAwesomeIcon className={"eventDateIcon eventDateItem"} icon={faCalendarAlt}/>
                        <h className={"eventDateItem"}>{props.date}</h>
                    </div>

                    <div className={"eventRequiredPeopleNumber"}>
                        <FontAwesomeIcon className={"eventPeopleIcon eventRequiredPeopleItem"} icon={faUsers}/>
                        <h className={"eventRequiredPeopleItem"}>{props.bookedPeople}</h>
                        <h className={"eventRequiredPeopleItem"}>from</h>
                        <h className={"eventRequiredPeopleItem"}>{props.numberPeople}</h>
                    </div>

                </div>

                <h2
                    className={"eventBadgeHeader"}>
                    <span className="badge badge-primary eventBadge p-2">{props.discipline}</span>
                </h2>


                <Button className={"eventDetailsButton"} variant={"primary"}>

                    See event details

                </Button>

            </div>

        );

}

