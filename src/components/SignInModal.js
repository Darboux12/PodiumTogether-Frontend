import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faUnlock} from "@fortawesome/free-solid-svg-icons";
import {faTrophy} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



import "../styles/SignInModal.css"
import Logo from "./Logo";
import SignInForm from "./SignInForm";

class SignInModal extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return(

            <Modal show={this.props.isSignInModalVisible} onHide={this.props.closeSignInModal}>

                <Modal.Header className="signInModalHeader">
                    <Modal.Title className="signInModalHeaderTitle">
                        <Logo/>
                    </Modal.Title>
                    <div className="signInTitleHeader">
                    <h2>Sign in</h2>
                    <h>
                        Welcome again, we are glad to see you sharing your passion
                        and searching for another amazing people.
                    </h>
                    </div>
                </Modal.Header>

                <Modal.Body>

                    <SignInForm/>

                </Modal.Body>

                <Modal.Footer className="signInModalFooter">

                    <a href="#forgotPassword">
                        Forgot your password?
                    </a>

                </Modal.Footer>

            </Modal>


        );
    }

}

export default SignInModal;