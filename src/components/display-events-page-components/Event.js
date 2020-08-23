import React, {Component} from "react";

import "../../styles/display-events-styles/Events.css"

import footballEvent from "../../images/event-football.jpg"
import Badge from "react-bootstrap/Badge";
import {faMapMarkedAlt, faRunning, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-regular-svg-icons";
import Button from "react-bootstrap/Button";

class Event extends Component{

    constructor(props) {
        super(props);
    }


    render(){

        return(

            <div className={"Event"}>

                <img className={"eventImage"} src={footballEvent} alt={"footballEvent"}/>

                <div className={"eventInformation d-flex flex-column"}>

                    <h className={"eventTitle"}>{this.props.title}</h>
                    <h className={"eventDiscipline"}>{this.props.discipline}</h>

                    <div className={"eventLocalization"}>
                        <FontAwesomeIcon className={"eventLocalizationIcon eventLocalizationItem"} icon={faMapMarkedAlt}/>
                        <h className={"eventLocalizationItem"}>{this.props.city}</h>
                        <h className={"eventLocalizationItem"}>{this.props.postalCode}</h>
                        <h className={"eventLocalizationItem"}>{this.props.street}</h>
                        <h className={"eventLocalizationItem"}>{this.props.number}</h>
                    </div>

                    <div className={"eventDate"}>
                        <FontAwesomeIcon className={"eventDateIcon eventDateItem"} icon={faCalendarAlt}/>
                        <h className={"eventDateItem"}>{this.props.date}</h>
                    </div>

                    <div className={"eventRequiredPeopleNumber"}>
                        <FontAwesomeIcon className={"eventPeopleIcon eventRequiredPeopleItem"} icon={faUsers}/>
                        <h className={"eventRequiredPeopleItem"}>{this.props.bookedPeople}</h>
                        <h className={"eventRequiredPeopleItem"}>from</h>
                        <h className={"eventRequiredPeopleItem"}>{this.props.numberPeople}</h>
                    </div>

                </div>

                <h2
                    className={"eventBadgeHeader"}>
                    <span className="badge badge-primary eventBadge p-2">{this.props.discipline}</span>
                </h2>


                <Button className={"eventDetailsButton"} variant={"primary"}>

                    See event details



                </Button>






            </div>








        );





    }

}

export default Event;