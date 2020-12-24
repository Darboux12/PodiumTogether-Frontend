import React from "react";
import Modal from "react-bootstrap/Modal";
import "../../styles/common/SubmitModal.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SubmitFailModal(props){

    let {isSubmitFailModalVisible, closeSubmitFailModal: onHide, text} = props;

    return(

        <Modal show={isSubmitFailModalVisible} onHide={onHide}>

            <Modal.Header className={"SubmitFailModalContainer"}>

                <Row className={"col-12"}>

                    <Col className={"col-8"}>
                        <h
                            className={"submitModalLowerHeader"}>
                            {text} submit failed, please check provided form data!
                        </h>
                    </Col>

                    <Col className={"SubmitModalIconColumn"}>
                        <FontAwesomeIcon
                            className={"submitModalFailIcon"}
                            icon={faTimesCircle}
                        />
                    </Col>

                </Row>

            </Modal.Header>

        </Modal>

    );

}

