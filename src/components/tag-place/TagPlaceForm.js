import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ImageUploader from "react-images-upload";

import "../../styles/tag-place/TagPlaceForm.css"
import Review from "./Review";
import {addPlaceFetch, findAllDisciplineFetch} from "../fetch/Fetch";
import * as now from "date-fns";
import {
    maxBuildingNumberLength,
    maxCityLength, maxCost, maxLocalizationRemarkLength, maxMaxAge, maxMinAge,
    maxObjectNameLength, maxObjectReviewLength,
    maxPostalLength,
    maxStreetLength,
    minBuildingNumberLength,
    minCityLength, minCost, minLocalizationRemarkLength, minMaxAge, minMinAge,
    minObjectNameLength, minObjectReviewLength,
    minPostalLength,
    minStreetLength
} from "../config/Limits";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function TagPlaceForm(){

    const [name,setName] = useState("");
    const [city,setCity] = useState("");
    const [street,setStreet] = useState("");
    const [buildingNumber,setBuildingNumber] = useState("");
    const [postalCode,setPostalCode] = useState("");
    const [discipline,setDiscipline] = useState("");
    const [cost,setCost] = useState(0);
    const [usageTime,setUsageTime] = useState(0);
    const [serviceRating,setServiceRating] = useState(0);
    const [localizationRating,setLocalizationRating] = useState(0);
    const [pricesRating,setPricesRating] = useState(0);
    const [openingHoursRating,setOpeningHoursRating] = useState(0);
    const [review,setReview] = useState("");
    const [images,setImages] = useState([]);
    const [localizationRemarks,setLocalizationRemarks] = useState("");
    const [minAge,setMinAge] = useState("");
    const [maxAge,setMaxAge] = useState("");
    
    const [localizationError,setLocalizationError] = useState("");
    const [nameError,setNameError] = useState("");
    const [openingHoursError,setOpeningHoursError] = useState("");
    const [costError,setCostError] = useState("");
    const [ageError,setAgeError] = useState("");
    const [reviewError,setReviewError] = useState("");
    const [localizationRemarksError,setLocalizationRemarksError] = useState("");
    const [starRatingsError,setStarRatingsError] = useState("");

    const [disciplineItems,setDisciplineItems] = useState([]);
    
    const [costInputDisabled,setCostInputDisabled ] = useState(false);
    const [ageInputDisabled,setAgeInputDisabled ] = useState(false);

    const [isMondayOpen,setIsMondayOpen] = useState(false);
    const [isMondayHoursDisabled,setIsMondayHoursDisabled] = useState(false);
    const [mondayOpeningsHoursFrom,setMondayOpeningsHoursFrom] = useState("");
    const [mondayOpeningsHoursTo,setMondayOpeningsHoursTo] = useState("");

    const [isTuesdayOpen,setIsTuesdayOpen] = useState(false);
    const [isTuesdayHoursDisabled,setIsTuesdayHoursDisabled] = useState(false);
    const [tuesdayOpeningsHoursFrom,setTuesdayOpeningsHoursFrom] = useState("");
    const [tuesdayOpeningsHoursTo,setTuesdayOpeningsHoursTo] = useState("");

    const [isWednesdayOpen,setIsWednesdayOpen] = useState(false);
    const [isWednesdayHoursDisabled,setIsWednesdayHoursDisabled] = useState(false);
    const [wednesdayOpeningsHoursFrom,setWednesdayOpeningsHoursFrom] = useState("");
    const [wednesdayOpeningsHoursTo,setWednesdayOpeningsHoursTo] = useState("");

    const [isThursdayOpen,setIsThursdayOpen] = useState(false);
    const [isThursdayHoursDisabled,setIsThursdayHoursDisabled] = useState(false);
    const [thursdayOpeningsHoursFrom,setThursdayOpeningsHoursFrom] = useState("");
    const [thursdayOpeningsHoursTo,setThursdayOpeningsHoursTo] = useState("");

    const [isFridayOpen,setIsFridayOpen] = useState(false);
    const [isFridayHoursDisabled,setIsFridayHoursDisabled] = useState(false);
    const [fridayOpeningsHoursFrom,setFridayOpeningsHoursFrom] = useState("");
    const [fridayOpeningsHoursTo,setFridayOpeningsHoursTo] = useState("");

    const [isSaturdayOpen,setIsSaturdayOpen] = useState(false);
    const [isSaturdayHoursDisabled,setIsSaturdayHoursDisabled] = useState(false);
    const [saturdayOpeningsHoursFrom,setSaturdayOpeningsHoursFrom] = useState("");
    const [saturdayOpeningsHoursTo,setSaturdayOpeningsHoursTo] = useState("");

    const [isSundayOpen,setIsSundayOpen] = useState(false);
    const [isSundayHoursDisabled,setIsSundayHoursDisabled] = useState(false);
    const [sundayOpeningsHoursFrom,setSundayOpeningsHoursFrom] = useState("");
    const [sundayOpeningsHoursTo,setSundayOpeningsHoursTo] = useState("");

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

        if(isMondayOpen) {
            let btn = document.getElementById("MondayButton");
            btn.style.backgroundColor = "rgb(0, 123, 255)";
            btn.style.color = "white";
        }

        else {
            let btn = document.getElementById("MondayButton");
            btn.style.backgroundColor = "white";
            btn.style.color = "rgb(0, 123, 255)";
        }

        if(isTuesdayOpen) {
            let btn = document.getElementById("TuesdayButton");
            btn.style.backgroundColor = "rgb(0, 123, 255)";
            btn.style.color = "white";
        }

        else {
            let btn = document.getElementById("TuesdayButton");
            btn.style.backgroundColor = "white";
            btn.style.color = "rgb(0, 123, 255)";
        }

        if(isWednesdayOpen) {
            let btn = document.getElementById("WednesdayButton");
            btn.style.backgroundColor = "rgb(0, 123, 255)";
            btn.style.color = "white";
        }

        else {
            let btn = document.getElementById("WednesdayButton");
            btn.style.backgroundColor = "white";
            btn.style.color = "rgb(0, 123, 255)";
        }

        if(isThursdayOpen) {
            let btn = document.getElementById("ThursdayButton");
            btn.style.backgroundColor = "rgb(0, 123, 255)";
            btn.style.color = "white";
        }

        else {
            let btn = document.getElementById("ThursdayButton");
            btn.style.backgroundColor = "white";
            btn.style.color = "rgb(0, 123, 255)";
        }

        if(isFridayOpen) {
            let btn = document.getElementById("FridayButton");
            btn.style.backgroundColor = "rgb(0, 123, 255)";
            btn.style.color = "white";
        }

        else {
            let btn = document.getElementById("FridayButton");
            btn.style.backgroundColor = "white";
            btn.style.color = "rgb(0, 123, 255)";
        }

        if(isSaturdayOpen) {
            let btn = document.getElementById("SaturdayButton");
            btn.style.backgroundColor = "rgb(0, 123, 255)";
            btn.style.color = "white";
        }

        else {
            let btn = document.getElementById("SaturdayButton");
            btn.style.backgroundColor = "white";
            btn.style.color = "rgb(0, 123, 255)";
        }


        if(isSundayOpen) {
            let btn = document.getElementById("SundayButton");
            btn.style.backgroundColor = "rgb(0, 123, 255)";
            btn.style.color = "white";
        }

        else {
            let btn = document.getElementById("SundayButton");
            btn.style.backgroundColor = "white";
            btn.style.color = "rgb(0, 123, 255)";
        }
        
    });

    const resetErrors = () => {

        setNameError("");
        setOpeningHoursError("");
        setCostError("");
        setAgeError("");
        setReviewError("");
        setLocalizationRemarksError("");
        setStarRatingsError("");

    };
    
    const nameValidation = () => {
        
        let isOk = true;

        if(name === ""){
            setNameError("Name cannot be empty!");
            isOk = false;
        }

        if(name.length < minObjectNameLength){
            setNameError("Name must be longer than " + minObjectNameLength + "!");
            isOk = false;
        }

        if(name.length > maxObjectNameLength){
            setNameError("Name must be shorter than " + maxObjectNameLength + "!");
            isOk = false;
        }

        if(name === ""){
            setNameError("Name cannot be empty!");
            isOk = false;
        }
        
        return isOk;
        
    };
    
    const localizationValidation = () => {

        let isOk = true;

        if(city.length < minCityLength){
            setLocalizationError("City must be longer than " + minCityLength + "!");
            isOk = false;
        }

        if(city.length > maxCityLength){
            setLocalizationError("City must be shorter than " + maxCityLength + "!");
            isOk = false;
        }

        if(city === ""){
            setLocalizationError("City cannot be empty!");
            isOk = false;
        }

        if(street !== ""){

            if(street.length < minStreetLength){
                setLocalizationError("Street must be longer than " + minStreetLength + " or empty!");
                isOk = false;
            }

            if(street.length > maxStreetLength){
                setLocalizationError("Street must be shorter than " + maxStreetLength + "or empty!");
                isOk = false;
            }

        }

        if(buildingNumber !== ""){

            if(buildingNumber.length < minBuildingNumberLength){
                setLocalizationError("Number must be longer than " + minBuildingNumberLength + "or empty!");
                isOk = false;
            }

            if(buildingNumber.length > maxBuildingNumberLength){
                setLocalizationError("Number must be shorter than " + maxBuildingNumberLength + "or empty!");
                isOk = false;
            }

        }

        if(postalCode !== ""){

            if(postalCode.length < minPostalLength){
                setLocalizationError("Postal code must be longer than " + minPostalLength + 'or empty!');
                isOk = false;
            }

            if(postalCode.length > maxPostalLength){
                setLocalizationError("Postal code must be longer than " + maxPostalLength + 'or empty!');
                isOk = false;
            }

        }

        if(localizationRemarks !== ""){

            if(localizationRemarks.length < minLocalizationRemarkLength){
                setLocalizationRemarksError("Remarks must be longer than " + minLocalizationRemarkLength + " or empty!");
                isOk = false;
            }

            if(localizationRemarks.length > maxLocalizationRemarkLength){
                setLocalizationRemarksError("Remarks must be shorter than " + maxLocalizationRemarkLength + " or empty!");
                isOk = false;
            }

        }
        
        return isOk;
        
    };
    
    const openingDaysValidation  = () => {
        
        let isOk = true;

        if(isMondayOpen){

            if(mondayOpeningsHoursFrom === "" && !isMondayHoursDisabled){
                setOpeningHoursError("Openings hours fields for all active days cannot be empty or no limit must be set!");
                isOk = false;
            }

            if(mondayOpeningsHoursTo === "" && !isMondayHoursDisabled){
                setOpeningHoursError("Openings hours fields for all active days cannot be empty or no limit must be set!");
                isOk = false;
            }

            if(mondayOpeningsHoursFrom > mondayOpeningsHoursTo){
                setOpeningHoursError("Opening hour from cannot be later than opening hour to!");
                isOk = false;
            }

        }

        if(isTuesdayOpen && !isTuesdayHoursDisabled){

            if(tuesdayOpeningsHoursFrom === ""){
                setOpeningHoursError("Openings hours fields for all active days cannot be empty or no limit must be set!");
                isOk = false;
            }

            if(tuesdayOpeningsHoursTo === ""){
                setOpeningHoursError("Openings hours fields for all active days cannot be empty or no limit must be set!");
                isOk = false;
            }

            if(tuesdayOpeningsHoursFrom > tuesdayOpeningsHoursTo){
                setOpeningHoursError("Opening hour from cannot be later than opening hour to!");
                isOk = false;
            }

        }

        if(isWednesdayOpen && !isWednesdayHoursDisabled){

            if(wednesdayOpeningsHoursFrom === ""){
                setOpeningHoursError("Openings hours fields for all active days cannot be empty or no limit must be set!");
                isOk = false;
            }

            if(wednesdayOpeningsHoursTo === ""){
                setOpeningHoursError("Openings hours fields for all active days cannot be empty or no limit must be set!");
                isOk = false;
            }

            if(wednesdayOpeningsHoursFrom > wednesdayOpeningsHoursTo){
                setOpeningHoursError("Opening hour from cannot be later than opening hour to!");
                isOk = false;
            }

        }

        if(isThursdayOpen && !isThursdayHoursDisabled){

            if(thursdayOpeningsHoursFrom === ""){
                setOpeningHoursError("Openings hours fields for all active days cannot be empty or no limit must be set!");
                isOk = false;
            }

            if(thursdayOpeningsHoursTo === ""){
                setOpeningHoursError("Openings hours fields for all active days cannot be empty or no limit must be set!");
                isOk = false;
            }

            if(thursdayOpeningsHoursFrom > thursdayOpeningsHoursTo){
                setOpeningHoursError("Opening hour from cannot be later than opening hour to!");
                isOk = false;
            }

        }

        if(isFridayOpen && !isFridayHoursDisabled){

            if(fridayOpeningsHoursFrom === ""){
                setOpeningHoursError("Openings hours fields for all active days cannot be empty or no limit must be set!");
                isOk = false;
            }

            if(fridayOpeningsHoursTo === ""){
                setOpeningHoursError("Openings hours fields for all active days cannot be empty or no limit must be set!");
                isOk = false;
            }

            if(fridayOpeningsHoursFrom > fridayOpeningsHoursTo){
                setOpeningHoursError("Opening hour from cannot be later than opening hour to!");
                isOk = false;
            }

        }

        if(isSaturdayOpen && !isSaturdayHoursDisabled){

            if(saturdayOpeningsHoursFrom === ""){
                setOpeningHoursError("Openings hours fields for all active days cannot be empty or no limit must be set!");
                isOk = false;
            }

            if(saturdayOpeningsHoursTo === ""){
                setOpeningHoursError("Openings hours fields for all active days cannot be empty or no limit must be set!");
                isOk = false;
            }

            if(saturdayOpeningsHoursFrom > saturdayOpeningsHoursTo){
                setOpeningHoursError("Opening hour from cannot be later than opening hour to!");
                isOk = false;
            }

        }

        if(isSundayOpen && !isSundayHoursDisabled){

            if(sundayOpeningsHoursFrom === ""){
                setOpeningHoursError("Openings hours fields for all active days cannot be empty or no limit must be set!");
                isOk = false;
            }

            if(sundayOpeningsHoursTo === ""){
                setOpeningHoursError("Openings hours fields for all active days cannot be empty or no limit must be set!");
                isOk = false;
            }

            if(sundayOpeningsHoursFrom > sundayOpeningsHoursTo){
                setOpeningHoursError("Opening hour from cannot be later than opening hour to!");
                isOk = false;
            }

        }

        if(!isMondayOpen || isMondayHoursDisabled){
            setMondayOpeningsHoursFrom("");
            setMondayOpeningsHoursTo("");
        }

        if(!isTuesdayOpen || isTuesdayHoursDisabled){
            setTuesdayOpeningsHoursFrom("");
            setTuesdayOpeningsHoursTo("");
        }

        if(!isWednesdayOpen || isWednesdayHoursDisabled){
            setWednesdayOpeningsHoursFrom("");
            setWednesdayOpeningsHoursTo("");
        }

        if(!isThursdayOpen || isThursdayHoursDisabled){
            setThursdayOpeningsHoursFrom("");
            setThursdayOpeningsHoursTo("");
        }

        if(!isFridayOpen || isFridayHoursDisabled){
            setFridayOpeningsHoursFrom("");
            setFridayOpeningsHoursTo("");
        }

        if(!isSaturdayOpen || isSaturdayHoursDisabled){
            setSaturdayOpeningsHoursFrom("");
            setSaturdayOpeningsHoursTo("");
        }

        if(!isSundayOpen || isSundayHoursDisabled){
            setSundayOpeningsHoursFrom("");
            setSundayOpeningsHoursTo("");
        }
        
        return isOk;
        
    };
    
    const otherValidation = () => {
        
        let isOk = true;

        if(!costInputDisabled){

            if(cost < minCost){
                setCostError("Cost cannot be smaller than " + minCost + " or no costs must be set!");
                isOk = false;
            }

            if(cost > maxCost){
                setCostError("Cost cannot be bigger than " + maxCost + " or no costs must be set!");
                isOk = false;
            }

            if(cost === ""){
                setCostError("Both cost fields cannot be empty or no costs must be set!");
                isOk = false;
            }

            if(usageTime === ""){
                setCostError("Both cost fields cannot be empty or no costs must be set!");
                isOk = false;
            }

        }

        if(!ageInputDisabled){

            if(minAge < minMinAge){
                setAgeError("Min age cannot be smaller than " + minMinAge + " or no costs must be set!");
                isOk = false;
            }

            if(minAge > maxMinAge){
                setAgeError("Cost cannot be bigger than " + maxMinAge + " or no costs must be set!");
                isOk = false;
            }

            if(maxAge < minMaxAge){
                setAgeError("Min age cannot be smaller than " + minMaxAge + " or no costs must be set!");
                isOk = false;
            }

            if(maxAge > maxMaxAge){
                setAgeError("Cost cannot be bigger than " + maxMaxAge + " or no costs must be set!");
                isOk = false;
            }

            if(minAge === ""){
                setAgeError("Both age fields cannot be empty or no limit must be set!");
                isOk = false;
            }

            if(maxAge === ""){
                setCostError("Both age fields cannot be empty or no limit must be set!");
                isOk = false;
            }

        }

        if(serviceRating || localizationRating || openingHoursRating || pricesRating)
            if(!(serviceRating && localizationRating &&
                openingHoursRating && pricesRating)){
                setStarRatingsError("All ratings must be filled or all must be empty!");
                isOk = false;
            }

        if(review !== ""){

            if(review.length < minObjectReviewLength){
                setReviewError("Review must be longer than " + minObjectReviewLength + " or empty!");
                isOk = false;
            }

            if(review.length > maxObjectReviewLength){
                setReviewError("Review must be shorter than " + maxObjectReviewLength + " or empty!");
                isOk = false;
            }
        }
        
        return isOk;
        
    };
    
    const formValidation = () => {


        alert(usageTime);

        let isOk = true;
        
        if(!nameValidation())
            isOk = false;
        
        if(!localizationValidation())
            isOk = false;

        if(!openingDaysValidation())
            isOk = false;

        if(!otherValidation ())
            isOk = false;
        
        return isOk;

    };
    
    const createPlaceLocalization = () => {
        
        return  {

            city : city,
            street : street,
            buildingNumber : buildingNumber,
            postalCode : postalCode,
            localizationRemarks : localizationRemarks

        };
        
    };
    
    const createOpeningDays = () => {

        let openingDays = [];

        openingDays = openingDays.concat({
            day : "Monday",
            isOpen : isMondayOpen,
            isOpenTimeLimit : !isMondayHoursDisabled,
            openingHourFrom : mondayOpeningsHoursFrom,
            openingHourTo : mondayOpeningsHoursTo
        });

        openingDays = openingDays.concat({
            day : "Tuesday",
            isOpen : isTuesdayOpen,
            isOpenTimeLimit : !isTuesdayHoursDisabled,
            openingHourFrom : tuesdayOpeningsHoursFrom,
            openingHourTo : tuesdayOpeningsHoursTo
        });

        openingDays = openingDays.concat({
            day : "Wednesday",
            isOpen : isWednesdayOpen,
            isOpenTimeLimit : !isWednesdayHoursDisabled,
            openingHourFrom : wednesdayOpeningsHoursFrom,
            openingHourTo : wednesdayOpeningsHoursTo
        });

        openingDays = openingDays.concat({
            day : "Thursday",
            isOpen : isThursdayOpen,
            isOpenTimeLimit : !isThursdayHoursDisabled,
            openingHourFrom : thursdayOpeningsHoursFrom,
            openingHourTo : thursdayOpeningsHoursTo
        });

        openingDays = openingDays.concat({
            day : "Friday",
            isOpen : isFridayOpen,
            isOpenTimeLimit : !isFridayHoursDisabled,
            openingHourFrom : fridayOpeningsHoursFrom,
            openingHourTo : fridayOpeningsHoursTo
        });

        openingDays = openingDays.concat({
            day : "Saturday",
            isOpen : isSaturdayOpen,
            isOpenTimeLimit : !isSaturdayHoursDisabled,
            openingHourFrom : saturdayOpeningsHoursFrom,
            openingHourTo : saturdayOpeningsHoursTo
        });

        openingDays = openingDays.concat({
            day : "Sunday",
            isOpen : isSundayOpen,
            isOpenTimeLimit : !isSundayHoursDisabled,
            openingHourFrom : sundayOpeningsHoursFrom,
            openingHourTo : sundayOpeningsHoursTo
        });

        return openingDays;

    };

    const createRatings = () => {

        let ratings = [];

        ratings =  ratings.concat({
            category : "Service",
            rating : serviceRating
        });

        ratings =  ratings.concat({
            category : "Price",
            rating : pricesRating
        });

        ratings =  ratings.concat({
            category : "Localization",
            rating : localizationRating
        });

        ratings =  ratings.concat({
            category : "Opening Hours",
            rating : openingHoursRating
        });

        return ratings;

    };

    const onFormSubmit = () => {

        if(formValidation()){

            let openingDays = createOpeningDays();

            let placeLocalization = createPlaceLocalization();

            let ratings = createRatings();


            addPlaceFetch(name,discipline,placeLocalization,
                openingDays,cost,usageTime,minAge,maxAge,ratings,review);



        }

    };

    return(

        <Container className={"col-10"}>

            <Form>

                <h className={"CategoryHeader"}>General information</h>

                <Form.Group>

                    <Form.Label className={"FormLabel mt-3"}>Name</Form.Label>

                    <h className={"ErrorHeader ml-4"}>{nameError}</h>

                    <Form.Control
                        className={"FormInputField"}
                        type="text"
                        placeholder="Please, enter place name..."
                        onChange = {(e) => setName(e.target.value)}
                    />

                </Form.Group>

                <Form.Group>

                    <Form.Label className={"FormLabel"}>Localization</Form.Label>

                    <h className={"ErrorHeader ml-4"}>{localizationError}</h>

                    <Row>

                        <Col className={"col-md-3 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                className={"FormInputField"}
                                type="text"
                                placeholder="City..."
                                onChange = {(e) => setCity(e.target.value)}
                            />
                        </Col>

                        <Col className={"col-md-3 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                className={"FormInputField"}
                                type="text"
                                placeholder="Street... (optional)"
                                onChange = {(e) => setStreet(e.target.value)}
                            />
                        </Col>

                        <Col className={"col-md-3 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                className={"FormInputField"}
                                type="text"
                                placeholder="Number... (optional)"
                                onChange = {(e) => setBuildingNumber(e.target.value)}
                            />
                        </Col>

                        <Col className={"col-md-3 col-12"}>
                            <Form.Control
                                className={"FormInputField"}
                                type="text"
                                placeholder="Postal code... (optional)"
                                onChange = {(e) => setPostalCode(e.target.value)}
                            />
                        </Col>

                    </Row>

                </Form.Group>

                <Form.Group>

                    <Form.Label className={"FormLabel"}>Localization Remarks</Form.Label>

                    <h className={"ErrorHeader ml-4"}>{localizationRemarksError}</h>

                    <Form.Control
                        className={"FormInputField"}
                        placeholder = {"Make it easier for others to find this place... (optional)"}
                        as="textarea"
                        rows="3"
                        onChange = {(e) => setLocalizationRemarks(e.target.value)}
                    />

                </Form.Group>

                <Form.Group className={""}>

                    <Form.Label className={"FormLabel"}>Discipline</Form.Label>

                    <Form.Control
                        as="select"
                        className={"FormInputField"}
                        onChange = {(e) => setDiscipline(e.target.value)}
                    >
                        {disciplineItems.map(item =>
                            <option
                                key={item.discipline}
                                value={item.discipline}
                            >
                                {item.discipline}
                            </option>
                        )};

                    </Form.Control>

                </Form.Group>

                <h className={"CategoryHeader"}>Detailed Information</h>

                <Form.Group>

                    <Form.Label className={"FormLabel mt-3"}>Opening Days</Form.Label>

                    <h className={"ErrorHeader ml-4"}>{openingHoursError}</h>

                    <Row className={"mb-3"}>

                        <Col className={"col-md-2"}>
                            <Button
                                id={"MondayButton"}
                                className={"WeekDayButton col-12"}
                                variant={"outline-primary"}
                                onClick = {() => setIsMondayOpen(!isMondayOpen)}
                            >
                                Monday
                            </Button>
                        </Col>

                        <Col className={"col-md-4 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                disabled = {!isMondayOpen || isMondayHoursDisabled}
                                className={"FormInputField"}
                                type="time"
                                min="0"
                                onChange = {(e) => setMondayOpeningsHoursFrom(e.target.value)}
                            />
                        </Col>

                        <Col className={"col-md-4 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                disabled = {!isMondayOpen || isMondayHoursDisabled}
                                className={"FormInputField"}
                                type="time"
                                min="0"
                                placeholder="People number..."
                                onChange = {(e) => setMondayOpeningsHoursTo(e.target.value)}
                            />
                        </Col>

                        <Col className={"d-flex align-items-center"}>
                            <Form.Check
                                disabled = {!isMondayOpen}
                                id="formRadio"
                                name="formRadio"
                                type="checkbox"
                                label={"No limit"}
                                className={""}
                                onChange = {() => setIsMondayHoursDisabled(!isMondayHoursDisabled)}
                            />
                        </Col>



                    </Row>

                    <Row className={"mb-3"}>

                        <Col className={"col-md-2"}>
                            <Button
                                id={"TuesdayButton"}
                                className={"WeekDayButton col-12"}
                                variant={"outline-primary"}
                                onClick = {() => setIsTuesdayOpen(!isTuesdayOpen)}
                            >
                                Tuesday
                            </Button>
                        </Col>

                        <Col className={"col-md-4 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                disabled = {!isTuesdayOpen || isTuesdayHoursDisabled}
                                className={"FormInputField"}
                                type="time"
                                min="0"
                                onChange = {(e) => setTuesdayOpeningsHoursFrom(e.target.value)}
                            />
                        </Col>

                        <Col className={"col-md-4 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                disabled = {!isTuesdayOpen || isTuesdayHoursDisabled}
                                className={"FormInputField"}
                                type="time"
                                min="0"
                                placeholder="People number..."
                                onChange = {(e) => setTuesdayOpeningsHoursTo(e.target.value)}
                            />
                        </Col>

                        <Col className={"d-flex align-items-center"}>
                            <Form.Check
                                disabled = {!isTuesdayOpen}
                                id="formRadio"
                                name="formRadio"
                                type="checkbox"
                                label={"No limit"}
                                className={""}
                                onChange = {() => setIsTuesdayHoursDisabled(!isTuesdayHoursDisabled)}
                            />
                        </Col>



                    </Row>

                    <Row className={"mb-3"}>

                        <Col className={"col-md-2"}>
                            <Button
                                id={"WednesdayButton"}
                                className={"WeekDayButton col-12"}
                                variant={"outline-primary"}
                                onClick = {() => setIsWednesdayOpen(!isWednesdayOpen)}
                            >
                                Wednesday
                            </Button>
                        </Col>

                        <Col className={"col-md-4 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                disabled = {!isWednesdayOpen || isWednesdayHoursDisabled}
                                className={"FormInputField"}
                                type="time"
                                min="0"
                                onChange = {(e) => setWednesdayOpeningsHoursFrom(e.target.value)}
                            />
                        </Col>

                        <Col className={"col-md-4 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                disabled = {!isWednesdayOpen || isWednesdayHoursDisabled}
                                className={"FormInputField"}
                                type="time"
                                min="0"
                                placeholder="People number..."
                                onChange = {(e) => setWednesdayOpeningsHoursTo(e.target.value)}
                            />
                        </Col>

                        <Col className={"d-flex align-items-center"}>
                            <Form.Check
                                disabled = {!isWednesdayOpen}
                                id="formRadio"
                                name="formRadio"
                                type="checkbox"
                                label={"No limit"}
                                className={""}
                                onChange = {() => setIsWednesdayHoursDisabled(!isWednesdayHoursDisabled)}
                            />
                        </Col>



                    </Row>

                    <Row className={"mb-3"}>

                        <Col className={"col-md-2"}>
                            <Button
                                id={"ThursdayButton"}
                                className={"WeekDayButton col-12"}
                                variant={"outline-primary"}
                                onClick = {() => setIsThursdayOpen(!isThursdayOpen)}
                            >
                                Thursday
                            </Button>
                        </Col>

                        <Col className={"col-md-4 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                disabled = {!isThursdayOpen || isThursdayHoursDisabled}
                                className={"FormInputField"}
                                type="time"
                                min="0"
                                onChange = {(e) => setThursdayOpeningsHoursFrom(e.target.value)}
                            />
                        </Col>

                        <Col className={"col-md-4 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                disabled = {!isThursdayOpen || isThursdayHoursDisabled}
                                className={"FormInputField"}
                                type="time"
                                min="0"
                                placeholder="People number..."
                                onChange = {(e) => setThursdayOpeningsHoursTo(e.target.value)}
                            />
                        </Col>

                        <Col className={"d-flex align-items-center"}>
                            <Form.Check
                                disabled = {!isThursdayOpen}
                                id="formRadio"
                                name="formRadio"
                                type="checkbox"
                                label={"No limit"}
                                className={""}
                                onChange = {() => setIsThursdayHoursDisabled(!isThursdayHoursDisabled)}
                            />
                        </Col>



                    </Row>

                    <Row className={"mb-3"}>

                        <Col className={"col-md-2"}>
                            <Button
                                id={"FridayButton"}
                                className={"WeekDayButton col-12"}
                                variant={"outline-primary"}
                                onClick = {() => setIsFridayOpen(!isFridayOpen)}
                            >
                                Friday
                            </Button>
                        </Col>

                        <Col className={"col-md-4 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                disabled = {!isFridayOpen || isFridayHoursDisabled}
                                className={"FormInputField"}
                                type="time"
                                min="0"
                                onChange = {(e) => setFridayOpeningsHoursFrom(e.target.value)}
                            />
                        </Col>

                        <Col className={"col-md-4 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                disabled = {!isFridayOpen || isFridayHoursDisabled}
                                className={"FormInputField"}
                                type="time"
                                min="0"
                                placeholder="People number..."
                                onChange = {(e) => setFridayOpeningsHoursTo(e.target.value)}
                            />
                        </Col>

                        <Col className={"d-flex align-items-center"}>
                            <Form.Check
                                disabled = {!isFridayOpen}
                                id="formRadio"
                                name="formRadio"
                                type="checkbox"
                                label={"No limit"}
                                className={""}
                                onChange = {() => setIsFridayHoursDisabled(!isFridayHoursDisabled)}
                            />
                        </Col>



                    </Row>

                    <Row className={"mb-3"}>

                        <Col className={"col-md-2"}>
                            <Button
                                id={"SaturdayButton"}
                                className={"WeekDayButton col-12"}
                                variant={"outline-primary"}
                                onClick = {() => setIsSaturdayOpen(!isSaturdayOpen)}
                            >
                                Saturday
                            </Button>
                        </Col>

                        <Col className={"col-md-4 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                disabled = {!isSaturdayOpen || isSaturdayHoursDisabled}
                                className={"FormInputField"}
                                type="time"
                                min="0"
                                onChange = {(e) => setSaturdayOpeningsHoursFrom(e.target.value)}
                            />
                        </Col>

                        <Col className={"col-md-4 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                disabled = {!isSaturdayOpen || isSaturdayHoursDisabled}
                                className={"FormInputField"}
                                type="time"
                                min="0"
                                placeholder="People number..."
                                onChange = {(e) => setSaturdayOpeningsHoursTo(e.target.value)}
                            />
                        </Col>

                        <Col className={"d-flex align-items-center"}>
                            <Form.Check
                                disabled = {!isSaturdayOpen}
                                id="formRadio"
                                name="formRadio"
                                type="checkbox"
                                label={"No limit"}
                                className={""}
                                onChange = {() => setIsSaturdayHoursDisabled(!isSaturdayHoursDisabled)}
                            />
                        </Col>



                    </Row>

                    <Row className={"mb-3"}>

                        <Col className={"col-md-2"}>
                            <Button
                                id={"SundayButton"}
                                className={"WeekDayButton col-12"}
                                variant={"outline-primary"}
                                onClick = {() => setIsSundayOpen(!isSundayOpen)}
                            >
                                Sunday
                            </Button>
                        </Col>

                        <Col className={"col-md-4 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                disabled = {!isSundayOpen || isSundayHoursDisabled}
                                className={"FormInputField"}
                                type="time"
                                min="0"
                                onChange = {(e) => setSundayOpeningsHoursFrom(e.target.value)}
                            />
                        </Col>

                        <Col className={"col-md-4 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                disabled = {!isSundayOpen || isSundayHoursDisabled}
                                className={"FormInputField"}
                                type="time"
                                min="0"
                                placeholder="People number..."
                                onChange = {(e) => setSundayOpeningsHoursTo(e.target.value)}
                            />
                        </Col>

                        <Col className={"d-flex align-items-center"}>
                            <Form.Check
                                disabled = {!isSundayOpen}
                                id="formRadio"
                                name="formRadio"
                                type="checkbox"
                                label={"No limit"}
                                className={""}
                                onChange = {() => setIsSundayHoursDisabled(!isSundayHoursDisabled)}
                            />
                        </Col>



                    </Row>

                </Form.Group>

                <Form.Group controlId="placeCosts">

                    <Form.Label className={"FormLabel"}>Included costs</Form.Label>

                    <h className={"ErrorHeader ml-4"}>{costError}</h>

                    <Row>

                        <Col className={"col-md-5 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                disabled = {costInputDisabled}
                                type="number"
                                min="0"
                                step="0.1"
                                className={"FormInputField"}
                                placeholder="Price in PLN..."
                                onChange = {(e) => setCost(e.target.value)}
                            />
                        </Col>

                        <Col className={"col-md-5 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                disabled = {costInputDisabled}
                                type="number"
                                min="0"
                                step="0.5"
                                className={"FormInputField"}
                                placeholder="Usage time in hours..."
                                onChange = {(e) => setUsageTime(e.target.value)}
                            />
                        </Col>

                        <Col className={"d-flex align-items-center"}>
                            <Form.Check
                                id="formRadio"
                                name="formRadio"
                                type="checkbox"
                                label={"No costs"}
                                className={""}
                                onChange = {() => setCostInputDisabled(!costInputDisabled)}
                            />
                        </Col>



                    </Row>

                </Form.Group>

                <Form.Group>

                    <Form.Label className={"FormLabel"}>Age range</Form.Label>

                    <h className={"ErrorHeader ml-4"}>{ageError}</h>

                    <Row>

                        <Col className={"col-md-5 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                disabled = {ageInputDisabled}
                                type="number"
                                min="1"
                                max="100"
                                className={"FormInputField"}
                                placeholder="Min age..."
                                onChange = {(e) => setMinAge(e.target.value)}
                            />
                        </Col>

                        <Col className={"col-md-5 col-12 mb-md-0 mb-3"}>
                            <Form.Control
                                disabled = {ageInputDisabled}
                                type="number"
                                min="1"
                                max="100"
                                className={"FormInputField"}
                                placeholder="Max age..."
                                onChange = {(e) => setMaxAge(e.target.value)}
                            />
                        </Col>

                        <Col className={"d-flex align-items-center"}>
                            <Form.Check
                                id="formRadio"
                                name="formRadio"
                                type="checkbox"
                                label={"No limit"}
                                className={""}
                                onChange = {() => setAgeInputDisabled(!ageInputDisabled)}
                            />
                        </Col>

                    </Row>

                </Form.Group>

                <h className={"CategoryHeader"}>Ratings & Review</h>

                <Form.Group >

                    <Form.Label className={"FormLabel mt-3"}>Ratings</Form.Label>

                    <h className={"ErrorHeader ml-4"}>{starRatingsError}</h>

                    <Review id={"reviewOne"} title={"Service"} onChange = {(newRating) => setServiceRating(newRating)}/>
                    <Review id={"reviewTwo"} title={"Localization"} onChange = {(newRating) => setLocalizationRating(newRating)}/>
                    <Review id={"reviewThree"} title={"Prices"} onChange = {(newRating) => setPricesRating(newRating)}/>
                    <Review id={"reviewFour"} title={"Opening hours"} onChange = {(newRating) => setOpeningHoursRating(newRating)}/>

                </Form.Group>

                <Form.Group>

                    <Form.Label className={"FormLabel"}>Review</Form.Label>

                    <h className={"ErrorHeader ml-4"}>{reviewError}</h>

                    <Form.Control
                        className={"FormInputField"}
                        as="textarea"
                        rows="6"
                        placeholder = {"Tell us about your experience... (optional)"}
                        onChange = {(e) => setReview(e.target.value)}
                    />

                </Form.Group>

                <h className={"CategoryHeader"}>Additional elements</h>

                <Form.Group controlId="exampleForm.ControlInput1">

                    <Form.Label className={"FormLabel mt-3"} >Images</Form.Label>

                    <ImageUploader
                        className={"imageEventUploader"}
                        withIcon={false}
                        buttonText='Choose place images'
                        onChange={(pic) => setImages(pic)}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        withPreview = {true}
                        label=""
                    />

                </Form.Group>

                <Button
                    variant="primary"
                    className={"d-md-inline d-none w-50 createEventSubmitButton mt-5"}
                    onClick={onFormSubmit}
                >
                    Create Event
                </Button>

                <Button
                    variant="primary"
                    className={"d-md-none d-inline w-100 createEventSubmitButton mt-3"}
                    onClick={onFormSubmit}
                >
                    Create Event
                </Button>

            </Form>

        </Container>

    );

}