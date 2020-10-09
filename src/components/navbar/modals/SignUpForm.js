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

    const [isLoaded, setIsLoaded] = useState(false);
    const [countryItems, setCountryItems] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8080/country/find/all')
            .then(res => res.json())
            .then(res => {

                setIsLoaded(true);
                setCountryItems(res);

            });

    },[]);

    const onFormSubmit = () => {

        const formData = {

            email : email,
            password : password,
            username : username,
            birthday : birthday,
            country : country
        };

        setEmailError("");
        setPasswordError("");
        setRepeatPasswordError("");
        setUsernameError("");
        setBirthdayError("");
        setTermsAgreementError("");

        if(username === ""){
            setUsernameError("Username cannot be empty!");
        }

        if(email === ""){
            setEmailError("Email cannot be empty!");
        }

        if(password === ""){
            setPasswordError("Password cannot be empty!");
        }

        if(repeatPassword === ""){
            setRepeatPasswordError("Repeat password cannot be empty!");
        }

        if(birthday === ""){
            setBirthdayError("Birthday cannot be empty!");
        }

        if(!termsAgreement){
            setTermsAgreementError("You must accept terms agreement!");
        }

        if(email !== "" && !emailValidator.validate(email)){
            setEmailError("This is not correct email address!");
        }

        if(birthday !== "" && !isValidBirthdate(birthday,{ minAge: 13 })){
            setBirthdayError("THis is not valid birthday or you are under 13")
        }

        fetch('http://localhost:8080/user/exist/username/' + username)
            .then((res) =>{

                if(!res.ok){
                    setUsernameError("User with this username already exist!");
                }


            }).catch(
            error => console.log(error) // Handle the error response object
        );

        fetch('http://localhost:8080/user/exist/email/' + email)
            .then((res) =>{

                if(!res.ok){
                    alert(res.status);
                    setEmailError("Email address is already in usage!");
                }


            }).catch(
            error => console.log(error) // Handle the error response object
        );

        if(
            emailError === "" &&
            passwordError === "" &&
            repeatPasswordError === "" &&
            usernameError === "" &&
            birthdayError === "" &&
            termsAgreement
        ){




        fetch('http://localhost:8080/user/add', { // Your POST endpoint
            method: 'POST',
            headers : {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)

        }).then(
            response => response.json() // if the response is a JSON object
        ).then(
            success => console.log(success) // Handle the success response object
        ).catch(
            error => console.log(error) // Handle the error response object
        );

            props.showSignUpSuccessModal();

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

