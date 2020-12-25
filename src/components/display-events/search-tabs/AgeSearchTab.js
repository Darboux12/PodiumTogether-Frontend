import "../../../styles/display-events/search-tabs/AgeSearchTab.css"
import Roll from "react-reveal";
import Form from "react-bootstrap/Form";
import React from "react";

export default function AgeSearchTab(props) {

    let {show,minAgeOnChange,maxAgeOnChange} = props;

    if(show){

        return(

            <Roll>

                <Form className={"mt-3 d-flex flex-row ml-5"}>

                    <div className={"d-flex flex-row mr-5"}>

                        <Form.Group className={"mr-3"} controlId="">

                            <Form.Label className={""}>Min age</Form.Label>

                            <Form.Control
                                className={""}
                                type="number"
                                value = {props.minAge}
                                onChange = {(e) => minAgeOnChange(e.target.value)}
                            />

                        </Form.Group>

                        <Form.Group className={""} controlId="formEventTitle">
                            <Form.Label className={""}>Max age</Form.Label>
                            <Form.Control
                                className={""}
                                type="number"
                                value = {props.maxAge}
                                onChange = {(e) => maxAgeOnChange(e.target.value)}
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
