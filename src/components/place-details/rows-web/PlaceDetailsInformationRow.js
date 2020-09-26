import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import {faChild, faMapMarkedAlt, faMoneyBill, faUsers, faVenusMars} from "@fortawesome/free-solid-svg-icons/index";
import Row from "react-bootstrap/esm/Row";
import React from "react";
import {faCalendarAlt} from "@fortawesome/free-regular-svg-icons/index";
import Col from "react-bootstrap/esm/Col";

import "../../../styles/place-details/rows-web/PlaceDetailsInformationIconsRow.css"
import {faWallet} from "@fortawesome/free-solid-svg-icons";

export default function PlaceDetailsInformationIconsRow() {

    return(

        <Row className={"IconRowsContainer"}>

            <Col>


                <Row className={"InformationIconsRow"}>

                    <Col className={"d-flex align-items-center justify-content-between"}>

                            <div className={"DetailsIconContainer"}>
                                <FontAwesomeIcon className={"PlaceDetailsIcon"} icon={faCalendarAlt}/>
                            </div>

                            <h className={"PlaceDetailsIconInformationHeader"}>Opening hours</h>

                            <h className={"PlaceDetailsIconInformation"}>8:00 - 12:00</h>

                    </Col>

                </Row>

                <Row className={"InformationIconsRow"}>

                    <Col className={"d-flex align-items-center justify-content-between"}>

                        <div className={"DetailsIconContainer"}>
                            <FontAwesomeIcon className={"PlaceDetailsIcon"} icon={faWallet}/>
                        </div>

                        <h className={"PlaceDetailsIconInformationHeader"}>Costs</h>

                        <h className={"PlaceDetailsIconInformation"}>12 PN per 1 hour</h>

                    </Col>

                </Row>

                <Row className={"InformationIconsRow"}>

                    <Col className={"d-flex align-items-center justify-content-between"}>

                        <div className={"DetailsIconContainer"}>
                            <FontAwesomeIcon className={"PlaceDetailsIcon"} icon={faChild}/>
                        </div>

                        <h className={"PlaceDetailsIconInformationHeader"}>Minimal age</h>

                        <h className={"PlaceDetailsIconInformation"}>15 years old</h>

                    </Col>

                </Row>






            </Col>

        </Row>

    )

}