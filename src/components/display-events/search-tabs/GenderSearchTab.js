import "../../../styles/display-events/search-tabs/GenderSearchTab.css"
import React, {useEffect, useState} from "react";
import Roll from "react-reveal";
import Button from "react-bootstrap/Button";
import {findAllgenderFetch, findAllGendersFetch} from "../../fetch/Fetch";

export default function GenderSearchTab(props) {

    const [allGenders,setAllGenders] = useState([]);

    let {selectGender,selectedGenders} = props;

    useEffect(() => {

        findAllGendersFetch()

            .then(res => res.json())

            .then(res => {

                setAllGenders(res);

            })

            .catch(error => console.log(error));

    },[]);

    useEffect(() => {

        selectedGenders.map(item => {

            handleTabColorChange(item,true);


        });



    });

    const removeGender = (gender) => {

        let index = selectedGenders.indexOf(gender);

        if (index > -1)
            selectedGenders.splice(index, 1);

    };

    const selectCheckedGender = (gender) => selectGender(gender);

    const handleTabColorChange = (id,isActive) => {

        let btn = document.getElementById(id);

        if(btn !== null){

            if(isActive){
                btn.style.backgroundColor = "#6d767e";
                btn.style.color = "white";
                btn.style.fillOpacity = "0.9"
            }

            else{
                btn.style.backgroundColor = "white";
                btn.style.color = "#6c757d";
                btn.style.fillOpacity = "1"
            }

        }
    };

    const handleChange = (gender) => {

        if(selectedGenders.includes(gender)){
            removeGender(gender);
            handleTabColorChange(gender,false);
        }

        else {
            selectCheckedGender(gender);
            handleTabColorChange(gender,true);
        }

    };

    if(props.show){

        return (

            <Roll>

                <div className={"searchTabContainer mt-3 ml-5"}>

                    {allGenders.map(item =>

                        <Button
                            id={item.gender}
                            className={"searchTabButton"}
                            onClick = {(e) => handleChange(e.target.id)}
                            variant={"outline-secondary"}
                        >{item.gender}
                        </Button>

                    )}

                </div>

            </Roll>

        );

    }

    else {
        return <div/>
    }



}
