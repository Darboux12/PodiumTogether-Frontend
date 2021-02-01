import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import React from "react";

export default function AdminPanelButtonsColumn(props) {

    const {isUserTableVisible, setIsUserTableVisible,isPlaceTableVisible, setIsPlaceTableVisible} = props;

    const userButtonText = isUserTableVisible ? 'Hide all users' : 'Display all users';
    const placeButtonText = isPlaceTableVisible ? 'Hide all places' : 'Display all places';

    return(

        <Col className={"d-flex flex-column col-md-3 col-12 AdminPanelButtonsColumn"}>

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
                variant={"outline-dark"}
                className={"AdminMenuButton"}
                onClick={() => setIsPlaceTableVisible(!isPlaceTableVisible)}
            >{placeButtonText}
            </Button>

        </Col>

    )

}
