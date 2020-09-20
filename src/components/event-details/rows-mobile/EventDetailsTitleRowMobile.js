import eventImage from "../../../images/event-football.jpg";
import Row from "react-bootstrap/esm/Row";
import React from "react";

import "../../../styles/event-details/rows-mobile/EventDetailsTitleRowMobile.css"

export default function EventDetailsTitleRowMobile() {

    return(

        <Row className={"eventDetailsImageTitleRowMobile justify-content-center"}>

            <div className={"d-flex flex-column justify-content-center"}>
                <h className={"eventDetailsTitleMobile"}>Common play on Orlik</h>

                <div className={"d-flex flex-row justify-content-center align-items-center"}>
                    <h className={"eventDetailsAuthorMobile"}>Posted by: Janek126p</h>
                    <a href={"/user/profile"} className={"eventDetailsAuthorLinkMobile"}>About Author</a>
                </div>

            </div>

            <img className={"eventDetailsImageMobile"} src={eventImage} alt={"Event Image"}/>



        </Row>




    );

}