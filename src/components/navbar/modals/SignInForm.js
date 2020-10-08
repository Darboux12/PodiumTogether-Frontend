import React, {Component, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUnlock, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "../../../styles/navbar/SignInModal.css"
import {faUser} from "@fortawesome/free-regular-svg-icons";
import { axios} from "axios";

export default function SignInForm(props){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const [usernameError,setUsernameError] = useState("");
    const [passwordError,setPasswordError] = useState("");

    const onFormSubmit = () => {

        const PostUrl = 'http://localhost:8080/authenticate';

        const user = {
            username: username,
            password: password
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        if(user.username === ""){
            setUsernameError("Username cannot be empty!")
        }

        else if(user.password === ""){
            setPasswordError("Password cannot be empty!")
        }

        else

            fetch(PostUrl,requestOptions)

                .then((res) => {

                    if (res.status === 409){
                       console.log("Server error 409");
                    }

                    else return res.json()
                })

                .then(res => {

                    if(res.token !== undefined){

                        localStorage.setItem("authorizationToken", res.token);
                        localStorage.setItem("Username", res.username);
                        localStorage.setItem("userLogged", true);
                        window.location.reload();

                    }

                })

                .catch((error) => {
                    console.log(error);
                });





    };



        return (

            <Container>

                <h className={"ErrorHeader"}>{usernameError}</h>

                <InputGroup className="mb-3">

                    <InputGroup.Prepend>
                        <InputGroup.Text id="userInputText">
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

                <Button
                    type={"submit"}
                    variant="primary"
                    onClick={onFormSubmit}
                    className="signInModalButton"
                >
                    Sign In

                </Button>

            </Container>

        );

}

