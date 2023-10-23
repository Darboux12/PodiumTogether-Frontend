import React from "react";
import "../../../styles/admin/AdminPanel.css"
import PlaceTable from "./PlaceTable";
import Row from "react-bootstrap/Row";

export default function AdminPanelPlaceTableColumn(props) {

    const {isPlaceTableVisible} = props;

    const placeTable = isPlaceTableVisible ? <PlaceTable/> : <div/>;

    return (

        <Row className={"AdminDisplayColumn"}>
            {placeTable}
        </Row>

    )

}
