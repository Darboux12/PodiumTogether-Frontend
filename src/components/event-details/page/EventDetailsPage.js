import React from "react";

import "../../../styles/event-details/page/EventDetailsPage.css"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import eventImage from "../../../images/event-football.jpg"
import peopleWeb from "../../../images/peopleWeb.png"
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import EventDetailsTitleRow from "../rows-web/EventDetailsTitleRow";
import EventDetailsFreeSlotsRow from "../rows-web/EventDetailsFreeSlotsRow";
import EventDetailsInformationIconRow from "../rows-web/EventDetailsInformationIconsRow";
import EventDetailsDescriptionRow from "../rows-web/EventDetailsDescriptionRow";
import Badge from "react-bootstrap/Badge";
import EventDetailsFileRow from "../rows-web/EventDetailsFileRow";
import EventDetailsJoinEventRow from "../rows-web/EventDetailsJoinEventRow";
import EventDetailsPageWeb from "./EventDetailsPageWeb";
import EventDetailsPageMobile from "./EventDetailsPageMobile";


export default function EventDetailsPage() {

    return(

        <Container fluid>

            <EventDetailsPageWeb/>

            <EventDetailsPageMobile/>



        </Container>









    );







}