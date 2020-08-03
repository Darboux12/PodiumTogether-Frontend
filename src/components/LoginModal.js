import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class  LoginModal extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return(

            <Modal show={this.props.isVisible} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.props.closeModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


        );
    }

}

export default LoginModal;