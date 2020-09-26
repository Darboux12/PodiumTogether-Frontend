import React from "react";
import Row from "react-bootstrap/esm/Row";

import "../../../styles/place-details/rows-web/PlaceDetailsDescriptionRow.css"

import descriptionImage from "../.././../images/PlaceDetailsDescriptionImage.jpg"
import Col from "react-bootstrap/Col";

export default function PlaceDetailsDescriptionRow() {

    return (

        <Row className={"PlaceDetailsDescriptionRowContainer"}>

            <Col>

                <Row>
                    <img
                        className={"PlaceDetailsDescriptionRowImage"}
                        src={descriptionImage}
                        alt={"Description Image"}
                    />
                </Row>

                <Row>

                    <h className={"PlaceDetailsDescriptionRowText"}>

                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi aut commodi cumque
                            debitis, delectus dignissimos eius enim est eveniet ipsam minima nam officia quia sint. Ex
                            numquam perferendis voluptate?
                        </div>
                        <div>Ab at eaque explicabo minus quo sequi vel. Distinctio earum porro rem tempora unde velit.
                            Amet architecto aut commodi corporis, debitis ducimus eius eligendi harum ipsa ipsam
                            repellat suscipit totam.
                        </div>
                        <div>Adipisci, assumenda cumque dolorem est eum explicabo, facere, harum maxime molestias
                            perferendis possimus ratione veniam! Ad blanditiis, corporis distinctio ducimus esse eum,
                            maxime minima nostrum quibusdam quidem rem, saepe voluptas.
                        </div>
                        <div>Autem deserunt dignissimos enim est neque odit quidem, tempora. Aperiam dignissimos dolor
                            dolores dolorum eum fugit itaque nulla pariatur quibusdam rem sapiente sunt, tenetur unde
                            ut, voluptas. Accusantium, nisi tenetur.
                        </div>
                        <div>Animi architecto asperiores aspernatur atque commodi consequatur debitis delectus, deleniti
                            earum expedita fuga ipsam itaque magni minus natus nemo nihil nobis obcaecati quasi
                            repudiandae sed suscipit temporibus ut, voluptas voluptatibus.
                        </div>
                        <div>Autem consectetur deleniti facilis hic illum ipsa iusto molestiae omnis quisquam,
                            recusandae rem totam voluptatem. Ab dignissimos dolor omnis quam voluptas? Asperiores beatae
                            dolorem nesciunt nobis pariatur quas repellat similique.
                        </div>
                        <div>Accusantium aliquid commodi delectus doloribus fuga fugit in labore natus sit sunt. Alias,
                            earum eveniet facere facilis id impedit itaque magnam modi nobis odit pariatur perferendis
                            porro quo repudiandae veritatis.
                        </div>

                        <a className={"PlaceDetailsDescriptionRowTextLink"} href={"#"}>~Janek126p</a>




                    </h>


                </Row>



            </Col>




        </Row>






    )

}