import React from "react";
import Container from "react-bootstrap/esm/Container";
import CreateEventForm from "./CreateEventForm";
import "../../styles/create-event/CreateEventPage.css"

export default function CreateEventPage(){

        return(

            <Container className="createEventContainer d-flex flex-column align-items-center">

                <h className={"createEventHeader"}>
                    Fill out our form and create your perfect event!
                </h>

                <CreateEventForm/>

            </Container>

        );
}

