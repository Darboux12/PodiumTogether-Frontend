import React from "react";
import Modal from "react-bootstrap/Modal";
import ImageCarousel from "./ImageCarousel";

export default function ImageModal(props) {

    const {closeImagesModal, isImagesModalVisible: isImagesModalVisible1, images} = props;

    return(

        <Modal
            className={"ImagesCarousel"}
            show={isImagesModalVisible1}
            onHide={closeImagesModal}>

            <ImageCarousel images = {images} />

        </Modal>

    );

}