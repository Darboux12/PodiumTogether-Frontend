import React, {Component, useEffect, useState} from "react";
import "../../styles/contact-page/ContactPage.css"
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function ContactPage(){

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("v1");
    const [message, setMessage] = useState("");

    const [isLoaded, setIsLoaded] = useState(false);
    const [subjectItems, setSubjectItems] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8080/subject/get/all')
            .then(res => res.json())
            .then(res => {

                setIsLoaded(true);
                setSubjectItems(res);

            })

    });

    const onFormSubmit = () => {

        const PostUrl = 'http://localhost:8080/contact/add';

        const contactRequest = {
            userEmail: email,
            subject: subject,
            message: message
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contactRequest)
        };

        alert("Fetch try");


        fetch(PostUrl,requestOptions)

            .then((res) => {

                if (res.ok){
                    alert("Response ok");
                }


            })


    };

        return(

            <div className={"contactContainer d-flex flex-column align-items-center"}>

                <div className={"contactMain"}>


                <div className={"contactTexts d-flex flex-column align-items-center col-md-10 col-12"}>

                    <div className={"d-flex flex-column align-items-center mb-2"}>

                        <h className={"contactHeader"}>Contact us</h>

                    </div>

                    <p className={"contactParagraph"}>

                        If you experienced any difficulties or you just have
                        some questions about our app, feel free to send us a message
                        with your problem description.

                        <br/><br/>

                        You can be sure our team will consider individually your issue and help you with
                        it!

                    </p>

                </div>

                <div className={"contactForm col-md-6 col-12"}>

                    <Form>

                        <Form.Group controlId="contactForm.email">
                            <Form.Label className={"contactInputLabel"}>Your email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email address..."
                                onChange = {(e) => setEmail(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="contactForm.subject">
                            <Form.Label className={"contactInputLabel"}>Subject</Form.Label>
                            <Form.Control as="select" onChange = {(e) => setSubject(e.target.value)}>
                                {subjectItems.map(item =>
                                    <option key={item.name} value={item.name}>{item.name}</option>
                                )};
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="contactForm.message">
                            <Form.Label className={"contactInputLabel"}>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="6"
                                onChange = {(e) => setMessage(e.target.value)}/>
                        </Form.Group>

                    </Form>

                    <Button
                        type={"submit"}
                        variant="primary"
                        onClick={onFormSubmit}
                        className="signInModalButton mb-3"
                    >
                        Send

                    </Button>

                </div>

                </div>

            </div>

        );
}

