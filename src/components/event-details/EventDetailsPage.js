import React from "react";

import "../../styles/event-details/EventDetailsPage.css"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import eventImage from "../../images/event-football.jpg"
import peopleWeb from "../../images/peopleWeb.png"
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import EventDetailsTitleRow from "./EventDetailsTitleRow";
import EventDetailsFreeSlotsRow from "./EventDetailsFreeSlotsRow";
import EventDetailsInformationIconRow from "./EventDetailsInformationIconsRow";


export default function EventDetailsPage() {

    return(

        <Container>

            <Row>

                <Col md={8} className={"eventDetailsMainInformationContainer"}>

                    <h2
                        className={"eventDetailsBadgeHeader"}>
                        <span className="badge badge-primary eventDetailsBadge p-2">Football</span>
                    </h2>

                    <EventDetailsTitleRow/>

                    <EventDetailsFreeSlotsRow/>

                    <EventDetailsInformationIconRow/>

                </Col>

            </Row>

        </Container>







    );







}