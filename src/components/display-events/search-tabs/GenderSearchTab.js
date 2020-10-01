import "../../../styles/display-events/search-tabs/GenderSearchTab.css"
import React, {useEffect} from "react";
import Roll from "react-reveal";
import Button from "react-bootstrap/Button";

export default function GenderSearchTab(props) {

    const maleOptionId = "maleOption";
    const femaleOptionId = "femaleOption";
    const allGenderOptionId = "allGenderOption";

    useEffect(() =>{

        if(props.maleOption === true){

            let btn = document.getElementById(maleOptionId);

            if(btn !== null){
                btn.style.backgroundColor = "#6d767e";
                btn.style.color = "white";
                btn.style.fillOpacity = "0.9"
            }
        }

        if(props.femaleOption === true){

            let btn = document.getElementById(femaleOptionId);

            if(btn !== null){
                btn.style.backgroundColor = "#6d767e";
                btn.style.color = "white";
                btn.style.fillOpacity = "0.9"
            }
        }

        if(props.allGenderOption === true){

            let btn = document.getElementById(allGenderOptionId);

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

        if(id === maleOptionId )
            props.maleOptionClick();

        if(id === femaleOptionId )
            props.femaleOptionClick();

        if(id === allGenderOptionId )
            props.allGenderOptionClick();

    };

    if(props.show){

        return (

            <Roll>

                <div className={"searchTabContainer mt-3 ml-5"}>

                    <Button
                        id={"maleOption"}
                        className={"searchTabButton"}
                        onClick = {(e) => handleChange(e)}
                        variant={"outline-secondary"}
                    >Male
                    </Button>

                    <Button
                    id={"femaleOption"}
                    className={"searchTabButton"}
                    onClick = {(e) => handleChange(e)}
                    variant={"outline-secondary"}
                    >Female
                    </Button>

                    <Button
                        id={"allGenderOption"}
                        className={"searchTabButton"}
                        onClick = {(e) => handleChange(e)}
                        variant={"outline-secondary"}
                    >All
                    </Button>



                </div>

            </Roll>





        );


    }

    else {
        return <div/>
    }



}