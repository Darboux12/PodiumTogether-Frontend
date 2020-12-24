import React, {Component, useEffect, useState} from "react";

import "../../../styles/display-places/page/DisplayPlacesPage.css"
import displayPlacesImage from "../../../images/stadium.jpg";
import PlacesSearchBar from "../search-bar/PlacesSearchBar";
import Event from "../../display-events/page/Event";
import {findAllNewsFetch, findAllPlaceFetch} from "../../fetch/Fetch";
import News from "../../news/News";
import Place from "./Place";


export default function DisplayPlacesPage(){

    const [isLoaded,setIsLoaded] = useState(false);
    const [placeItems,setPlaceItems] = useState([]);

    useEffect(() => {

        findAllPlaceFetch()

            .then(res => res.json())

            .then(res => {

                setIsLoaded(true);
                setPlaceItems(res);

            })

    },[]);

    return(

        <div className={"displayPlacesPageContainer"}>

            <img className={"displayPlacesImage"} src={displayPlacesImage} alt={"Display Places Page Image"}/>

            <PlacesSearchBar/>

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

