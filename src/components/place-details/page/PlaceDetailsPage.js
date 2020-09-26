import React from "react";
import EventDetailsPageWeb from "../../event-details/page/EventDetailsPageWeb";
import EventDetailsPageMobile from "../../event-details/page/EventDetailsPageMobile";
import Container from "react-bootstrap/Container";

import "../../../styles/place-details/page/PlaceDetailsPage.css"
import PlaceDetailsPageWeb from "./PlaceDetailsPageWeb";

export default function PlaceDetailsPage(){

    return(

        <Container fluid>

            <PlaceDetailsPageWeb/>



        </Container>




    )

}