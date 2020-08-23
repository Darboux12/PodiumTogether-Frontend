import React, {Component} from "react";
import Container from "react-bootstrap/esm/Container";
import CreateEventForm from "./CreateEventForm";


class CreateEventPage extends Component{

    render() {
        return(

            <Container className="CreateEventContainer">

                <div className={"createEventHeader"}>
                    <h>Fill out our form and create your perfect event!</h>
                </div>



                <CreateEventForm/>






            </Container>








        );
    }

}

export default CreateEventPage;