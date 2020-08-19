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

            <Form className={"createEventForm"}>

                <Form.Group controlId="formEventTitle">
                    <Form.Label className={"FormLabel"}>Event Title</Form.Label>
                    <Form.Control className={"FormInputField"} type="text" placeholder="Please, enter event title..." />
                </Form.Group>

                <Form.Group controlId="formEventDate">
                    <Form.Label className={"FormLabel"}>Event Date</Form.Label>
                    <Form.Control className={"FormInputField"} type="date" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formEventLocalization">
                    <Form.Label className={"FormLabel"}>Event Localization</Form.Label>
                    <InputGroup >
                        <Form.Control className={"mr-3 FormInputField"} type="text" placeholder="City..." />
                        <Form.Control className={"mr-3 FormInputField"} type="text" placeholder="Street..." />
                        <Form.Control className={"mr-3 FormInputField"} type="text" placeholder="Number..." />
                        <Form.Control className={"FormInputField"} type="text" placeholder="Postal code..." />
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formEventDiscipline">
                    <Form.Label className={"FormLabel"}>Example select</Form.Label>
                    <Form.Control as="select" className={"FormInputField"}>
                        <option>Discipline Example</option>
                        <option>Discipline Example</option>
                        <option>Discipline Example</option>
                        <option>Discipline Example</option>
                        <option>Discipline Example</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formEventRequiredPeople">
                    <Form.Label className={"FormLabel"}>Required People Number</Form.Label>
                    <Form.Control className={"FormInputField"} type="number" min="0" placeholder="People number..." />
                </Form.Group>

                <Form.Group controlId="formEventPreferredGender">
                    <Form.Label className={"FormLabel"}>Preferred gender</Form.Label>

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

                <Form.Group controlId="formEventPreferredAgeRange">
                    <Form.Label className={"FormLabel"}>Preferred age range</Form.Label>
                    <InputGroup>
                    <Form.Control type="number" min="1" max="99" className={"mr-3 FormInputField"} placeholder="Min age..." />
                    <Form.Control type="number" min="1" max="99" className={"mr-3 FormInputField"} placeholder="Max age..." />
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formEventCosts">
                    <Form.Label className={"FormLabel"}>Event costs</Form.Label>
                    <InputGroup>
                        <Form.Control type="number" min="0" className={"mr-3 FormInputField"} placeholder="Price in PLN..." />
                        <Form.Control type="number" min="0" max className={"mr-3 FormInputField"} placeholder="Game time in hours..." />
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className={"FormLabel "}>Event Description</Form.Label>
                    <Form.Control className={"FormInputField"} as="textarea" rows="3" />
                </Form.Group>

                <Button variant="primary" type="submit" className={"w-50"}>
                    Create Event
                </Button>
            </Form>





        );
    }

}

export default CreateEventForm;