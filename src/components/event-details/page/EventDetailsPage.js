import React from "react";

import "../../../styles/event-details/EventDetailsPage.css"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import eventImage from "../../../images/event-football.jpg"
import peopleWeb from "../../../images/peopleWeb.png"
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import EventDetailsTitleRow from "../rows/EventDetailsTitleRow";
import EventDetailsFreeSlotsRow from "../rows/EventDetailsFreeSlotsRow";
import EventDetailsInformationIconRow from "../rows/EventDetailsInformationIconsRow";
import EventDetailsDescriptionRow from "../rows/EventDetailsDescriptionRow";
import Badge from "react-bootstrap/Badge";
import EventDetailsFileRow from "../rows/EventDetailsFileRow";
import EventDetailsJoinEventRow from "../rows/EventDetailsJoinEventRow";


export default function EventDetailsPage() {

    return(

        <Container fluid className={"EventDetailsMainContainer"}>

            <Row>

                <Col md={7} className={"eventDetailsMainInformationContainer"}>

                    <Badge className={"eventDetailsBadge"} variant="primary">Football</Badge>

                    <EventDetailsTitleRow/>

                    <EventDetailsFreeSlotsRow/>

                    <EventDetailsInformationIconRow/>

                    <EventDetailsDescriptionRow/>

                    <EventDetailsFileRow/>

                </Col>


                <Col className={"EventDetailsApplyAnotherEventsContainer"}>

                    <EventDetailsJoinEventRow/>



                </Col>

            </Row>

        </Container>







    );







}