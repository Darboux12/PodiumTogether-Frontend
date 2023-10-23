import emptyPlaceImage from "../../../images/emptyPlaceImage.png";
import Button from "react-bootstrap/Button";
import React from "react";
import "../../../styles/display-places/page/Place.css"
import Container from "react-bootstrap/Container";
import LocalizationRow from "./LocalizationRow";
import AgeLimitRow from "./AgeLimitRow";
import OpenDayRow from "./OpenDayRow";
import CostRow from "./CostRow";

export default function Place(props) {

    const image = props.image === undefined ? emptyPlaceImage : `data:image/jpeg;base64,${props.image.content}`;

    return(

        <Container className={"PlaceContainer d-flex align-items-center p-3"}>

            <img className={"placeImage"} src={image} alt={"Place image"}/>

            <div className={"placeInformation d-flex flex-column"}>

                <h className={"placeTitle"}>{props.name}</h>

                <h className={"placeDiscipline"}>{props.discipline}</h>

                <LocalizationRow
                    city = {props.city}
                    postalCode = {props.postalCode}
                    street = {props.street}
                    number = {props.number}
                />

                <AgeLimitRow
                    minAge={props.minAge}
                    maxAge={props.maxAge}
                />

                <OpenDayRow
                    businessDays = {props.businessDays}
                />

                <CostRow
                    usageTime = {props.usageTime}
                    cost = {props.cost}

                />

            </div>

            <h2
                className={"placeBadgeHeader"}>
                <span className="badge badge-primary placeBadge p-2">{props.discipline}</span>
            </h2>


            <Button href={"/place/details/" + props.id} className={"placeDetailsButton"} variant={"dark"}>

                See place details

            </Button>

        </Container>

    );

}
