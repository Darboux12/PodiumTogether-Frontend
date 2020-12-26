import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-regular-svg-icons";

import { format } from "date-fns";

export default function OpenDayRow(props) {

    let from = "";
    let to = "";

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
        if(currentDay === 7)
            textDay = "Sunday";

        return textDay;

    };

    const isOpen = () => {

        let textDay = getWeekDay();

        let value = false;

        props.businessDays.map((day) => {

            if(day.day === textDay){

                value = true;

                from = day.openingTimeFrom.toString().substring(0,5);
                to = day.openingTimeTo.toString().substring(0,5);


            }

        });

        return value;


};

    const open = isOpen() ? 'Yes' : 'No';

    const day = getWeekDay();

    return (

        <div className={""}>
            <FontAwesomeIcon className={"placeDateIcon placeDateItem"} icon={faClock}/>
            <h className={"placeLocalizationItem localization"}>Open on {day}: {open} ( {from} - {to} ) </h>
        </div>




    )

}
