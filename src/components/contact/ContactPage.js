import React, {Component, useEffect, useState} from "react";
import "../../styles/contact-page/ContactPage.css"
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {serverAddress} from "../config/Constants";
import {findAllSubjectEndpoint} from "../config/Constants";
import {addContactEndpoint} from "../config/Constants";
import * as emailValidator from "email-validator";
import {maxEmailLength} from "../config/Limits";
import {minContactMessageLength} from "../config/Limits";
import {maxContactMessageLength} from "../config/Limits";
import SubmitModal from "../common/SubmitModal";
import SignInModal from "../navbar/modals/SignInModal";

export default function ContactPage(){

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [emailError,setEmailError] = useState("");
    const [subjectError,setSubjectError] = useState("");
    const [messageError,setMessageError] = useState("");

    const [isLoaded, setIsLoaded] = useState(false);
    const [subjectItems, setSubjectItems] = useState([]);

    const [submitModalVisible,setSubmitModalVisible] = useState(false);

    useEffect(() => {

        fetch(serverAddress + findAllSubjectEndpoint)
            .then(res => res.json())
            .then(res => {

                setIsLoaded(true);
                setSubjectItems(res);

                setSubject(res[0].subject);

            })

    },[]);

    const onFormSubmit = () => {

        setEmailError("");
        setMessageError("");
        setSubjectError("");

        if(email === "")
            setEmailError("Email cannot be empty!");

        if(subject === "")
            setSubjectError("Subject cannot be empty!");

        if(message === "")
            setMessageError("Message cannot be empty!");

        if(!emailValidator.validate(email))
            setEmailError("This is not valid email address!");

        if(email.length > maxEmailLength)
            setEmailError("Email cannot be longer than " + maxEmailLength + " signs !");

        if(message.length < minContactMessageLength)
            setMessageError("Message cannot be shorter than " + minContactMessageLength + " signs !");

        if(message.length > maxContactMessageLength)
            setMessageError("Message cannot be longer than " + maxContactMessageLength + "signs !");

        const PostUrl = serverAddress + addContactEndpoint;

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


        if(emailError === "" && subjectError === "" && messageError === "")
        fetch(PostUrl,requestOptions)
            .then((res) => {

                if (res.ok){
                    setSubmitModalVisible(true);
                }

               else return res.json();
            })

            .then(res => {

                console.log(res);
            })




    };

        return(

            <Container className={"col-md-8 col-11 ContactContainer"}>

                <Row className={"ContactUpperRow"}>

                    <Col className={""}>

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

                    </Col>

                </Row>

                <Row className={"ContactLowerRow mt-4"}>

                    <Col>

                        <Form>

                            <Form.Group controlId="contactForm.email">
                                        <Form.Label className={"contactInputLabel"}>Your email address</Form.Label>
                                        <h className={"ErrorHeader ml-3"}>{emailError}</h>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email address..."
                                            onChange = {(e) => setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="contactForm.subject">
                                <Form.Label className={"contactInputLabel"}>Subject</Form.Label>
                                <h className={"ErrorHeader ml-3"}>{subjectError}</h>
                                <Form.Control as="select" onChange = {(e) => setSubject(e.target.value)}>
                                            {subjectItems.map(item =>
                                                <option key={item.subject} value={item.subject}>{item.subject}</option>
                                            )};
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="contactForm.message">
                                <Form.Label className={"contactInputLabel"}>Message</Form.Label>
                                <h className={"ErrorHeader ml-3"}>{messageError}</h>
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
                            className="signInModalButton mb-3 col-md-6 col-12"
                        >
                            Send

                        </Button>

                    </Col>

                </Row>

                <SubmitModal
                    isSubmitModalVisible={submitModalVisible}
                    closeSubmitModal={() => setSubmitModalVisible(false)}
                    text = "Contact request"
                />



            </Container>

        );
}

