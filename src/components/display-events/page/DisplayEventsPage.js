import React, {Component, useEffect, useState} from "react";
import EventsSearchBar from "../search-bar/EventsSearchBar";
import Event from "./Event";
import "../../../styles/common/Common.css";
import "../../../styles/display-events/page/DisplayEventPage.css";
import displayEventsPageImage from "../../../images/displayEventsImage.jpg";
import {findAllEventsFetch, findAllPlaceFetch} from "../../fetch/Fetch";



export default function DisplayEventsPage(){

    const [allItems,setAllItems] = useState([]);
    const [eventItems,setEventItems] = useState([]);

    useEffect(() => {

        findAllEventsFetch()

            .then(res => res.json())

            .then(res => {
                setEventItems(res);
                setAllItems(res);

            })

    },[]);

        return(

            <div className={"displayEventPageContainer"}>

                <img className={"displayEventImage"} src={displayEventsPageImage} alt={"Display Events Page Image"}/>

                <EventsSearchBar/>

                <div className={"EventsList"}>

                    {eventItems.map(event =>

                        <Event
                            id={event.id}
                            title={event.title}
                            dateFrom={event.dateFrom}
                            dateTo={event.dateTo}
                            peopleNumber={event.peopleNumber}
                            minAge={event.minAge}
                            maxAge={event.maxAge}
                            description={event.description}
                            usersJoined={event.usersJoined}
                            author={event.author}
                            discipline={event.discipline}
                            views={event.views}
                            image={event.images[0]}
                            documents={event.documents}
                            creationDate={event.creationDate}
                            place={event.place}
                        />

                    )}

                </div>

            </div>

        );
}

