import React, {useEffect, useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup'
import "../../styles/create-event/CreateEventForm.css"
import * as now from "date-fns";
import ImageUploader from "react-images-upload";
import {maxEventPeopleLength, maxEventTitleLength, maxMaxAge, minMinAge} from "../config/Limits";
import podiumStorage from "../config/Storage";
import jwtDecode from "jwt-decode";
import {addEventFetch, findAllDisciplineFetch, findAllGendersFetch, findAllPlaceFetch,} from "../fetch/Fetch";

export default function CreateEventFor(props){

    const [title,setTitle] = useState("");
    const [dateFrom,setDateFrom] = useState("");
    const [dateTo,setDateTo] = useState("");
    const [discipline,setDiscipline] = useState("");
    const [people,setPeople] = useState(0);
    const [minAge,setMinAge] = useState(0);
    const [maxAge,setMaxAge] = useState(0);
    const [description,setDescription] = useState("");
    const [documents, setDocuments] = useState([]);
    const [images,setImages] = useState([]);
    const [genders,setGenders] = useState([]);
    const [placeName,setPlaceName] = useState("");

    const [titleError,setTitleError] = useState("");
    const [dateError,setDateError] = useState("");
    const [peopleError,setPeopleError] = useState("");
    const [genderError,setGenderError] = useState("");
    const [ageError,setAgeError] = useState("");
    const [descriptionError,setDescriptionError] = useState("");
    const [documentsError,setDocumentsError] = useState("");
    const [placeError,setPlaceError] = useState("");

    const [disciplineItems, setDisciplineItems] = useState([]);
    const [genderItems, setGenderItems] = useState([]);
    const [placeItems, setPlaceItems] = useState([]);



    useEffect(() => {

        findAllDisciplineFetch()

            .then(res => res.json())

            .then(res => {

                setDisciplineItems(res);
                setDiscipline(res[0].discipline);

            })

            .catch(error => console.log(error));

    },[]);

    useEffect(() => {

        findAllGendersFetch()

            .then(res => res.json())

            .then(res => {
                setGenderItems(res);
                setDiscipline(res[0].gender);
            })

            .catch(error => console.log(error));

    },[]);

    useEffect(() => {

        findAllPlaceFetch()

            .then(res => res.json())

            .then(res => {
                setPlaceItems(res);
                setPlaceName(res[0].placeName);
            })

            .catch(error => console.log(error));

    },[]);

    const resetErrors = () => {

        setTitleError("");
        setDateError("");
        setPeopleError("");
        setGenderError("");
        setAgeError("");
        setDescriptionError("");
        setDocumentsError("");

    };

    const formValidation = () => {

        resetErrors();

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

        if(minAge < minMinAge|| maxAge > maxMaxAge){
            setAgeError("Age must be contained in range " + minMinAge + " - " + maxMaxAge);
            isOk = false;
        }

        if(description === ""){
            setDescriptionError("Description cannot be empty!");
            isOk  = false;
        }

        return isOk;

    };

    const onFormSubmit = () => {

        if(formValidation()){

            const author = jwtDecode(podiumStorage.get("authorizationToken")).sub;

            addEventFetch(title,dateFrom,dateTo,placeName,discipline,
                people,genders,minAge,maxAge,description,images,documents)

                .then(res => {

                    if(res.ok){
                        props.submitModal()
                    }

                    else return res.json();
                })

                .then(res => { console.log(res); })

                .catch((error) => { console.log(error); });

        }

        else props.submitFailModal();

    };

    return(

        <Form className={"createEventForm col-md-10 col-12"}>

            <h className={"CategoryHeader"}>General information</h>

            <Form.Group controlId="formEventTitle">

                <Form.Label className={"FormLabel mt-3"}>Event Title</Form.Label>

                <h className={"ErrorHeader ml-4"}>{titleError}</h>

                <Form.Control
                    className={"FormInputField"}
                    type="text" placeholder="Please, enter event title..."
                    onChange = {(e) => setTitle(e.target.value)}
                />

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

                <Form.Label className={"FormLabel"}>Select Event Place or Tag New</Form.Label>

                <h className={"ErrorHeader ml-4"}>{placeError}</h>

                <InputGroup className={"d-md-flex flex-row d-none"}>

                    <Form.Control
                        as="select"
                        className={"FormInputField"}
                        type="text"
                        onChange = {(e) => setPlaceName(e.target.value)}
                    >

                        {placeItems.map(item =>
                            <option key={item.id} value={item.name}>{item.name}</option>
                        )};

                    </Form.Control>

                    <Button
                        className={"ml-5 col-4"}
                        variant={"success"}
                        href={"/place/create"}
                    >Tag New Place</Button>


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

            <h className={"CategoryHeader"}>Detailed Information</h>

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

            <h className={"CategoryHeader"}>Additional elements</h>

            <Form.Group controlId="exampleForm.ControlInput1">

                <Form.Label className={"FormLabel mt-3 mb-3"} >Necessary documents</Form.Label>

                <h className={"ErrorHeader ml-4"}>{documentsError}</h>

                <Form.Control
                    className={"FormInputFieldFile"}
                    type="file" multiple
                    onChange = {(e) => setDocuments(e.target.files)}
                />

            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">

                <Form.Label className={"FormLabel mt-1"} >Event Images</Form.Label>

                <ImageUploader
                    className={"imageEventUploader"}
                    withIcon={false}
                    buttonText='Choose event images'
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

