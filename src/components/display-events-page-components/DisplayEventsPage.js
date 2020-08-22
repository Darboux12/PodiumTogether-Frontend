import React, {Component} from "react";
import EventsSearchBar from "./EventsSearchBar";
import Event from "./Event";

import "../../styles/common-styles/Common.css"

class DisplayEventsPage extends Component{

    render(){

        return(

            <div>

                <EventsSearchBar/>

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





        );


    }



}

export default DisplayEventsPage;