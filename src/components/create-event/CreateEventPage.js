import React, {Component} from "react";
import Container from "react-bootstrap/esm/Container";
import CreateEventForm from "./CreateEventForm";

export default function CreateEventPage(){

        return(

            <Container className="CreateEventContainer">

                <div className={"createEventHeader"}>
                    <h>Fill out our form and create your perfect event!</h>
                </div>

                <CreateEventForm/>

            </Container>

        );

}

