import React, {Component, useEffect, useState} from "react";

import "../../../styles/display-places/page/DisplayPlacesPage.css"
import displayPlacesImage from "../../../images/stadium.jpg";


import Place from "./Place";
import EventsSearchBar from "../../search-bar/search-bar/EventsSearchBar";
import {findAllPlaceFetch} from "../../fetch/Fetch";


export default function DisplayPlacesPage(){

    const [isLoaded,setIsLoaded] = useState(false);

    const [allItems,setAllItems] = useState([]);

    const [placeItems,setPlaceItems] = useState([]);

    useEffect(() => {

        findAllPlaceFetch()

            .then(res => res.json())

            .then(res => {

                setIsLoaded(true);
                setPlaceItems(res);
                setAllItems(res);

            })

    },[]);

    return(

        <div className={"displayPlacesPageContainer"}>

            <img className={"displayPlacesImage"} src={displayPlacesImage} alt={"Display Places Page Image"}/>

            <EventsSearchBar places = {allItems} setPlaces={(places) => setPlaceItems(places)}/>

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
                    />



                )}




            </div>

        </div>

    );
}

