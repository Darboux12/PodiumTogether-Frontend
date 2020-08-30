import React, {Component} from "react";
import Navbar from "react-bootstrap/esm/Navbar";
import Nav from "react-bootstrap/esm/Nav";

import Container from "react-bootstrap/esm/Container";
import {Link} from "react-router-dom";

import "../../styles/footer/Footer.css"

class Footer extends Component {

    render() {


        return (
            <Navbar className="footer justify-content-between" bg={"dark"} variant={"dark"}>
                <Nav>
                    <Nav.Item>
                        <Link to={""} className="nav-link">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={""} className="nav-link">About</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={""} className="nav-link">Contact</Link>
                    </Nav.Item>
                </Nav>

               <h>Hej</h>


            </Navbar>



        );

    }

}

export default Footer;