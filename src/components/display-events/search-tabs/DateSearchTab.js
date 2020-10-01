import Roll from "react-reveal";
import Button from "react-bootstrap/Button";
import React from "react";

import "../../../styles/display-events/search-tabs/DateSearchTab.css"
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function DateSearchTab(props) {




    if(props.show){

        return(

            <Roll>

                <Form className={"mt-3 d-flex flex-row ml-5"}>

                    <div className={"d-flex flex-row mr-5"}>

                        <Form.Group className={"mr-3"} controlId="">
                            <Form.Label className={""}>Date From</Form.Label>
                            <Form.Control
                                className={""}
                                type="date"
                                value = {props.dateFrom}
                                onChange = {(e) => props.dateFromOnChange(e.target.value)}
                                />
                        </Form.Group>

                        <Form.Group className={""} controlId="formEventTitle">
                            <Form.Label className={""}>Date To</Form.Label>
                            <Form.Control
                                className={""}
                                type="date"
                                value = {props.dateTo}
                                onChange = {(e) => props.dateToOnChange(e.target.value)}
                            />
                        </Form.Group>

                    </div>

                    <div className={"d-flex flex-row"}>

                        <Form.Group className={"mr-3"} controlId="">
                            <Form.Label className={""}>Time From</Form.Label>
                            <Form.Control
                                className={""}
                                type="time"
                                value = {props.timeFrom}
                                onChange = {(e) => props.timeFromOnChange(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className={""} controlId="formEventTitle">
                            <Form.Label className={""}>Time To</Form.Label>
                            <Form.Control
                                className={""}
                                type="time"
                                value = {props.timeTo}
                                onChange = {(e) => props.timeToOnChange(e.target.value)}
                            />
                        </Form.Group>

                    </div>



                </Form>



            </Roll>

        )


    }

    else{
        return <div/>
    }



}