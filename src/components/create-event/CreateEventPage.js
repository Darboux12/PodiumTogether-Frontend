import React, {Component} from "react";
import Container from "react-bootstrap/esm/Container";
import CreateEventForm from "./CreateEventForm";
import "../../styles/create-event/CreateEventPage.css"
import eventFormImage from "../../images/createEventFormImage.jpg"
export default function CreateEventPage(){

        return(

            <Container className="createEventContainer d-flex flex-column align-items-center">

                <div className={"createEventHeader"}>
                    <h>Fill out our form and create your perfect event!</h>
                </div>

                <CreateEventForm/>

            </Container>

        );

}

