import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import {faChild, faMapMarkedAlt, faMoneyBill, faUsers, faVenusMars} from "@fortawesome/free-solid-svg-icons/index";
import Row from "react-bootstrap/esm/Row";
import React from "react";
import {faCalendarAlt} from "@fortawesome/free-regular-svg-icons/index";
import Col from "react-bootstrap/esm/Col";

import "../../../styles/place-details/rows-web/PlaceDetailsInformationIconsRow.css"
import {faWallet} from "@fortawesome/free-solid-svg-icons";
import News from "../../news/News";
import {faCalendarTimes} from "@fortawesome/free-regular-svg-icons";

import "../../../styles/place-details/rows-web/OpeningHoursRow.css"

export default function PlaceDetailsOpeningHoursRow(props) {

    let {days} = props;

    const getWeekDay = () => {

        const currentDay = new Date().getDay();

        let textDay = "";

        if(currentDay === 1)
            textDay = "Monday";
        if(currentDay === 2)
            textDay = "Tuesday";
        if(currentDay === 3)
            textDay = "Wednesday";
        if(currentDay === 4)
            textDay = "Thursday";
        if(currentDay === 5)
            textDay = "Friday";
        if(currentDay === 6)
            textDay = "Saturday";
        if(currentDay === 0)
            textDay = "Sunday";

        return textDay;

    };

    const isOpen = (day) => {
        return  day.isOpen;

    };

    const getOpeningIcon = (day) => {

        if(isOpen(day))
            return <FontAwesomeIcon className={"OpeningIconOpen"} icon={faCalendarAlt}/>;

        else return <FontAwesomeIcon className={"OpeningIconClosed"} icon={faCalendarTimes}/>

    };

    const getOpeningHours = (day) => {

        let text = "";

        if(day.isOpen){

            if(day.openingTimeFrom.toString() !== "00:00:00")
                text = day.openingTimeFrom.toString().substring(0,5) + " - " + day.openingTimeTo.toString().substring(0,5);

            else text = "No time limit"
        }


        else text =  "CLOSED";

        return text;

    };

    const sorter = {
        // "sunday": 0, // << if sunday is first day of week
        "monday": 1,
        "tuesday": 2,
        "wednesday": 3,
        "thursday": 4,
        "friday": 5,
        "saturday": 6,
        "sunday": 7
    };

    return(

        <Row className={"IconRowsContainer OpeningContainer"}>

            <Col>

                    {days.sort((a, b) => {
                        let day1 = a.day.toLowerCase();
                        let day2 = b.day.toLowerCase();
                        return sorter[day1] - sorter[day2];
                    }).map(day =>

                        <Row className={"OpeningHoursRow"}>

                            <Col className={"d-flex align-items-center justify-content-between"}>

                                <div className={"OpeningHoursIconContainer"}>
                                    {getOpeningIcon(day)}
                                </div>

                                <h className={"PlaceDetailsIconInformationHeader"}>{day.day}</h>

                                <h className={"PlaceDetailsIconInformation"}>{getOpeningHours(day)}</h>

                            </Col>

                        </Row>

                    )}

            </Col>

        </Row>

    )

}
