import React, {Component, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import {Form, FormControl, InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import "../../styles/display-events/SearchBar.css"
import OutsideAlerter from "./SearchFilter";
import SearchTab from "./SearchTab";

export default function EventsSearchBar(){

    const [keyword,setKeyword] = useState("");
    const [localization,setLocalization] = useState("");

    const [showTab, setShowTab] = useState(false);

    const onFormSubmit = () => {alert(keyword); }


    return(

            <Navbar className="bg-light d-flex flex-column sticky-top SearchBar" collapseOnSelect expand="md">

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

                <OutsideAlerter id={"kot"}/>

                <Button onClick={() => setShowTab(true)} variant={"primary"}>Click me</Button>

                <SearchTab show={showTab}/>

            </Navbar>

        );


}

