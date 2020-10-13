import React from "react";
import Modal from "react-bootstrap/Modal";
import ImageCarousel from "./ImageCarousel";


export default function ImageModal(props) {

    let isImagesModalVisible = props.isImagesModalVisible;
    let onHide = props.closeImagesModal;

    return(

        <Modal className={"ImagesCarousel"} show={isImagesModalVisible} onHide={onHide}>

            <ImageCarousel
                images = {props.images}
            />

        </Modal>

    );

}