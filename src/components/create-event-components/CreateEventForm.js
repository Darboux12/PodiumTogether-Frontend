import React, {Component} from "react";

import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup'

import "../../styles/create-event-styles/CreateEventForm.css"

class CreateEventForm extends Component{

    render() {
        return(

            <Form>

                <Form.Group controlId="formEventTitle">
                    <Form.Label>Event Title</Form.Label>
                    <Form.Control type="text" placeholder="Please, enter event title..." />
                </Form.Group>

                <Form.Group controlId="formEventDate">
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control type="date" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formEventLocalization">
                    <Form.Label>Event Localization</Form.Label>
                    <InputGroup >
                        <Form.Control className={"mr-5"} type="date" placeholder="Password" />
                        <Form.Control className={"mr-5"} type="date" placeholder="Password" />
                        <Form.Control className={"mr-5"} type="date" placeholder="Password" />
                        <Form.Control  type="date" placeholder="Password" />
                    </InputGroup>
                </Form.Group>




                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>





        );
    }

}

export default CreateEventForm;