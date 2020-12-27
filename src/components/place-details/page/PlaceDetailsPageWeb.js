import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

import Container from "react-bootstrap/Container";
import React, {useEffect, useRef, useState} from "react";
import PlaceDetailsTitleRow from "../rows-web/PlaceDetailsTitleRow";
import PlaceDetailsMapRow from "../rows-web/PlaceDetailsMapRow";

import PlaceDetailsStarRatingRow from "../rows-web/PlaceDetailsStarRatingRow";
import PlaceDetailsCommentRow from "../rows-web/PlaceDetailsCommentRow";
import PlaceDetailsTagPlaceRow from "../rows-web/PlaceDetailsTagPlaceRow";
import serverAddress from "../../config/Constants";
import {findPlaceByIdFetch} from "../../fetch/Fetch";
import PlaceDetailsTopRow from "../rows-web/PlaceDetailsTopRow";
import Button from "react-bootstrap/Button";

import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import PlaceDetailsOpeningHoursRow from "../rows-web/PlaceDetailsOpeningHoursRow";
import PlaceDetailsInformationRow from "../rows-web/PlaceDetailsInformationRow";


export default function PlaceDetailsPageWeb(props) {

    const id = props.match.params.id;

    const [placeItems,setPlaceItems] = useState();
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(() => {

        findPlaceByIdFetch(id)

            .then(res => res.json())

            .then(res => {

                setPlaceItems(res);
                setIsLoaded(true);
            });

    },[]);

    if(isLoaded)

    return(

        <Container  className={""}>

           <PlaceDetailsTopRow name = {placeItems.name}/>

            <Row>

                <Col md={8} className={"PlaceDetailsMainInformationContainer mr-4"}>

                    <PlaceDetailsTitleRow
                        images = {placeItems.images}
                        discipline = {placeItems.discipline}
                    />

                    <PlaceDetailsMapRow/>

                    <PlaceDetailsOpeningHoursRow
                        days = {placeItems.businessDays}
                    />

                    <PlaceDetailsInformationRow
                        cost = {placeItems.cost}
                        usageTime = {placeItems.usageTime}
                        minAge = {placeItems.minAge}
                        maxAge = {placeItems.maxAge}
                        city = {placeItems.localization.city}
                        street = {placeItems.localization.street}
                        buildingNumber = {placeItems.localization.buildingNumber}
                        postalCode = {placeItems.localization.postalCode}

                    />

                    <PlaceDetailsStarRatingRow/>

                    <PlaceDetailsCommentRow/>




                </Col>


                <Col className={"PlaceDetailsApplyAnotherEventsContainer"}>

                    <PlaceDetailsTagPlaceRow/>
                </Col>

            </Row>



        </Container>
    );

    else
        return <div/>

}
