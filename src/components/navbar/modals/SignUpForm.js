import React, {Component, useEffect, useState} from "react";
import InputGroup from "react-bootstrap/esm/InputGroup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobeEurope, faUnlock, faUser} from "@fortawesome/free-solid-svg-icons";
import FormControl from "react-bootstrap/esm/FormControl";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import {faCalendar, faCalendarAlt, faEnvelope, faFlag} from "@fortawesome/free-regular-svg-icons";
import {faCalendarDay} from "@fortawesome/free-solid-svg-icons/faCalendarDay";
import Form from 'react-bootstrap/Form'

import * as emailValidator from "email-validator";
import isValidBirthdate from "is-valid-birthdate";

import {existUserByUsernameEndpoint} from "../../config/Constants";
import {existUserByEmailEndpoint} from "../../config/Constants";
import {addUserEndpoint} from "../../config/Constants";
import {findAllCountryEndpoint} from "../../config/Constants";

import serverAddress from "../../config/Constants"

import {minUsernameLength} from "../../config/Limits";
import {maxUsernameLength} from "../../config/Limits";
import {minPasswordLength} from "../../config/Limits";
import {maxPasswordLength} from "../../config/Limits";
import {maxEmailLength} from "../../config/Limits";
import {minSignUpAge} from "../../config/Limits";
import {addUserFetch, existUserByEmailFetch, existUserByUsernameFetch} from "../../fetch/Fetch";

export default function SignUpForm(props){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [repeatPassword,setRepeatPassword] = useState("");
    const [username,setUsername] = useState("");
    const [birthday,setBirthday] = useState("");
    const [country,setCountry] = useState("");
    const [termsAgreement,setTermsAgreement] = useState(false);

    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [repeatPasswordError,setRepeatPasswordError] = useState("");
    const [usernameError,setUsernameError] = useState("");
    const [birthdayError,setBirthdayError] = useState("");
    const [termsAgreementError,setTermsAgreementError] = useState("");

    const [countryItems, setCountryItems] = useState([]);

    let {showSignUpSuccessModal} = props;

    const resetErrors = () => {

        setEmailError("");
        setPasswordError("");
        setRepeatPasswordError("");
        setUsernameError("");
        setBirthdayError("");
        setTermsAgreementError("");

    };

    useEffect(() => {

        fetch(serverAddress + findAllCountryEndpoint)

            .then(res => res.json())

            .then(res => {

                setCountryItems(res);
                setCountry(res[0].name);
            });

    },[]);

    const formValidation = () => {

        resetErrors();

        let isOk = true;

        if(username === ""){
            setUsernameError("Username cannot be empty!");
            isOk = false;
        }

        if(username.length < minUsernameLength){
            setUsernameError("Username must be longer than " + minUsernameLength + "!");
            isOk = false;
        }

        if(username.length > maxUsernameLength){
            setUsernameError("Username must be shorter than " + maxUsernameLength + "!");
            isOk = false;
        }

        if(email === ""){
            setEmailError("Email cannot be empty!");
            isOk = false;
        }

        if(email.length > maxEmailLength){
            setEmailError("Email must be shorter than" + maxEmailLength + "!");
            isOk = false;
        }

        if(password === ""){
            setPasswordError("Password cannot be empty!");
            isOk = false;
        }

        if(password.length < minPasswordLength){
            setPasswordError("Password must be longer than " + minPasswordLength + "!");
            isOk = false;
        }

        if(password.length > maxPasswordLength){
            setPasswordError("Password must be shorter than " + maxPasswordLength + "!");
            isOk = false;
        }

        if(repeatPassword === ""){
            setRepeatPasswordError("Repeat password cannot be empty!");
            isOk = false;
        }

        if(password !== repeatPassword){
            setRepeatPasswordError("Repeat password must be the same as password!");
            isOk = false;
        }

        if(birthday === ""){
            setBirthdayError("Birthday cannot be empty!");
            isOk = false;
        }

        if(!termsAgreement){
            setTermsAgreementError("You must accept terms agreement!");
            isOk = false;
        }

        if(email !== "" && !emailValidator.validate(email)){
            setEmailError("This is not correct email address!");
            isOk = false;
        }

        if(birthday !== "" && !isValidBirthdate(birthday,{ minAge: minSignUpAge})){
            setBirthdayError("This is not valid birthday or you are under " + minSignUpAge);
            isOk = false;
        }

        return isOk;

    };

    const onFormSubmit = () => {

        if(formValidation()) {

            existUserByUsernameFetch(username)

                .then(res => res.json())

                .then((res) => {

                    if (res === false) {

                        existUserByEmailFetch(email)

                            .then(res => res.json())

                            .then((res) => {

                                if (res === false) {

                                    addUserFetch(email,password,username,birthday,country)

                                        .then( res => {

                                            if(res.ok)
                                                showSignUpSuccessModal();

                                            else return res.json();
                                    })

                                        .then( res => {

                                            if(res.message === "email is not valid email address")
                                                setEmailError("This is not valid email address!");

                                            console.log(res);
                                        })

                                        .catch(err => { console.log(err) })

                                }

                                else setEmailError("Email address is already in usage!");

                            })

                            .catch(error => console.log(error));


                    } else setUsernameError("User with this username already exist!");
                })

                .catch(error => console.log(error));

        }

    };

        return(

            <Container>

                <h className={"ErrorHeader"}>{emailError}</h>

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

                <h className={"ErrorHeader"}>{passwordError}</h>

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

                <h className={"ErrorHeader"}>{repeatPasswordError}</h>

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

                <h className={"ErrorHeader"}>{usernameError}</h>

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

                <h className={"ErrorHeader"}>{birthdayError}</h>

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
                        as="select"
                        size={3}
                        onChange = {(e) => setCountry(e.target.value)}
                    >
                        {countryItems.map(item =>
                            <option key={item.name} value={item.name}>{item.name}</option>
                        )};

                    </FormControl>

                </InputGroup>

                <h className={"ErrorHeader"}>{termsAgreementError}</h>

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

