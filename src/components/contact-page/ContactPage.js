import React, {Component} from "react";

import "../../styles/contact-page/ContactPage.css"
import Container from "react-bootstrap/Container";
import {Form} from "react-bootstrap";

class ContactPage extends Component{

    render(){

        return(

            <div className={"contactContainer d-flex flex-column align-items-center"}>

                <div className={"contactTexts d-flex flex-column align-items-center col-md-6 col-12"}>

                    <div className={"d-flex flex-md-row flex-column align-items-center mb-2"}>

                        <h className={"contactHeader mr-md-1 mr-0"}>Have any problem? </h>
                        <h className={"contactHeader"}> Contact us!</h>

                    </div>



                    <p className={"contactParagraph"}>

                        If you experienced any difficulties or you just have
                        some questions about our app, feel free to send us a message
                        with your problem description.

                        You can be sure our team will consider and help you with
                        every issue.


                    </p>

                </div>

                <div className={"contactForm col-md-6 col-12"}>
                    <Form>

                        <Form.Group controlId="contactForm.email">
                            <Form.Label>Your email address</Form.Label>
                            <Form.Control type="email" placeholder="Email address..." />
                        </Form.Group>

                        <Form.Group controlId="contactForm.subject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control as="select">
                                <option>Subject One</option>
                                <option>Subject Two</option>
                                <option>Subject Three</option>
                                <option>Subject Four</option>
                                <option>Subject FIve</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="contactForm.message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>

                    </Form>
                </div>










            </div>









        );



    }

}

export default ContactPage;