import React, {Component, useState} from "react";
import InputGroup from "react-bootstrap/esm/InputGroup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import FormControl from "react-bootstrap/esm/FormControl";
import Button from "react-bootstrap/esm/Button";

import "../../styles/forgot-password/ForgotPasswordForm.css"
import Modal from "react-bootstrap/Modal";

export default function ForgotPasswordForm(props){

    const [email,setEmail] = useState("");
    const [emailSent,setEmailSent] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onFormSubmit = () => {
        alert(email);

       handleShow();

    }

        return(

            <div className={"ForgotPasswordFormContainer"}>

                <InputGroup className="mb-3 col-md-6 col-12">

                    <InputGroup.Prepend>
                        <InputGroup.Text id="emailInputText">
                            <FontAwesomeIcon id="email-icon" icon={faEnvelope}/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl
                        type="email"
                        placeholder="Please, write your trusted email..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                </InputGroup>

                <div className={"ForgotPasswordButtons col-md-6 col-12"}>

                    <Button
                        variant="success"
                        onClick={onFormSubmit}
                        className="sendButton mr-3 col-md-3 col-6"
                    >
                        Send
                    </Button>

                    <Button href={"/home"}
                            variant="secondary"
                            onClick={props.closeSignUpModal}
                            className="closeButton col-md-2 col-5"

                    >
                        Close
                    </Button>

                </div>

                <Modal show={show} onHide={handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>New password sent</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>New password has been sent on email you gave.</Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>



            </div>



        );


}

