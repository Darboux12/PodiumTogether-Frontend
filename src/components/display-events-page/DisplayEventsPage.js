import React, {Component} from "react";
import EventsSearchBar from "./EventsSearchBar";
import Event from "./Event";

import "../../styles/common-styles/Common.css"
import "../../styles/display-events-styles/DisplayEventPage.css"

class DisplayEventsPage extends Component{

    render(){

        return(

            <div className={"displayEventPageContainer"}>

                <div className={"Placeholder"}>Placeholder poniewaz nie wiem jak roziwazac overflow</div>



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



}

export default DisplayEventsPage;