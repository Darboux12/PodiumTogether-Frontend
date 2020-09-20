import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import {faChild, faMapMarkedAlt, faMoneyBill, faUsers, faVenusMars} from "@fortawesome/free-solid-svg-icons/index";
import Row from "react-bootstrap/esm/Row";
import React from "react";
import {faCalendarAlt} from "@fortawesome/free-regular-svg-icons/index";
import Col from "react-bootstrap/esm/Col";

import "../../../styles/event-details/EventDetailsInformationIconsRow.css"

export default function EventDetailsInformationIconRow() {

    return(

        <Row className={"IconRowsContainer"}>

            <Col>


            <Row className={"InformationIconsRow"}>

                <Col className={"d-flex align-items-center"}>

                    <div className={"d-flex flex-row align-items-center displayEventIconHeaderElement"}>

                        <div className={"DetailsIconContainer"}>
                            <FontAwesomeIcon className={"eventDetailsIcon"} icon={faMapMarkedAlt}/>
                        </div>

                        <h className={"eventDetailsIconInformation"}>Kraków, Polna 32, 32-060</h>
                    </div>

                </Col>

                <Col>

                    <div className={"d-flex flex-row align-items-center displayEventIconHeaderElement"}>
                        <div className={"DetailsIconContainer"}>
                            <FontAwesomeIcon className={"eventDetailsIcon"} icon={faCalendarAlt}/>
                        </div>
                        <h className={"eventDetailsIconInformation"}>12.08.2020 <h className={"eventDetailsIconInformationDaysLeft"}>(3 days to the event)</h></h>
                    </div>

                </Col>

            </Row>

            <Row className={"InformationIconsRow"}>

                <Col className={"d-flex align-items-center"}>

                    <div className={"d-flex flex-row align-items-center displayEventIconHeaderElement"}>
                        <div className={"DetailsIconContainer"}>
                            <FontAwesomeIcon className={"eventDetailsIcon"} icon={faUsers}/>
                        </div>
                        <div className={"eventDetailsIconInformation d-flex flex-row"}>

                            <h className={"mr-2"}>3</h>
                            <h className={"mr-2"}>from</h>
                            <h>7</h>

                        </div>

                    </div>

                </Col>

                <Col>

                    <div className={"d-flex flex-row align-items-center displayEventIconHeaderElement"}>
                        <div className={"DetailsIconContainer"}>
                            <FontAwesomeIcon className={"eventDetailsIcon"} icon={faVenusMars}/>
                        </div>
                        <h className={"eventDetailsIconInformation"}>Male</h>
                    </div>

                </Col>

            </Row>

            <Row className={"InformationIconsRow"}>

            <Col className={"d-flex align-items-center"}>

                <div className={"d-flex flex-row align-items-center displayEventIconHeaderElement"}>
                    <div className={"DetailsIconContainer"}>
                        <FontAwesomeIcon className={"eventDetailsIcon"} icon={faChild}/>
                    </div>
                    <div className={"eventDetailsIconInformation d-flex flex-row"}>

                        <h className={"mr-2"}>12</h>
                        <h className={"mr-2"}>-</h>
                        <h className={"mr-2"}>14</h>
                        <h>years old</h>
                    </div>

                </div>

            </Col>

            <Col>

                <div className={"d-flex flex-row align-items-center displayEventIconHeaderElement"}>
                    <div className={"DetailsIconContainer"}>
                        <FontAwesomeIcon className={"eventDetailsIcon"} icon={faMoneyBill}/>
                    </div>
                    <h className={"eventDetailsIconInformation"}>20 PLN per hour</h>
                </div>

            </Col>

        </Row>

            </Col>

        </Row>

    )

}