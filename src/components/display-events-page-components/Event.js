import React, {Component} from "react";

import "../../styles/display-events-styles/Events.css"

import footballEvent from "../../images/event-football.jpg"
import Badge from "react-bootstrap/Badge";

class Event extends Component{

    render(){

        return(

            <div className={"Event"}>

                <img className={"eventImage"} src={footballEvent} alt={"footballEvent"}/>

                <div className={"eventInformation d-flex flex-column"}>

                    <h>Title</h>
                    <h>Discipline</h>

                </div>

                <Badge className={"eventBadge"} variant="secondary">Football</Badge>









            </div>








        );





    }

}

export default Event;