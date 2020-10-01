import "../../../styles/display-events/search-tabs/PeopleNumberSearchTab.css"
import Roll from "react-reveal";
import Form from "react-bootstrap/Form";
import React from "react";

export default function PeopleNumberSearchTab(props) {

    if(props.show){

        return(

            <Roll>

                <Form className={"mt-3 d-flex flex-row ml-5"}>

                    <div className={"d-flex flex-row mr-5"}>

                        <Form.Group className={"mr-3"} controlId="">
                            <Form.Label className={""}>Min people number</Form.Label>
                            <Form.Control
                                className={""}
                                type="number"
                                value = {props.minPeopleNumber}
                                onChange = {(e) => props.minPeopleNumberOnChange(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className={""} controlId="formEventTitle">
                            <Form.Label className={""}>Max people number</Form.Label>
                            <Form.Control
                                className={""}
                                type="number"
                                value = {props.maxPeopleNumber}
                                onChange = {(e) => props.maxPeopleNumberOnChange(e.target.value)}
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