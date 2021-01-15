import React, {Component, useEffect, useState} from "react";

import "../../../styles/display-places/page/DisplayPlacesPage.css"
import displayPlacesImage from "../../../images/stadium.jpg";


import Place from "./Place";
import EventsSearchBar from "../../search-bar/search-bar/EventsSearchBar";
import {findAllPlaceFetch} from "../../fetch/Fetch";
import {faDollarSign, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SearchMessage from "./SearchMessage";


export default function DisplayPlacesPage(){

    const [allItems,setAllItems] = useState([]);

    const [placeItems,setPlaceItems] = useState([]);

    const [messageVisible,setMessageVisible] = useState(false);

    const [searchMessage, setSearchMessage] = useState("");

    useEffect(() => {

        findAllPlaceFetch()

            .then(res => res.json())

            .then(res => {
                setPlaceItems(res);
                setAllItems(res);

            })

    },[]);

    useEffect(() => {

        if(searchMessage !== "" && !messageVisible)
            setMessageVisible(true);

    });

    const msg = messageVisible ? <SearchMessage message = {searchMessage}/> : <div/>;

    return(

        <div className={"displayPlacesPageContainer"}>

            <img className={"displayPlacesImage"} src={displayPlacesImage} alt={"Display Places Page Image"}/>

            <EventsSearchBar
                places = {allItems}
                setPlaces={(places) => setPlaceItems(places)}
                setMessage={(message) => setSearchMessage(message)}
            />

            {msg}

            <div className={"PlacesList"}>

                {placeItems.map(item =>

                    <Place
                        name={item.name}
                        discipline={item.discipline}
                        city={item.localization.city}
                        street={item.localization.street}
                        postalCode={item.localization.postalCode}
                        number={item.localization.buildingNumber}
                        businessDays={item.businessDays}
                        minAge = {item.minAge}
                        maxAge = {item.maxAge}
                        image = {item.images[0]}
                        cost = {item.cost}
                        usageTime = {item.usageTime}
                        id = {item.id}
                    />



                )}




            </div>

        </div>

    );
}

