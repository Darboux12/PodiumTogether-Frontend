import Container from "react-bootstrap/Container";
import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../../styles/admin/AdminPanel.css"
import Table from "react-bootstrap/Table";

export default function AdminPanel() {


    return(

        <Container>

            <Row>

                <Col className={"AdminDisplayColumn col-10"}>

                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </Table>

                </Col>

                <Col className={"AdminMenuColumn col-2"}>

                    <Button
                        variant={"outline-dark"}
                        className={"AdminMenuButton"}
                        href={"/news/create"}>Display all users
                    </Button>

                    <Button
                        variant={"outline-dark"}
                        className={"AdminMenuButton"}
                        href={"/news/create"}>Add news
                    </Button>

                    <Button
                        variant={"outline-dark"}
                        className={"AdminMenuButton"}
                        href={"/subject/add"}>Add subject
                    </Button>

                    <Button
                        variant={"outline-dark"}
                        className={"AdminMenuButton"}
                        href={"/discipline/add"}>Add discipline
                    </Button>





                </Col>

            </Row>







        </Container>




    )

}