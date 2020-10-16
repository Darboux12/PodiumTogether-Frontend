import React, {Component, useEffect, useState} from "react";

import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup'

import "../../styles/create-event/CreateEventForm.css"

import serverAddress from "../config/Constants"
import * as now from "date-fns";
import ImageUploader from "react-images-upload";


export default function CreateEventFor(){

    const [title,setTitle] = useState("");
    const [date,setDate] = useState("");
    const [city,setCity] = useState("");
    const [street,setStreet] = useState("");
    const [number,setNumber] = useState("");
    const [postal,setPostal] = useState("");
    const [discipline,setDiscipline] = useState("");
    const [people,setPeople] = useState(0);
    const [male,setMale] = useState(false);
    const [female,setFemale] = useState(false);
    const [minAge,setMinAge] = useState(0);
    const [maxAge,setMaxAge] = useState(0);
    const [cost,setCost] = useState(0);
    const [time,setTime] = useState(0);
    const [description,setDescription] = useState("");
    const [startHour,setStartHour] = useState("");
    const [endHour,setEndHour] = useState("");
    const [documents, setDocuments] = useState([]);
    const [images,setImages] = useState([]);

    const [titleError,setTitleError] = useState("");
    const [dateError,setDateError] = useState("");
    const [localizationError,setlLocalizationError] = useState("");
    const [peopleError,setPeopleError] = useState("");
    const [genderError,setGenderError] = useState("");
    const [ageError,setAgeError] = useState("");
    const [costError,setCostError] = useState("");
    const [descriptionError,setDescriptionError] = useState("");
    const [documentsError,setDocumentsError] = useState("");


    const [isLoaded, setIsLoaded] = useState(false);
    const [disciplineItems, setDisciplineItems] = useState([]);


    useEffect(() => {

        fetch(serverAddress + '/discipline/find/all')
            .then(res => res.json())
            .then(res => {

                setIsLoaded(true);
                setDisciplineItems(res);

            })

    },[]);

    const resetErrors = () => {

        setTitleError("");
        setDateError("");
        setlLocalizationError("");
        setPeopleError("");
        setGenderError("");
        setAgeError("");
        setCostError("");
        setDescriptionError("");
        setDocumentsError("");

    };

    const onFormSubmit = () => {

        const titleMaxLength = 70;
        const peopleMaxNumber = 50;
        const ageMin = 1;
        const ageMax = 100;
        const maxTIme = 168;
        let noErrors = true;

        resetErrors();

        if(title === ""){
            setTitleError("Title cannot be empty!");
            noErrors = false;
        }

        if (now.isAfter(new Date(), new Date(date))) {
            setDateError("Date cannot be in the past!")
            noErrors = false;
        }

        if(startHour > endHour){
            setDateError("Start hour cannot be late then end hour!");
            noErrors = false;
        }

        if(title.length > titleMaxLength){
            setTitleError("Title cannot be longer than " + titleMaxLength + " characters!");
            noErrors = false;
        }

        if(date === "" || startHour === "" || endHour === ""){
            setDateError("All date fields must be filled!");
            noErrors = false;
        }

        if(city === "" || street === "" || number === "" || postal === ""){
            setlLocalizationError("All localization fields must be filled!");
            noErrors = false;
        }

        if(people === 0){
            setPeopleError("People number cannot be null!");
            noErrors = false;
        }

        if(people > peopleMaxNumber){
            setPeopleError("People number cannot be bigger than " + peopleMaxNumber + " !")
            noErrors = false;
        }

        if(!(male || female)){
            setGenderError("You must check at least one gender!");
            noErrors = false;
        }

        if(minAge === 0 || maxAge === 0){
            setAgeError("Both age fields must be filled!")
            noErrors = false;
        }

        if(minAge < ageMin || maxAge > ageMax){
           setAgeError("Age must be contained in range 1 - 100 years old");
           noErrors = false;
        }

        if(cost === 0 || time === 0){
            setCostError("Both cost fields must be filled!");
            noErrors = false;
        }

        if(cost <= "0" || time <= "0"){
            setCostError("Both cost fields must be bigger than 0!");
            noErrors = false;
        }





        if(time > '168'){
            setCostError("Time cannot be longer than one week!");
            noErrors = false;
        }

        if(description === ""){
            setDescriptionError("Description cannot be empty!");
            noErrors = false;
        }

        if(noErrors){

            const formData = new FormData();
            formData.append('title',title);
            formData.append('city',city);
            formData.append('street',street);
            formData.append('postal',postal);
            formData.append('discipline',discipline);
            formData.append('people',people);
            formData.append('minAge',minAge);
            formData.append('maxAge',maxAge);
            formData.append('cost',cost);
            formData.append('time',time);
            formData.append('description',description);
            formData.append('startHour',startHour);
            formData.append('endHour',endHour);
            formData.append('date',date);
            formData.append('number',number);

            if(male)
                formData.append('genders','male');
            if(female)
                formData.append('genders','female');

            for(const file of documents)
                formData.append("documents",file);

            for(const file of images)
                formData.append("images",file);

            fetch(serverAddress + '/event/add', { // Your POST endpoint
                method: 'POST',
                body: formData

            })
                .then(response => {

                        if(response.ok)
                            alert("Event was successfully added!");
                    }

                );





        }



    };

    return(

        <Form className={"createEventForm w-70"}>

            <h className={"categoryHeader"}>General information</h>

            <Form.Group controlId="formEventTitle">
                <Form.Label className={"FormLabel mt-3"}>Event Title</Form.Label>
                <h className={"ErrorHeader ml-4"}>{titleError}</h>
                <Form.Control
                    className={"FormInputField"}
                    type="text" placeholder="Please, enter event title..."
                    onChange = {(e) => setTitle(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formEventDate">
                <Form.Label className={"FormLabel"}>Event Date</Form.Label>
                <h className={"ErrorHeader ml-4"}>{dateError}</h>
                <Form.Control
                    className={"FormInputField mb-4"}
                    type="date"
                    onChange = {(e) => setDate(e.target.value)}
                />

                <div className={"d-flex flex-row"}>

                    <Form.Control
                        className={"FormInputField mr-5"}
                        type="time"
                        onChange = {(e) => setStartHour(e.target.value)}
                    />

                    <Form.Control
                        className={"FormInputField"}
                        type="time"
                        onChange = {(e) => setEndHour(e.target.value)}
                    />

                </div>

            </Form.Group>

            <Form.Group controlId="formEventLocalization">
                <Form.Label className={"FormLabel"}>Event Localization</Form.Label>
                <h className={"ErrorHeader ml-4"}>{localizationError}</h>
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
                        type="number"
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
                    {disciplineItems.map(item =>
                        <option key={item.discipline} value={item.discipline}>{item.discipline}</option>
                    )};

                </Form.Control>
            </Form.Group>

            <h className={"categoryHeader"}>Detailed Information</h>

            <Form.Group controlId="formEventRequiredPeople">
                <Form.Label className={"FormLabel mt-3"}>Required People Number</Form.Label>
                <h className={"ErrorHeader ml-4"}>{peopleError}</h>
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
                <h className={"ErrorHeader ml-4"}>{genderError}</h>
                <InputGroup>

                    <Form.Check
                        id="formRadioMale"
                        name="formRadioMale"
                        type="checkbox"
                        label="Male"
                        className={"genderRadioButton"}
                        onChange = {(e) => setMale(e.target.checked)}
                    />

                    <Form.Check
                        id="formRadioFemale"
                        name="formRadioFemale"
                        type="checkbox"
                        label="Female"
                        className={"genderRadioButton"}
                        onChange = {(e) => setFemale(e.target.checked)}
                    />

                </InputGroup>

            </Form.Group>

            <Form.Group controlId="formEventPreferredAgeRange">
                <Form.Label className={"FormLabel"}>Preferred age range</Form.Label>
                <h className={"ErrorHeader ml-4"}>{ageError}</h>
                <InputGroup>
                    <Form.Control
                        type="number"
                        min="1"
                        max="100"
                        className={"mr-3 FormInputField"}
                        placeholder="Min age..."
                        onChange = {(e) => setMinAge(e.target.value)}
                    />
                    <Form.Control
                        type="number"
                        min="1"
                        max="100"
                        className={"FormInputField"}
                        placeholder="Max age..."
                        onChange = {(e) => setMaxAge(e.target.value)}
                    />
                </InputGroup>
            </Form.Group>

            <Form.Group controlId="formEventCosts">
                <Form.Label className={"FormLabel"}>Event costs</Form.Label>
                <h className={"ErrorHeader ml-4"}>{costError}</h>
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
                        placeholder="Game time in hours..."
                        onChange = {(e) => setTime(e.target.value)}
                    />
                </InputGroup>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className={"FormLabel "}>Event Description</Form.Label>
                <h className={"ErrorHeader ml-4"}>{descriptionError}</h>
                <Form.Control
                    className={"FormInputField mb-5"}
                    as="textarea"
                    rows="3"
                    onChange = {(e) => setDescription(e.target.value)}
                />
            </Form.Group>

            <h className={"categoryHeader"}>Additional elements</h>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className={"FormLabel mt-3"} >Necessary documents</Form.Label>
                <h className={"ErrorHeader ml-4"}>{documentsError}</h>
                <Form.Control
                    className={"FormInputField"}
                    type="file" multiple
                    onChange = {(e) => setDocuments(e.target.files)}
                />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className={"FormLabel mt-1"} >Event Images</Form.Label>
                <ImageUploader
                    withIcon={false}
                    buttonText='Choose images'
                    onChange={(pic) => setImages(pic)}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    withPreview = {true}
                    label=""
                />
            </Form.Group>

            <Button
                variant="primary"
                className={"d-inline col-md-6 col-12 createEventSubmitButton mt-3"}
                onClick={onFormSubmit}
            >
                Create Event
            </Button>

        </Form>

    );


}

