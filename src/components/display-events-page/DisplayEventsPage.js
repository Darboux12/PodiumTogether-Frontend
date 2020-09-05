import React, {Component} from "react";
import EventsSearchBar from "./EventsSearchBar";
import Event from "./Event";
import "../../styles/common/Common.css";
import "../../styles/display-events/DisplayEventPage.css";
import displayEventsPageImage from "../../images/displayEventsImage.jpg";

export default function DisplayEventsPage(){

        return(

            <div className={"displayEventPageContainer"}>

                <img className={"displayEventImage"} src={displayEventsPageImage} alt={"Display Events Page Image"}/>

                <EventsSearchBar/>

                <div className={"EventsList"}>

                    <Event
                        title={"Common play on orlik"}
                        discipline={"Football"}
                        city={"Kraków"}
                        street={"Lipowa"}
                        postalCode={"32-060"}
                        number={"64"}
                        date={"12.08.2020"}
                        bookedPeople={"3"}
                        numberPeople={"6"}
                    />
                    <Event
                        title={"Common play on orlik"}
                        discipline={"Football"}
                        city={"Kraków"}
                        street={"Lipowa"}
                        postalCode={"32-060"}
                        number={"64"}
                        date={"12.08.2020"}
                        bookedPeople={"3"}
                        numberPeople={"6"}
                    />
                    <Event
                        title={"Common play on orlik"}
                        discipline={"Football"}
                        city={"Kraków"}
                        street={"Lipowa"}
                        postalCode={"32-060"}
                        number={"64"}
                        date={"12.08.2020"}
                        bookedPeople={"3"}
                        numberPeople={"6"}
                    />
                    <Event
                        title={"Common play on orlik"}
                        discipline={"Football"}
                        city={"Kraków"}
                        street={"Lipowa"}
                        postalCode={"32-060"}
                        number={"64"}
                        date={"12.08.2020"}
                        bookedPeople={"3"}
                        numberPeople={"6"}
                    />
                    <Event
                        title={"Common play on orlik"}
                        discipline={"Football"}
                        city={"Kraków"}
                        street={"Lipowa"}
                        postalCode={"32-060"}
                        number={"64"}
                        date={"12.08.2020"}
                        bookedPeople={"3"}
                        numberPeople={"6"}
                    />

                </div>

            </div>

        );
}

