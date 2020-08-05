import React, {Component} from "react";
import InputGroup from "react-bootstrap/InputGroup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobeEurope, faUnlock, faUser} from "@fortawesome/free-solid-svg-icons";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Modal from "./SignUpModal";
import Container from "react-bootstrap/Container";
import {faCalendar, faCalendarAlt, faEnvelope, faFlag} from "@fortawesome/free-regular-svg-icons";
import {faCalendarDay} from "@fortawesome/free-solid-svg-icons/faCalendarDay";

class SignUpForm extends Component{

    render() {
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
                        aria-label="birthDatee"
                        aria-describedby="basic-addon1"
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
                    />
                </InputGroup>

                <Button
                    variant="primary"
                    onClick={this.props.closeSignUpModal}
                    className="signInModalButton"
                >
                    Sign In
                </Button>




            </Container>




        );
    }

}

export default SignUpForm;