import React, {Component} from "react";
import InputGroup from "react-bootstrap/esm/InputGroup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons/index";
import FormControl from "react-bootstrap/esm/FormControl";
import {faGlobeEurope, faUnlock, faUser} from "@fortawesome/free-solid-svg-icons/index";
import {faCalendarDay} from "@fortawesome/free-solid-svg-icons/faCalendarDay";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

import "../../styles/forgot-password-components/ForgotPasswordForm.css"

class ForgotPasswordForm extends Component{

    render(){
        return(

            <div className={"ForgotPasswordFormContainer"}>

                <InputGroup className="mb-3 w-50">

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
                    />
                </InputGroup>

                <div className={"ForgotPasswordButtons d-flex flex-row w-50"}>

                    <Button
                        variant="success"
                        onClick={this.props.closeSignUpModal}
                        className="col-3 mr-3"
                    >
                        Send
                    </Button>

                    <Button href={"/home"}
                        variant="secondary"
                        onClick={this.props.closeSignUpModal}
                        className="col-2 closeButton"
                    >
                        Close
                    </Button>




                </div>







            </div>



        );
    }

}

export default ForgotPasswordForm;