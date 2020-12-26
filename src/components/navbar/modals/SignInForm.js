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
import {
    addUserFetch,
    existUserByEmailFetch,
    existUserByUsernameFetch,
    findUserByUsernameFetch,
    signInUserFetch
} from "../../fetch/Fetch";


export default function SignInForm(props){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const [usernameError,setUsernameError] = useState("");
    const [passwordError,setPasswordError] = useState("");

    let {signInUser} = props;

    const resetErrors = () => {
        setUsernameError("");
        setPasswordError("");
    };

    const formValidation = () => {

        resetErrors();

        let isOk = true;

        if(username === ""){
            setUsernameError("Username cannot be empty!");
            isOk = false;
        }

        if(password === ""){
            setPasswordError("Password cannot be empty!");
            isOk = false;
        }

        return isOk;

    };

    const findUserFetch = () => {

        let username = jwtDecode(podiumStorage.get("authorizationToken")).sub;

        findUserByUsernameFetch(username)

            .then((res) => {

                        if (res.status !== 200)
                            console.log("Cannot find user by username");

                        else return res.json();
                    })

            .then((res) => {

                podiumStorage.set("profileImage", res.profileImage);

                signInUser();

            })

            .catch((error) => {console.log(error);});

    };

    const authenticateFetch = () => {

        signInUserFetch(username,password)

            .then((res) => {

                if (!res.ok) setPasswordError("Password is incorrect!");

                else return res.json()
            })

            .then(res => {

                    podiumStorage.set("authorizationToken",res.token);

                    findUserFetch(res.token);
            })

            .catch((error) => {
                console.log(error);
            });

    };

    const onFormSubmit = () => {

        if(formValidation()) {

            existUserByUsernameFetch(username)

                .then(res => res.json())

                .then((res) => {

                    if (res === true)
                        authenticateFetch();

                    else setUsernameError("User with this username does not exist!");
                })

                .catch(error => console.log(error));

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

