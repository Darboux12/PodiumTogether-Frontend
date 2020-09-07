import React, {Component} from "react";
import Navbar from "react-bootstrap/esm/Navbar";
import Nav from "react-bootstrap/esm/Nav";

import Container from "react-bootstrap/esm/Container";
import {Link} from "react-router-dom";

import "../../styles/footer/Footer.css"
import LogoIcons from "../common/LogoIcons";

export default function Footer(){

        return (

            <Navbar className="footer justify-content-between" bg={"dark"} variant={"dark"}>

                <Nav className={"d-md-flex flex-md-row flex-column"}>
                    <Nav.Item>
                        <Link to={"/home"} className="nav-link">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={"/about"} className="nav-link">About</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={"/contact"} className="nav-link">Contact</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={"/event/create"} className="nav-link">Create Event</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={"/event/display"} className="nav-link">Show events</Link>
                    </Nav.Item>
                </Nav>

                <div className={"d-md-flex d-none"}>
                    <LogoIcons/>
                </div>



            </Navbar>

        );

}

