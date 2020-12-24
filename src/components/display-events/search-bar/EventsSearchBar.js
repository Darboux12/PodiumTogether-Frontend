import React, {Component, useEffect, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import {Form, FormControl, InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../../../styles/display-events/search-bar/EventsSearchBar.css"
import DisciplineSearchTab from "../search-tabs/DisciplineSearchTab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DateSearchTab from "../search-tabs/DateSearchTab";
import PeopleNumberSearchTab from "../search-tabs/PeopleNumberSearchTab";
import AgeSearchTab from "../search-tabs/AgeSearchTab";
import GenderSearchTab from "../search-tabs/GenderSearchTab";
import CostsSearchTab from "../search-tabs/CostsSearchTab";

export default function EventsSearchBar(){

    const eventDisciplineButtonId = "eventDisciplineButton";
    const eventDateButtonId = "eventDateButton";
    const eventPeopleNumberButtonId = "eventPeopleNumberButton";
    const eventAgeButtonId = "eventAgeButton";
    const eventGenderButtonId = "eventGenderButton";
    const eventCostsButtonId = "eventCostsButton";

    const [keyword,setKeyword] = useState("");
    const [localization,setLocalization] = useState("");
    const [footballOption,setFootballOption] = useState(false);
    const [volleyballOption,setVolleyballOption] = useState(false);
    const [joggingOption,setJoggingOption] = useState(false);
    const [basketballOption,setBasketballOption] = useState(false);
    const [swimmingOption,setSwimmingOption] = useState(false);
    const [otherOption,setOtherOption] = useState(false);

    const [dateFrom,setDateFrom] = useState("");
    const [dateTo,setDateTo] = useState("");
    const [timeFrom,setTimeFrom] = useState("");
    const [timeTo,setTimeTo] = useState("");

    const [minPeopleNumber,setMinPeopleNumber] = useState("");
    const [maxPeopleNumber,setMaxPeopleNumber] = useState("");

    const [minAge, setMinAge] = useState("");
    const [maxAge, setMaxAge] = useState("");

    const [maleOption, setMaleOption] = useState(false);
    const [femaleOption, setFemaleOption] = useState(false);
    const [allGenderOption, setAllGenderOption] = useState(false);

    const [minCost,setMinCost] = useState("");
    const [maxCost,setMaxCost] = useState("");

    const [showDisciplineTab, setShowDisciplineTab] = useState(false);
    const [showDateTab, setShowDateTab] = useState(false);
    const [showPeopleNumberTab, setShowPeopleNumberTab] = useState(false);
    const [showAgeTab, setShowAgeTab] = useState(false);
    const [showGenderTab, setShowGenderTab] = useState(false);
    const [showCostsTab, setShowCostsTab] = useState(false);

    const handleTabClick = (e) => {

        handleShowChange(e.target.id);
        handleTabColorChange(e);

    };

    const handleShowChange = (id) => {

        if(id === eventDisciplineButtonId){
            setShowDisciplineTab(!showDisciplineTab);
            setShowDateTab(false);
            setShowPeopleNumberTab(false);
            setShowAgeTab(false);
            setShowGenderTab(false);
            setShowCostsTab(false);
        }

        if(id === eventDateButtonId){
            setShowPeopleNumberTab(false);
            setShowAgeTab(false);
            setShowGenderTab(false);
            setShowCostsTab(false);
            setShowDisciplineTab(false);
            setShowDateTab(!showDateTab);
        }

        if(id === eventGenderButtonId){
            setShowCostsTab(false);
            setShowDisciplineTab(false);
            setShowDateTab(false);
            setShowPeopleNumberTab(false);
            setShowAgeTab(false);
            setShowGenderTab(!showGenderTab);
        }

        if(id === eventPeopleNumberButtonId){
            setShowAgeTab(false);
            setShowGenderTab(false);
            setShowCostsTab(false);
            setShowDisciplineTab(false);
            setShowDateTab(false);
            setShowPeopleNumberTab(!showPeopleNumberTab);
        }

        if(id === eventAgeButtonId){
            setShowGenderTab(false);
            setShowCostsTab(false);
            setShowDisciplineTab(false);
            setShowDateTab(false);
            setShowPeopleNumberTab(false);
            setShowAgeTab(!showAgeTab);
        }

        if(id === eventCostsButtonId){
            setShowDisciplineTab(false);
            setShowDateTab(false);
            setShowPeopleNumberTab(false);
            setShowAgeTab(false);
            setShowGenderTab(false);
            setShowCostsTab(!showCostsTab);
        }

    };

    const handleTabColorChange = (e) => {

        if(e.target.style.backgroundColor !== "rgb(0, 123, 255)"){
            e.target.style.backgroundColor = "rgb(0, 123, 255)";
            e.target.style.color = "white";
        }

        else {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "rgb(0, 123, 255)";
        }

        if(e.target.id !== eventDisciplineButtonId){
            document.getElementById(eventDisciplineButtonId).style.backgroundColor = "white";
            document.getElementById(eventDisciplineButtonId).style.color = "rgb(0, 123, 255)";
        }

        if(e.target.id !== eventDateButtonId){
            document.getElementById(eventDateButtonId).style.backgroundColor = "white";
            document.getElementById(eventDateButtonId).style.color = "rgb(0, 123, 255)";
        }

        if(e.target.id !== eventPeopleNumberButtonId){
            document.getElementById(eventPeopleNumberButtonId).style.backgroundColor = "white";
            document.getElementById(eventPeopleNumberButtonId).style.color = "rgb(0, 123, 255)";
        }

        if(e.target.id !== eventAgeButtonId){
            document.getElementById(eventAgeButtonId).style.backgroundColor = "white";
            document.getElementById(eventAgeButtonId).style.color = "rgb(0, 123, 255)";
        }

        if(e.target.id !== eventGenderButtonId){
            document.getElementById(eventGenderButtonId).style.backgroundColor = "white";
            document.getElementById(eventGenderButtonId).style.color = "rgb(0, 123, 255)";
        }

        if(e.target.id !== eventCostsButtonId){
            document.getElementById(eventCostsButtonId).style.backgroundColor = "white";
            document.getElementById(eventCostsButtonId).style.color = "rgb(0, 123, 255)";
        }


    };

    const onFormSubmit = () => {

        alert(keyword);



    };

    return (


        <Navbar
        className="bg-light d-flex flex-column SearchBar"
        collapseOnSelect
        expand="md"
        >

        <Col>

            <Row>
                <Form inline className={"w-100 d-flex flex-row mb-3"}>
                    <FormControl
                        type="text"
                        placeholder="Event title, discipline, key word..."
                        className={"col-3 mr-sm-3 "}
                        onChange = {(e) => setKeyword(e.target.value)}
                    />
                    <FormControl
                        type="text"
                        placeholder="Country, city, street..."
                        className={"col-3 mr-sm-3"}
                        onChange = {(e) => setLocalization(e.target.value)}
                    />

                    <Button
                        type="submit"
                        className={"col-4"}
                        onClick={onFormSubmit}
                    >Submit
                    </Button>

                </Form>
            </Row>

            <Row className={"align-items-center"}>

                <h className={"filterHeader"}>Filter: </h>

                <Button
                    id={eventDisciplineButtonId}
                    className={"eventSearchBarButton"}
                    variant={"outline-primary"}
                    onClick={(e) => handleTabClick(e)}
                >Discipline
                </Button>

                <Button
                    id={eventDateButtonId}
                    className={"eventSearchBarButton"}
                    variant={"outline-primary"}
                    onClick={(e) => handleTabClick(e)}
                >Date
                </Button>

                <Button
                    id={eventPeopleNumberButtonId}
                    className={"eventSearchBarButton"}
                    variant={"outline-primary"}
                    onClick={(e) => handleTabClick(e)}
                >People number
                </Button>

                <Button
                    id={eventAgeButtonId}
                    className={"eventSearchBarButton"}
                    variant={"outline-primary"}
                    onClick={(e) => handleTabClick(e)}
                >Age
                </Button>

                <Button
                    id={eventGenderButtonId}
                    className={"eventSearchBarButton"}
                    variant={"outline-primary"}
                    onClick={(e) => handleTabClick(e)}
                >Gender
                </Button>

                <Button
                    id={eventCostsButtonId}
                    className={"eventSearchBarButton"}
                    variant={"outline-primary"}
                    onClick={(e) => handleTabClick(e)}
                >Costs
                </Button>



            </Row>

            <Row>

                <DisciplineSearchTab
                    id={"disciplineSearchTab"}
                    show={showDisciplineTab}
                    footballOptionClick = {() => setFootballOption(!footballOption)}
                    footballOption = {footballOption}
                    volleyballOptionClick ={() => setVolleyballOption(!volleyballOption)}
                    volleyballOption = {volleyballOption}
                    joggingOptionClick ={() => setJoggingOption(!joggingOption)}
                    joggingOption = {joggingOption}
                    basketballOptionClick ={() => setBasketballOption(!basketballOption)}
                    basketballOption = {basketballOption}
                    swimmingOptionClick ={() => setSwimmingOption(!swimmingOption)}
                    swimmingOption = {swimmingOption}
                    otherOptionClick ={() => setOtherOption(!otherOption)}
                    otherOption = {otherOption}
                />

                <DateSearchTab
                    id={"dateSearchTab"}
                    show = {showDateTab}
                    dateFromOnChange = {(date) => setDateFrom(date)}
                    dateFrom = {dateFrom}
                    dateToOnChange = {(date) => setDateTo(date)}
                    dateTo = {dateTo}
                    timeFromOnChange = {(time) => setTimeFrom(time)}
                    timeFrom = {timeFrom}
                    timeToOnChange = {(time) => setTimeTo(time)}
                    timeTo = {timeTo}

                />

                <PeopleNumberSearchTab
                    id={"peopleNumberSearchTab"}
                    show = {showPeopleNumberTab}
                    minPeopleNumberOnChange = {(min) => setMinPeopleNumber(min)}
                    minPeopleNumber = {minPeopleNumber}
                    maxPeopleNumberOnChange = {(max) => setMaxPeopleNumber(max)}
                    maxPeopleNumber = {maxPeopleNumber}
                />

                <AgeSearchTab
                    id={"ageSearchTab"}
                    show = {showAgeTab}
                    minAgeOnChange = {(min) => setMinAge(min)}
                    minAge = {minAge}
                    maxAgeOnChange = {(max) => setMaxAge(max)}
                    maxAge = {maxAge}
                />

                <GenderSearchTab
                    id={"genderSearchTab"}
                    show={showGenderTab}
                    maleOptionClick = {() => setMaleOption(!maleOption)}
                    maleOption = {maleOption}
                    femaleOptionClick = {() => setFemaleOption(!femaleOption)}
                    femaleOption = {femaleOption}
                    allGenderOptionClick = {() => setAllGenderOption(!allGenderOption)}
                    allGenderOption = {allGenderOption}
                />

                <CostsSearchTab
                    id={"costsSearchTab"}
                    show={showCostsTab}
                    minCostsOptionOnChange = {(min) => setMinCost(min)}
                    minCosts = {minCost}
                    maxCostsOptionOnChange = {(max) => setMaxCost(max)}
                    maxCosts = {maxCost}

                />

            </Row>


        </Col>

    </Navbar>);


}

