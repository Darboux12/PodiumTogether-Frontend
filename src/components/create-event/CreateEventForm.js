import React, {Component, useState} from "react";

import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup'

import "../../styles/create-event/CreateEventForm.css"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormControl from "react-bootstrap/FormControl";

export default function CreateEventFor(){

    const [title,setTitle] = useState("");
    const [date,setDate] = useState("");
    const [city,setCity] = useState("");
    const [street,setStreet] = useState("");
    const [number,setNumber] = useState("");
    const [postal,setPostal] = useState("");
    const [discipline,setDiscipline] = useState("");
    const [people,setPeople] = useState("");
    const [male,setMale] = useState(false);
    const [female,setFemale] = useState(false);
    const [both,setBoth] = useState(false);
    const [minAge,setMinAge] = useState(0);
    const [maxAge,setMaxAge] = useState(0);
    const [cost,setCost] = useState(0);
    const [time,setTime] = useState(0);
    const [description,setDescription] = useState("");

    const onFormSubmit = () => {alert(description); }

        return(

            <Form className={"createEventForm"}>

                <Form.Group controlId="formEventTitle">
                    <Form.Label className={"FormLabel"}>Event Title</Form.Label>
                    <Form.Control
                        className={"FormInputField"}
                        type="text" placeholder="Please, enter event title..."
                        onChange = {(e) => setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formEventDate">
                    <Form.Label className={"FormLabel"}>Event Date</Form.Label>
                    <Form.Control
                        className={"FormInputField"}
                        type="date"
                        onChange = {(e) => setDate(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formEventLocalization">
                    <Form.Label className={"FormLabel"}>Event Localization</Form.Label>
                    <InputGroup >
                        <Form.Control
                            className={"mr-3 FormInputField"}
                            type="text"
                            placeholder="City..."
                            onChange = {(e) => setCity(e.target.value)}
                        />
                        <Form.Control
                            className={"mr-3 FormInputField"}
                            type="text"
                            placeholder="Street..."
                            onChange = {(e) => setStreet(e.target.value)}
                        />
                        <Form.Control
                            className={"mr-3 FormInputField"}
                            type="text"
                            placeholder="Number..."
                            onChange = {(e) => setNumber(e.target.value)}
                        />
                        <Form.Control
                            className={"FormInputField"}
                            type="text" p
                            laceholder="Postal code..."
                            onChange = {(e) => setPostal(e.target.value)}
                        />
                    </InputGroup>

                </Form.Group>

                <Form.Group controlId="formEventDiscipline">
                    <Form.Label className={"FormLabel"}>Example select</Form.Label>
                    <Form.Control
                        as="select"
                        className={"FormInputField"}
                        onChange = {(e) => setDiscipline(e.target.value)}
                    >
                        <option>Discipline Example</option>
                        <option>Discipline Example</option>
                        <option>Discipline Example</option>
                        <option>Discipline Example</option>
                        <option>Discipline Example</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formEventRequiredPeople">
                    <Form.Label className={"FormLabel"}>Required People Number</Form.Label>
                    <Form.Control
                        className={"FormInputField"}
                        type="number"
                        min="0"
                        placeholder="People number..."
                        onChange = {(e) => setPeople(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formEventPreferredGender">

                    <Form.Label className={"FormLabel"}>Preferred gender</Form.Label>

                    <InputGroup>

                    <Form.Check
                        id="formRadioMale"
                        name="formRadioMale"
                        type="radio"
                        label="Male"
                        className={"genderRadioButton"}
                        onChange = {(e) => setMale(e.target.checked)}
                    />

                    <Form.Check
                        id="formRadioFemale"
                        name="formRadioFemale"
                        type="radio"
                        label="Female"
                        className={"genderRadioButton"}
                        onChange = {(e) => setFemale(e.target.checked)}
                    />

                    <Form.Check
                        id="formRadioBoth"
                        name="formRadioBoth"
                        type="radio"
                        label="Both"
                        className={"genderRadioButton"}
                        onChange = {(e) => setBoth(e.target.checked)}
                    />

                    </InputGroup>

                </Form.Group>

                <Form.Group controlId="formEventPreferredAgeRange">
                    <Form.Label className={"FormLabel"}>Preferred age range</Form.Label>
                    <InputGroup>
                    <Form.Control
                        type="number"
                        min="1" max="99"
                        className={"mr-3 FormInputField"}
                        placeholder="Min age..."
                        onChange = {(e) => setMinAge(e.target.value)}
                    />
                    <Form.Control
                        type="number"
                        min="1"
                        max="99"
                        className={"mr-3 FormInputField"}
                        placeholder="Max age..."
                        onChange = {(e) => setMaxAge(e.target.value)}
                    />
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formEventCosts">
                    <Form.Label className={"FormLabel"}>Event costs</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="number"
                            min="0"
                            step="0.1"
                            className={"mr-3 FormInputField"}
                            placeholder="Price in PLN..."
                            onChange = {(e) => setCost(e.target.value)}
                        />
                        <Form.Control
                            type="number"
                            min="0"
                            className={"mr-3 FormInputField"}
                            placeholder="Game time in hours..."
                            onChange = {(e) => setTime(e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className={"FormLabel "}>Event Description</Form.Label>
                    <Form.Control
                        className={"FormInputField"}
                        as="textarea"
                        rows="3"
                        onChange = {(e) => setDescription(e.target.value)}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    className={"w-50"}
                    onClick={onFormSubmit}
                >
                    Create Event
                </Button>
            </Form>

        );


}

