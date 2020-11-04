import React, {Component, useEffect, useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup'
import "../../styles/create-event/CreateEventForm.css"
import serverAddress, {
    findAllDisciplineEndpoint,
    findAllGenderEndpoint, uploadEventFilesEndpoint,
    uploadEventImagesEndpoint
} from "../config/Constants"
import * as now from "date-fns";
import ImageUploader from "react-images-upload";
import {maxEventMaxAge, maxEventPeopleLength, maxEventTitleLength, minEventMinAge} from "../config/Limits";
import podiumStorage from "../config/Storage";
import jwtDecode from "jwt-decode";

export default function CreateEventFor(){

    const [title,setTitle] = useState("");
    const [dateFrom,setDateFrom] = useState("");
    const [dateTo,setDateTo] = useState("");
    const [city,setCity] = useState("");
    const [street,setStreet] = useState("");
    const [number,setNumber] = useState("");
    const [postal,setPostal] = useState("");
    const [discipline,setDiscipline] = useState("");
    const [people,setPeople] = useState(0);
    const [minAge,setMinAge] = useState(0);
    const [maxAge,setMaxAge] = useState(0);
    const [cost,setCost] = useState(0);
    const [description,setDescription] = useState("");
    const [documents, setDocuments] = useState([]);
    const [images,setImages] = useState([]);
    const [genders,setGenders] = useState([]);

    const [titleError,setTitleError] = useState("");
    const [dateError,setDateError] = useState("");
    const [localizationError,setLocalizationError] = useState("");
    const [peopleError,setPeopleError] = useState("");
    const [genderError,setGenderError] = useState("");
    const [ageError,setAgeError] = useState("");
    const [costError,setCostError] = useState("");
    const [descriptionError,setDescriptionError] = useState("");
    const [documentsError,setDocumentsError] = useState("");
    const [disciplineItems, setDisciplineItems] = useState([]);
    const [genderItems, setGenderItems] = useState([]);

    useEffect(() => {

        fetch(serverAddress + findAllDisciplineEndpoint)

            .then(res => res.json())

            .then(res => {

                setDisciplineItems(res);

                setDiscipline(res[0].discipline);

            })

    },[]);

    useEffect(() => {

        fetch(serverAddress + findAllGenderEndpoint)

            .then(res => res.json())

            .then(res => {

                setGenderItems(res);

            })

    },[]);

    const resetErrors = () => {

        setTitleError("");
        setDateError("");
        setLocalizationError("");
        setPeopleError("");
        setGenderError("");
        setAgeError("");
        setCostError("");
        setDescriptionError("");
        setDocumentsError("");

    };

    const addEventFetch = (eventRequest,imagesRequest,documentsRequest) => {

        console.log(eventRequest);

        fetch(serverAddress + '/event/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(eventRequest)

        })

            .then(response => {

                    if(response.ok){
                        console.log("Event was successfully added!");
                        uploadEventImagesFetch(imagesRequest);
                        uploadEventFilesFetch(documentsRequest)
                    }


                    else return response.json()
            })

            .then(res => {

                console.log(res);

        })

            .catch((error) => {
                console.log(error);
            });

    };

    const uploadEventImagesFetch = (requestBody) => {

        fetch(serverAddress + uploadEventImagesEndpoint, {
            method: 'POST',
            body: requestBody
        })

            .then(response => {

                if(response.ok)
                    console.log("Images was successfully uploaded!");

                else return response.json()
            })

            .then(res => {

                console.log(res);

            })

            .catch((error) => {
                console.log(error);
            });

    };

    const uploadEventFilesFetch = (requestBody) => {



        fetch(serverAddress + uploadEventFilesEndpoint, {
            method: 'POST',
            body: requestBody
        })

            .then(response => {

                if(response.ok){
                    console.log("Files was successfully uploaded!");
                    alert("Files send");
                }


                else return response.json()
            })

            .then(res => {

                console.log(res);

            })

            .catch((error) => {
                console.log(error);
            });

    };

    const formValidation = () => {

        let isOk = true;

        if(title === ""){
            setTitleError("Title cannot be empty!");
            isOk = false;
        }

        if (now.isAfter(new Date(), new Date(dateFrom))) {
            setDateError("Start date cannot be in the past!");
            isOk = false;
        }

        if (now.isAfter(new Date(), new Date(dateTo))) {
            setDateError("End date cannot be in the past!");
            isOk = false;
        }

        if(now.isAfter(dateFrom,dateTo)){
            setDateError("End date cannot be before date from!");
            isOk = false;
        }

        if(title.length > maxEventTitleLength){
            setTitleError("Title cannot be longer than " + maxEventTitleLength + " characters!");
            isOk = false;
        }

        if(city === "" || street === "" || number === "" || postal === ""){
            setLocalizationError("All localization fields must be filled!");
            isOk = false;
        }

        if(people === 0){
            setPeopleError("People number cannot be null!");
            isOk = false;
        }

        if(people > maxEventPeopleLength){
            setPeopleError("People number cannot be bigger than " + maxEventPeopleLength + " !");
            isOk = false;
        }

        if(genders.length === 0){
            setGenderError("You must check at least one gender!");
            isOk = false;
        }

        if(minAge === 0 || maxAge === 0){
            setAgeError("Both age fields must be filled!");
            isOk = false;
        }

        if(minAge < minEventMinAge|| maxAge > maxEventMaxAge){
            setAgeError("Age must be contained in range " + minEventMinAge + " - " + maxEventMaxAge);
            isOk = false;
        }

        if(cost === 0){
            setCostError("Cost field cannot be empty!");
            isOk  = false;
        }

        if(cost <= "0"){
            setCostError("Event cost must be bigger than 0!");
            isOk  = false;
        }

        if(description === ""){
            setDescriptionError("Description cannot be empty!");
            isOk  = false;
        }

        return isOk;

    };

    const onFormSubmit = () => {

        resetErrors();

        if(formValidation()){

            const author =
                podiumStorage.get("authorizationToken")
                ? jwtDecode(podiumStorage.get("authorizationToken")).sub
                    : "";

            const eventRequest = {

                title : title,
                dateFrom : dateFrom,
                dateTo : dateTo,
                city : city,
                street : street,
                postal : postal,
                number : number,
                discipline : discipline,
                people : people,
                genders : genders,
                minAge : minAge,
                maxAge : maxAge,
                cost : cost,
                author : author,
                description : description
            };

            const documentsRequest = new FormData();

            for(const file of documents)
                documentsRequest.append("files",file);

            documentsRequest.append("title",title);

            const imagesRequest = new FormData();

            for(const file of images)
                imagesRequest.append("images",file);

            imagesRequest.append("title",title);

            addEventFetch(eventRequest,imagesRequest,documentsRequest);

















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
                <Form.Label className={"FormLabel"}>Start Date</Form.Label>
                <h className={"ErrorHeader ml-4"}>{dateError}</h>

                <Form.Control
                    className={"FormInputField mb-4"}
                    type="datetime-local"
                    onChange = {(e) => setDateFrom(e.target.value)}
                />
                <Form.Label className={"FormLabel"}>End Date</Form.Label>
                <Form.Control
                    className={"FormInputField mb-4"}
                    type="datetime-local"
                    onChange = {(e) => setDateTo(e.target.value)}
                />



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

                    {genderItems.map(item =>

                        <Form.Check
                            id="formRadio"
                            name="formRadio"
                            type="checkbox"
                            label={item.gender}
                            className={"genderRadioButton"}
                            onChange = {(e) => setGenders(genders.concat(item.gender))}
                        />

                    )}







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
                        className={"FormInputField"}
                        placeholder="Price in PLN..."
                        onChange = {(e) => setCost(e.target.value)}
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

