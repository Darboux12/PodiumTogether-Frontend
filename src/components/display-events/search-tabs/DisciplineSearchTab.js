import React, {useEffect, useState} from "react";
import Roll from "react-reveal";

import "../../../styles/display-events/search-tabs/DisciplineSearchTab.css"
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form'
import {findAllDisciplineFetch} from "../../fetch/Fetch";

export default function DisciplineSearchTab(props){

    const [allDisciplines,setAllDisciplines] = useState([]);

    let {show,selectDiscipline,selectedDisciplines} = props;

    useEffect(() => {

        findAllDisciplineFetch()

            .then(res => res.json())

            .then(res => {

                setAllDisciplines(res);

            })

            .catch(error => console.log(error));

    },[]);

    useEffect(() => {

        selectedDisciplines.map(item => {

            handleTabColorChange(item,true);


        });



    });

    const removeDiscipline = (discipline) => {

        let index = selectedDisciplines.indexOf(discipline);

        if (index > -1)
            selectedDisciplines.splice(index, 1);

    };

    const selectCheckedDiscipline = (discipline) => selectDiscipline(discipline);

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

    const handleChange = (discipline) => {

        if(selectedDisciplines.includes(discipline)){
            removeDiscipline(discipline);
            handleTabColorChange(discipline,false);
        }

        else {
            selectCheckedDiscipline(discipline);
            handleTabColorChange(discipline,true);
        }

    };

    if(show){

        return (

            <Roll>

                <div className={"searchTabContainer mt-3 ml-5"}>

                    {allDisciplines.map(item =>

                        <Button
                            id={item.discipline}
                            className={"searchTabButton"}
                            onClick = {(e) => handleChange(e.target.id)}
                            variant={"outline-secondary"}
                        >{item.discipline}
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
