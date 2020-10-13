import React, {useEffect, useState} from "react";
import "../../styles/news-page/NewsDetails.css"
import Button from "react-bootstrap/Button";
import ImageModal from "../common/ImageModal";
import ImageGallery from 'react-image-gallery';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import serverAddress from "../config/Constants"

import { format } from "date-fns";

export default function NewsDetails(props) {



    const id = props.match.params.id;

    const [isLoaded,setIsLoaded] = useState(false);
    const [newsItems,setNewsItems] = useState();

    const [date,setDate] = useState("");

    const [imagesModalVisible,setImagesModalVisible] = useState(false);

    useEffect(() => {

        fetch(serverAddress + '/news/find/' + id)
            .then(res => res.json())
            .then(res => {

                setNewsItems(res);
                setDate(new Date(res.news.date));
                setIsLoaded(true);

            });







    },[]);

    if(isLoaded)

    return(

        <Container className={"NewsDetailsContainer col-md-8 col-11"}>

            <Row className={"ImageTitleRow"}>

                <Col
                    className={"ImageColumn col-md-4 col-12 mr-4"}>

                  <button
                      onClick={() =>setImagesModalVisible(true)}
                      className={"ImageButton"}>

                      <img
                        src={`data:image/jpeg;base64,${newsItems.podiumFiles[0].content}`}
                        alt={"a"}
                        className={"NewsDetailsImage"}
                         />

                  </button>

                </Col>

                <Col className={"TitleColumn mt-md-0 mt-4 p-md-0 p-2 d-flex align-items-center justify-content-center"}>
                    <h className={"NewsDetailsTitle"}>{newsItems.news.title}</h>

                    <h
                        className={"NewsDetailsDate d-md-flex d-none"}>
                        {format(date, "dd-MMMM-yyyy")}
                    </h>

                </Col>

            </Row>

            <Row className={"NewsDetailsTextRow mt-4"}>

                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet animi, autem beatae, eum
                    exercitationem illum ipsa ipsum magnam magni odit optio praesentium quam qui quibusdam reprehenderit
                    ullam unde voluptas!
                </div>
                <div>Eos facilis labore quidem quisquam repellendus vel vitae! Debitis est minus quas rerum. Cupiditate
                    deserunt eligendi illo iure molestiae necessitatibus nulla, numquam officia optio perspiciatis
                    ratione saepe unde vel velit!
                </div>




            </Row>

            <Row className={"GoBackToNewsButton"}>

                <Button href={"/news"} className={"col-12 mt-4"}>Return to all news</Button>

            </Row>

            <ImageModal
                isImagesModalVisible={imagesModalVisible}
                closeImagesModal={() => setImagesModalVisible(false)}
                images = {newsItems.podiumFiles}
            />








        </Container>






    );
    else
        return <div/>






}