import React, {Component, useEffect, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import {Form, FormControl, InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../../../styles/display-events/search-bar/EventsSearchBar.css"
import DisciplineSearchTab from "../search-tabs/DisciplineSearchTab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function EventsSearchBar(){

    const [keyword,setKeyword] = useState("");
    const [localization,setLocalization] = useState("");

    const [showDisciplineTab, setShowDisciplineTab] = useState(false);

    useEffect(() => {

        if(showDisciplineTab){
            document.getElementById("kot").style.background= "#007bff";
            document.getElementById("kot").style.color= "white";
        }

        if(!showDisciplineTab){
            document.getElementById("kot").style.background= "white";
            document.getElementById("kot").style.color= "#007bff";
        }



    });



    const [showDateTab, setShowDateTab] = useState(false);
    const [showPeopleNumberTab, setShowPeopleNumberTab] = useState(false);
    const [showAgeTab, setShowAgeTab] = useState(false);
    const [showGenderTab, setShowGenderTab] = useState(false);
    const [showCostsTab, setShowCostsTab] = useState(false);

    const [disciplineButton,setDisciplineButton] = useState(false);

    const onFormSubmit = () => {alert(keyword); }

    const onButtonClick = (id) => {

        setShowDisciplineTab(!showDisciplineTab);





    }

    return(

            <Navbar
                className="bg-light d-flex flex-column sticky-top SearchBar"
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
                            id={"kot"}
                            className={"eventSearchbarButton"}
                            variant={"outline-primary"}
                            onClick={() => setShowDisciplineTab(!showDisciplineTab)}
                        >Discipline
                        </Button>

                        <Button
                            className={"eventSearchbarButton"}
                            variant={"outline-primary"}
                            onClick={() => setShowDateTab(!showDateTab)}
                        >Date
                        </Button>

                        <Button
                            className={"eventSearchbarButton"}
                            variant={"outline-primary"}
                            onClick={() => setShowPeopleNumberTab(!showPeopleNumberTab)}
                        >People number
                        </Button>

                        <Button
                            className={"eventSearchbarButton"}
                            variant={"outline-primary"}
                            onClick={() => setShowAgeTab(!showAgeTab)}
                        >Age
                        </Button>

                        <Button
                            className={"eventSearchbarButton"}
                            variant={"outline-primary"}
                            onClick={() => setShowGenderTab(!showGenderTab)}
                        >Gender
                        </Button>

                        <Button
                            className={"eventSearchbarButton"}
                            variant={"outline-primary"}
                            onClick={() => setShowCostsTab(!showCostsTab)}
                        >Gender
                        </Button>

                    </Row>

                    <Row>

                        <DisciplineSearchTab id={"disciplineSearchTab"} show={showDisciplineTab}/>



                    </Row>



                </Col>

            </Navbar>

        );


}

