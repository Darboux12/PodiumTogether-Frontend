import React from "react";
import Roll from "react-reveal";

import "../../../styles/display-events/search-tabs/DisciplineSearchTab.css"
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form'

export default function PlacesDisciplineSearchTab(props){

    if(props.show){

        return (

            <Roll>

                <div id={props.id} className={"searchTabContainer mt-3"}>


                    <Button variant={"outline-secondary"}>Football</Button>



                </div>

            </Roll>





        );


    }
    else {

        return <div/>
    }




}