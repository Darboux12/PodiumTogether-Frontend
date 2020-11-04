import Container from "react-bootstrap/Container";
import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../../styles/admin/AdminPanel.css"
import Table from "react-bootstrap/Table";
import UsersTable from "./UsersTable";
import podiumStorage from "../config/Storage";
import jwtDecode from "jwt-decode";

export default function AdminPanel() {

    const [isUserTableVisible, setIsUserTableVisible] = useState(false);

    const userTable = isUserTableVisible ? <UsersTable/> : <div/>;

    const userButtonText = isUserTableVisible ? 'Hide all users' : 'Display all users';


    const testFun = () => {

        let token = podiumStorage.get("authorizationToken");

        let tokenExpiration = jwtDecode(token);

        console.log(tokenExpiration);

    };

    return(

        <Container>

            <Row>

                <Col className={"AdminDisplayColumn col-10"}>

                    {userTable}

                </Col>

                <Col className={"AdminMenuColumn col-2"}>

                    <Button
                        variant={"outline-dark"}
                        className={"AdminMenuButton"}
                        onClick={() => setIsUserTableVisible(!isUserTableVisible)}
                    >{userButtonText}

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


                    <Button
                    onClick={testFun}>


                        Test
                    </Button>





                </Col>

            </Row>







        </Container>




    )

}