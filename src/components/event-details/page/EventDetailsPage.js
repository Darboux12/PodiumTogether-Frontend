import React from "react";

import "../../../styles/event-details/page/EventDetailsPage.css"
import Container from "react-bootstrap/Container";
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