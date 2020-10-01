import React, {useEffect, useState} from "react";
import Roll from "react-reveal";

import "../../../styles/display-events/search-tabs/DisciplineSearchTab.css"
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form'

export default function DisciplineSearchTab(props){

    const footballOptionId = "footballOption";
    const volleyballOptionId = "volleyballOption";
    const joggingOptionId = "joggingOption";
    const basketballOptionId = "basketballOption";
    const swimmingOptionId = "swimmingOption";
    const otherOptionId = "otherOption";

    useEffect(() =>{

        if(props.footballOption === true){

            let btn = document.getElementById(footballOptionId);

            if(btn !== null){
                btn.style.backgroundColor = "#6d767e";
                btn.style.color = "white";
                btn.style.fillOpacity = "0.9"
            }
        }

        if(props.volleyballOption === true){

            let btn = document.getElementById(volleyballOptionId);

            if(btn !== null){
                btn.style.backgroundColor = "#6d767e";
                btn.style.color = "white";
                btn.style.fillOpacity = "0.9"
            }
        }

        if(props.joggingOption === true){

            let btn = document.getElementById(joggingOptionId);

            if(btn !== null){
                btn.style.backgroundColor = "#6d767e";
                btn.style.color = "white";
                btn.style.fillOpacity = "0.9"
            }
        }

        if(props.basketballOption === true){

            let btn = document.getElementById(basketballOptionId);

            if(btn !== null){
                btn.style.backgroundColor = "#6d767e";
                btn.style.color = "white";
                btn.style.fillOpacity = "0.9"
            }
        }

        if(props. swimmingOption === true){

            let btn = document.getElementById( swimmingOptionId);

            if(btn !== null){
                btn.style.backgroundColor = "#6d767e";
                btn.style.color = "white";
                btn.style.fillOpacity = "0.9"
            }
        }

        if(props.otherOption === true){

            let btn = document.getElementById(otherOptionId);

            if(btn !== null){
                btn.style.backgroundColor = "#6d767e";
                btn.style.color = "white";
                btn.style.fillOpacity = "0.9"
            }
        }

    });

    const handleChange = (e) => {

        let id = e.target.id;
        let btn = document.getElementById(id);
        let style = getComputedStyle(btn);

        if(style.fillOpacity === "1"){

            btn.style.backgroundColor = "#6d767e";
            btn.style.color = "white";
            btn.style.fillOpacity = "0.9"
            }

        else {
            btn.style.backgroundColor = "white";
            btn.style.color = "#6c757d";
            btn.style.fillOpacity = "1"
            }

        sendDataToParent(id);

    };

    const sendDataToParent = (id) => {

        if(id === footballOptionId)
            props.footballOptionClick();

        if(id === volleyballOptionId)
            props.volleyballOptionClick();

        if(id === joggingOptionId)
            props.joggingOptionClick();

        if(id === basketballOptionId)
            props.basketballOptionClick();

        if(id === swimmingOptionId)
            props.swimmingOptionClick();

        if(id === otherOptionId)
            props.otherOptionClick();

    };

    if(props.show){

        return (

            <Roll>

            <div className={"searchTabContainer mt-3 ml-5"}>

                <Button
                    id={"footballOption"}
                    className={"searchTabButton"}
                    onClick = {(e) => handleChange(e)}
                    variant={"outline-secondary"}
                >Football
                </Button>

                <Button
                    id={"volleyballOption"}
                    className={"searchTabButton"}
                    onClick = {(e) => handleChange(e)}
                    variant={"outline-secondary"}
                >Volleyball
                </Button>

                <Button
                    id={"joggingOption"}
                    className={"searchTabButton"}
                    onClick = {(e) => handleChange(e)}
                    variant={"outline-secondary"}
                >Jogging
                </Button>

                <Button
                    id={"swimmingOption"}
                    className={"searchTabButton"}
                    onClick = {(e) => handleChange(e)}
                    variant={"outline-secondary"}
                >Swimming
                </Button>

                <Button
                    id={"basketballOption"}
                    className={"searchTabButton"}
                    onClick = {(e) => handleChange(e)}
                    variant={"outline-secondary"}
                >Basketball
                </Button>

                <Button
                    id={"otherOption"}
                    className={"searchTabButton"}
                    onClick = {(e) => handleChange(e)}
                    variant={"outline-secondary"}
                >Other
                </Button>

            </div>

            </Roll>





            );


    }

    else {
        return <div/>
    }

}