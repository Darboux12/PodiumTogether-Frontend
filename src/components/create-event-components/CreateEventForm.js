import React, {Component} from "react";

import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup'

import "../../styles/create-event-styles/CreateEventForm.css"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
                        <Form.Control className={"mr-3"} type="text" placeholder="City..." />
                        <Form.Control className={"mr-3"} type="text" placeholder="Street..." />
                        <Form.Control className={"mr-3"} type="text" placeholder="Number..." />
                        <Form.Control type="text" placeholder="Postal code..." />
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formEventDiscipline">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select">
                        <option>Discipline Example</option>
                        <option>Discipline Example</option>
                        <option>Discipline Example</option>
                        <option>Discipline Example</option>
                        <option>Discipline Example</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formEventRequiredPeople">
                    <Form.Label>Required People Number</Form.Label>
                    <Form.Control type="number" min="0" placeholder="People number..." />
                </Form.Group>

                <Form.Group controlId="formEventRequiredPeople">
                    <Form.Label>Preferred gender</Form.Label>

                    <InputGroup>

                    <Form.Check
                        type="radio"
                        label="Male"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        className={"genderRadioButton"}
                    />

                    <Form.Check
                        type="radio"
                        label="Female"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        className={"genderRadioButton"}
                    />

                    <Form.Check
                        type="radio"
                        label="Both"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        className={"genderRadioButton"}
                    />

                    </InputGroup>

                </Form.Group>

                <Form.Group controlId="formEventRequiredPeople">
                    <Form.Label>Preferred age range</Form.Label>
                    <InputGroup>
                    <Form.Control type="number" min="1" max="99" className={"mr-3 "} placeholder="Min age..." />
                    <Form.Control type="number" min="1" max="99" className={"mr-3"} placeholder="Max age..." />
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formEventRequiredPeople">
                    <Form.Label>Event costs</Form.Label>
                    <InputGroup>
                        <Form.Control type="number" min="0" className={"mr-3 "} placeholder="Price in PLN..." />
                        <Form.Control type="number" min="0" max className={"mr-3"} placeholder="Game time in hours..." />
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Event Description</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create Event
                </Button>
            </Form>





        );
    }

}

export default CreateEventForm;