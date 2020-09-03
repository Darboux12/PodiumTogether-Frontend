import React, {Component, useState} from "react";
import InputGroup from "react-bootstrap/esm/InputGroup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons/index";
import FormControl from "react-bootstrap/esm/FormControl";
import {faGlobeEurope, faUnlock, faUser} from "@fortawesome/free-solid-svg-icons/index";
import {faCalendarDay} from "@fortawesome/free-solid-svg-icons/faCalendarDay";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

import "../../styles/forgot-password/ForgotPasswordForm.css"

export default function ForgotPasswordForm(props){

    const [email,setEmail] = useState("");

    const onFormSubmit = () => {alert(email); }

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

            </div>



        );


}

