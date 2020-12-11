import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUnlock} from "@fortawesome/free-solid-svg-icons";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "../../../styles/navbar/SignInModal.css"
import {faUser} from "@fortawesome/free-regular-svg-icons";
import serverAddress, {
    authenticateEndpoint,
    existUserByUsernameEndpoint,
    findUserByUsernameEndpoint,

} from "../../config/Constants";
import podiumStorage from "../../config/Storage";
import jwtDecode from "jwt-decode";

export default function SignInForm(props){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const [usernameError,setUsernameError] = useState("");
    const [passwordError,setPasswordError] = useState("");

    const formValidation = () => {

        let isOk = true;

        setUsernameError("");
        setPasswordError("");

        if(username.username === ""){
            setUsernameError("Username cannot be empty!");
            isOk = false;
        }

        if(password === ""){
            setPasswordError("Password cannot be empty!");
            isOk = false;
        }

        fetch(serverAddress + existUserByUsernameEndpoint + username)
            .then((res) =>{

                if(!res.ok){
                    setUsernameError("User with this username does not exist!");
                    isOk = false;
                }


            }).catch(
            error => console.log(error) // Handle the status status object
        );


        return isOk;




    };

    const findUserFetch = () => {

        let username = jwtDecode(podiumStorage.get("authorizationToken")).sub;

        fetch(serverAddress + findUserByUsernameEndpoint + username)

                    .then((res) => {

                        if (res.status !== 200)
                            console.log("Cannot find user by username");

                        else return res.json();
                    })

            .then((res) => {

                        podiumStorage.set("profileImage", res.profileImage);

                    })

            .catch((error) => {
                        console.log(error);
                    });

    };

    const authenticateFetch = () => {

        const user = {
            username: username,
            password: password
        };

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        };

        fetch(serverAddress + authenticateEndpoint, requestOptions)

            .then((res) => {

                if (!res.ok) {
                    setPasswordError("Password is incorrect!");

                } else return res.json()
            })

            .then(res => {

                    podiumStorage.set("authorizationToken",res.token);
                    findUserFetch(res.token);

                    setTimeout(() => {
                        props.signInUser();

                    },500);

            })

            .catch((error) => {
                console.log(error);
            });

    };

    const onFormSubmit = () => {

        if(formValidation()) {
           authenticateFetch();
        }

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

