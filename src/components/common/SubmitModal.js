import React from "react";
import Modal from "react-bootstrap/Modal";
import "../../styles/common/SubmitModal.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SubmitModal(props){

    let {isSubmitModalVisible, closeSubmitModal: onHide, text} = props;

    return(

        <Modal show={isSubmitModalVisible} onHide={onHide}>

            <Modal.Header>

                <Row className={"col-12"}>

                    <Col className={"col-8"}>
                        <h
                        className={"submitModalLowerHeader"}>
                        {text} was successfully performed!
                        </h>
                    </Col>

                    <Col className={"SubmitModalIconColumn"}>
                        <FontAwesomeIcon
                        className={"submitModalIcon"}
                        icon={faCheckCircle}
                        />
                    </Col>

                </Row>

            </Modal.Header>

        </Modal>

    );

}

