import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-regular-svg-icons";

import { format } from "date-fns";

export default function OpenDayRow(props) {

    let {businessDays} = props;

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

    const isOpenToday = (day) => {

        let textDay = getWeekDay();

        return day.day === textDay && day.isOpen;

};

    const getText = () => {

        let text = "";

        businessDays.map((day) => {

            if(day.day === getWeekDay()){


                if(!isOpenToday(day)){
                    text = "Open on " + day.day +  " : " + "No";
                }


                else {



                    if(day.openingTimeFrom.toString() !== "00:00:00"){

                        let from = day.openingTimeFrom.toString().substring(0,5);
                        let to = day.openingTimeTo.toString().substring(0,5);
                        text = "Open on " + day.day +  " : " + "Yes" + " ( " + from  + " - " + to + " ) ";
                    }

                    else text = "Open on " + day.day +  " : " + "Yes" + " ( No time limit )";

                }

            }

        });


        return text;

    };

    return (

        <div className={""}>
            <FontAwesomeIcon className={"placeDateIcon placeDateItem"} icon={faClock}/>
            <h className={"placeLocalizationItem localization"}>{getText()}</h>
        </div>

    )

}
