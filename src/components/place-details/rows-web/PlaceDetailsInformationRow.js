import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import {
    faChild,
    faMale,
    faMapMarkedAlt,
    faMoneyBill,
    faUsers,
    faVenusMars
} from "@fortawesome/free-solid-svg-icons/index";
import Row from "react-bootstrap/esm/Row";
import React from "react";
import {faCalendarAlt, faCalendarTimes} from "@fortawesome/free-regular-svg-icons/index";
import Col from "react-bootstrap/esm/Col";

import "../../../styles/place-details/rows-web/PlaceDetailsInformationIconsRow.css"
import {faDollarSign} from "@fortawesome/free-solid-svg-icons";


export default function PlaceDetailsInformationRow(props) {

    let {cost,usageTime,minAge,maxAge,city,street,buildingNumber,postalCode } = props;

    const price = Math.round((cost / usageTime + Number.EPSILON) * 100) / 100;

    const costText = cost > 0 ? price + "per hour" : "Free entrance";

    const minAgeText = minAge > 0 ? minAge + "years old" : "No age limit";

    const maxAgeText = maxAge < 99 ? maxAge + "years old" : "No age limit";

    const localizationText = city + ", " + street + ", " + buildingNumber + ", " +postalCode;

    return(

        <Row className={"IconRowsContainer OpeningContainer"}>

            <Col>

                <Row className={"OpeningHoursRow"}>

                        <Col className={"d-flex align-items-center justify-content-between"}>

                            <div className={"OpeningHoursIconContainer"}>
                                <FontAwesomeIcon className={"OpeningIconOpen"} icon={faDollarSign}/>
                            </div>

                            <h className={"PlaceDetailsIconInformationHeader"}>Cost</h>

                            <h className={"PlaceDetailsIconInformation"}>{costText}</h>

                        </Col>

                    </Row>

                <Row className={"OpeningHoursRow"}>

                    <Col className={"d-flex align-items-center justify-content-between"}>

                        <div className={"OpeningHoursIconContainer"}>
                            <FontAwesomeIcon className={"OpeningIconOpen"} icon={faChild}/>
                        </div>

                        <h className={"PlaceDetailsIconInformationHeader"}>Minimal age</h>

                        <h className={"PlaceDetailsIconInformation"}>{minAgeText}</h>

                    </Col>

                </Row>

                <Row className={"OpeningHoursRow"}>

                    <Col className={"d-flex align-items-center justify-content-between"}>

                        <div className={"OpeningHoursIconContainer"}>
                            <FontAwesomeIcon className={"OpeningIconOpen"} icon={faMale}/>
                        </div>

                        <h className={"PlaceDetailsIconInformationHeader"}>Maximal age</h>

                        <h className={"PlaceDetailsIconInformation"}>{maxAgeText}</h>

                    </Col>

                </Row>

                <Row className={"OpeningHoursRow"}>

                    <Col className={"d-flex align-items-center justify-content-between"}>

                        <div className={"OpeningHoursIconContainer"}>
                            <FontAwesomeIcon className={"OpeningIconOpen"} icon={faMapMarkedAlt}/>
                        </div>

                        <h className={"PlaceDetailsIconInformationHeader"}>Localization</h>

                        <h className={"PlaceDetailsIconInformation"}>{localizationText}</h>

                    </Col>

                </Row>



            </Col>

        </Row>



    )

}
