import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import "../../styles/tag-place/TagPlaceForm.css"
import Review from "./Review";

export default function TagPlaceForm(){

    const [name,setName] = useState("");
    const [city,setCity] = useState("");
    const [street,setStreet] = useState("");
    const [number,setNumber] = useState("");
    const [postal,setPostal] = useState("");
    const [discipline,setDiscipline] = useState("");
    const [openingHoursFrom,setOpeningHoursFrom] = useState("");
    const [openingHoursTo,setOpeningHoursTo] = useState("");
    const [cost,setCost] = useState(0);
    const [time,setTime] = useState(0);
    const [age,setAge] = useState(0);
    const [serviceRating,setServiceRating] = useState(0);
    const [localizationRating,setLocalizationRating] = useState(0);
    const [pricesRating,setPricesRating] = useState(0);
    const [openingHoursRating,setOpeningHoursRating] = useState(0);
    const [equipmentRating,setEquipmentRating] = useState(0);
    const [review,setReview] = useState("");
    const [files,setFiles] = useState("");


    const onFormSubmit = () => {alert(files); }

    return(

        <Form className={"tagPlaceForm w-70"}>

            <h className={"categoryHeader"}>General information</h>

            <Form.Group controlId="placeName">
                <Form.Label className={"FormLabel mt-3"}>Name</Form.Label>
                <Form.Control
                    className={"FormInputField"}
                    type="text" placeholder="Please, enter place name..."
                    onChange = {(e) => setName(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="placeLocalization">
                <Form.Label className={"FormLabel"}>Place Localization</Form.Label>

                <InputGroup className={"d-md-flex flex-row d-none"}>
                    <Form.Control
                        className={"mr-3 FormInputField"}
                        type="text"
                        placeholder="City..."
                        onChange = {(e) => setCity(e.target.value)}
                    />
                    <Form.Control
                        className={"mr-3"}
                        type="text"
                        placeholder="Street..."
                        onChange = {(e) => setStreet(e.target.value)}
                    />
                    <Form.Control
                        className={"mr-3"}
                        type="text"
                        placeholder="Number..."
                        onChange = {(e) => setNumber(e.target.value)}
                    />
                    <Form.Control
                        className={""}
                        type="text"
                        placeholder="Postal code..."
                        onChange = {(e) => setPostal(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className={"d-md-none flex-row d-flex"}>
                    <Form.Control
                        className={"w-100 mb-3"}
                        type="text"
                        placeholder="City..."
                        onChange = {(e) => setCity(e.target.value)}
                    />
                    <Form.Control
                        className={"w-100 mb-3"}
                        type="text"
                        placeholder="Street..."
                        onChange = {(e) => setStreet(e.target.value)}
                    />
                    <Form.Control
                        className={"w-100 mb-3"}
                        type="text"
                        placeholder="Number..."
                        onChange = {(e) => setNumber(e.target.value)}
                    />
                    <Form.Control
                        className={"w-100 mb-3"}
                        type="text"
                        placeholder="Postal code..."
                        onChange = {(e) => setPostal(e.target.value)}
                    />
                </InputGroup>

            </Form.Group>

            <Form.Group controlId="formEventDiscipline">
                <Form.Label className={"FormLabel"}>Discipline</Form.Label>
                <Form.Control
                    as="select"
                    className={"FormInputField mb-5"}
                    onChange = {(e) => setDiscipline(e.target.value)}
                >
                    <option>Discipline Example</option>
                    <option>Discipline Example</option>
                    <option>Discipline Example</option>
                    <option>Discipline Example</option>
                    <option>Discipline Example</option>
                </Form.Control>
            </Form.Group>

            <h className={"categoryHeader"}>Detailed Information</h>

            <Form.Group controlId="placeOpeningHours">
                <Form.Label className={"FormLabel mt-3"}>Opening Hours [From - To]</Form.Label>

                    <InputGroup className={"d-md-flex flex-row d-none"}>

                        <Form.Control
                            className={"FormInputField mr-3"}
                            type="time"
                            min="0"
                            placeholder="People number..."
                            onChange = {(e) => setOpeningHoursFrom(e.target.value)}
                        />
                        <Form.Control
                            className={"FormInputField"}
                            type="time"
                            min="0"
                            placeholder="People number..."
                            onChange = {(e) => setOpeningHoursTo(e.target.value)}
                        />

                </InputGroup>

            </Form.Group>

            <Form.Group controlId="placeCosts">
                <Form.Label className={"FormLabel"}>Included costs</Form.Label>
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
                        className={"FormInputField"}
                        placeholder="Usage time in hours..."
                        onChange = {(e) => setTime(e.target.value)}
                    />
                </InputGroup>
            </Form.Group>

            <Form.Group controlId="placeAge">
                <Form.Label className={"FormLabel"}>Minimal entrance age</Form.Label>

                    <Form.Control
                        type="number"
                        min="0"
                        className={"mr-3 FormInputField mb-5"}
                        placeholder="Age..."
                        onChange = {(e) => setAge(e.target.value)}
                    />

            </Form.Group>

            <h className={"categoryHeader"}>Ratings & Review</h>

            <div className={"mt-3"}>
                <Review id={"reviewOne"} title={"Service"} onChange = {(newRating) => setServiceRating(newRating)}/>
                <Review id={"reviewTwo"} title={"Localization"} onChange = {(newRating) => setLocalizationRating(newRating)}/>
                <Review id={"reviewThree"} title={"Prices"} onChange = {(newRating) => setPricesRating(newRating)}/>
                <Review id={"reviewFour"} title={"Opening hours"} onChange = {(newRating) => setOpeningHoursRating(newRating)}/>
            </div>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className={"FormLabel mt-3"}>Review - tell us about your experience</Form.Label>
                <Form.Control
                    className={"FormInputField mb-5"}
                    as="textarea"
                    rows="3"
                    onChange = {(e) => setReview(e.target.value)}
                />
            </Form.Group>

            <h className={"categoryHeader"}>Additional elements</h>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className={"FormLabel mt-3"} >Necessary documents, photos...</Form.Label>
                <Form.Control
                    className={"FormInputField"}
                    type="file"
                    onChange = {(e) => setFiles(e.target.value)}
                    multiple/>
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
                className={"d-md-inline d-none w-50 createEventSubmitButton mt-5"}
                onClick={onFormSubmit}
            >
                Create Event
            </Button>

            <Button
                variant="primary"
                type="submit"
                className={"d-md-none d-inline w-100 createEventSubmitButton mt-3"}
                onClick={onFormSubmit}
            >
                Create Event
            </Button>






        </Form>
    );







}