import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

class Footer extends Component {

    render() {


        return (



            <Navbar className="justify-content-between" bg={"dark"} variant={"dark"}>
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