import React, {Component} from "react";
import EventsSearchBar from "./EventsSearchBar";
import Event from "./Event";

class DisplayEventsPage extends Component{

    render(){

        return(

            <div>

                <h>We hope you find your perfect event!</h>

                <EventsSearchBar/>

                <Event/>



            </div>





        );


    }



}

export default DisplayEventsPage;