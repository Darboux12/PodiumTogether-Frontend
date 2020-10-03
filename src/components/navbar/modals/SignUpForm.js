import React, {Component, useState} from "react";
import InputGroup from "react-bootstrap/esm/InputGroup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobeEurope, faUnlock, faUser} from "@fortawesome/free-solid-svg-icons";
import FormControl from "react-bootstrap/esm/FormControl";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import {faCalendar, faCalendarAlt, faEnvelope, faFlag} from "@fortawesome/free-regular-svg-icons";
import {faCalendarDay} from "@fortawesome/free-solid-svg-icons/faCalendarDay";
import Form from 'react-bootstrap/Form'

export default function SignUpForm(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [repeatPassword,setRepeatPassword] = useState("");
    const [username,setUsername] = useState("");
    const [birthday,setBirthday] = useState("");
    const [country,setCountry] = useState("");
    const [termsAgreement,setTermsAgreement] = useState(false);

    const onFormSubmit = () => {alert(termsAgreement);}

        return(

            <Container>

                <InputGroup className="mb-3">

                    <InputGroup.Prepend>
                        <InputGroup.Text id="emailInputText">
                            <FontAwesomeIcon id="email-icon" icon={faEnvelope}/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl
                        type="email"
                        placeholder="Please, write your email..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">

                    <InputGroup.Prepend>
                        <InputGroup.Text id="passwordInputText">
                            <FontAwesomeIcon id="password-icon" icon={faUnlock}/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl
                        type="password"
                        placeholder="Please, write your password..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">

                    <InputGroup.Prepend>
                        <InputGroup.Text id="passwordInputText">
                            <FontAwesomeIcon id="password-icon" icon={faUnlock}/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl
                        type="password"
                        placeholder="Please, repeat your password..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange = {(e) => setRepeatPassword(e.target.value)}

                    />
                </InputGroup>

                <InputGroup className="mb-3">

                    <InputGroup.Prepend>
                        <InputGroup.Text id="usernameInputText">
                            <FontAwesomeIcon id="username-icon" icon={faUser}/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl
                        placeholder="Please, write your username..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange = {(e) => setUsername(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">

                    <InputGroup.Prepend>
                        <InputGroup.Text id="birthDateInputText">
                            <FontAwesomeIcon id="birthDate-icon" icon={faCalendarDay}/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl type="date"
                        placeholder="Please, write your birth date..."
                        aria-label="birthDate"
                        aria-describedby="basic-addon1"
                        onChange = {(e) => setBirthday(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">

                    <InputGroup.Prepend>
                        <InputGroup.Text id="countryInputText">
                            <FontAwesomeIcon id="country-icon" icon={faGlobeEurope}/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl
                                 placeholder="Please, write your country..."
                                 aria-label="Country"
                                 aria-describedby="basic-addon1"
                                 onChange = {(e) => setCountry(e.target.value)}
                    />
                </InputGroup>

                <Form.Group controlId="formBasicCheckbox">
                    <div className={"d-flex flex-row"}>
                        <Form.Check
                            type="checkbox"
                            label="I agree to the"
                            onChange = {(e) => setTermsAgreement(e.target.checked)}
                        />
                        <a className={"ml-1"} href={"/terms"}> Terms and Conditions</a>
                    </div>

                </Form.Group>

                <Button
                    variant="primary"
                    onClick={onFormSubmit}
                    className="signInModalButton"
                >
                    Sign Up
                </Button>

            </Container>

        );

}

