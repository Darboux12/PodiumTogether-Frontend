import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import {Form, FormControl, InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

class EventsSearchBar extends Component{

    render(){
        return(

            <Navbar className="bg-light d-flex flex-column" collapseOnSelect expand="md" sticky="top">

                <Form inline className={"w-100 d-flex flex-row mb-3"}>
                    <FormControl type="text" placeholder="Event title, discipline, key word..." className={"col-3 mr-sm-3 "} />
                    <FormControl type="text" placeholder="Country, city, street..." className={"col-3 mr-sm-3"} />
                    <Button type="submit" className={"col-4"}>Submit</Button>
                </Form>

                <Tabs defaultActiveKey="" id="uncontrolled-tab-example" className={"col-12 align-text-center"}>
                    <Tab eventKey="home" title="Home">
                        <h>Hejo H</h>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <h>Hejo</h>
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        <h>Hejo</h>
                    </Tab>
                </Tabs>

            </Navbar>





        );
    }

}

export default EventsSearchBar;