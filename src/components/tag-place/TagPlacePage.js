import React, {Component} from "react";
import Container from "react-bootstrap/esm/Container";
import TagPlaceForm from "./TagPlaceForm";

export default function TagPlacePage(){

    return(

        <Container className="tagPlaceContainer d-flex flex-column align-items-center">

            <div className={"createEventHeader"}>
                <h>Fill out our form and let other know about incredible place!</h>
            </div>

            <TagPlaceForm/>



        </Container>

    );

}

