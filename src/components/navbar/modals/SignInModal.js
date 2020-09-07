import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
import "../../../styles/navbar/SignInModal.css"
import Logo from "../../common/Logo";
import SignInForm from "./SignInForm";

export default function SignInModal(props){

    const isSignInModalVisible = props.isSignInModalVisible;
    const onHide = props.closeSignInModal;

        return(

            <Modal show={isSignInModalVisible} onHide={onHide}>

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

                    <a href="/new/password">
                        Forgot your password?
                    </a>

                </Modal.Footer>

            </Modal>

        );

}

