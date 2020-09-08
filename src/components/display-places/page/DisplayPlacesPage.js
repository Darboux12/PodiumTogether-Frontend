import React, {Component} from "react";

import "../../../styles/display-places/page/DisplayPlacesPage.css"
import displayPlacesImage from "../../../images/displayPlacesImage.jpg";
import PlacesSearchBar from "../search-bar/PlacesSearchBar";
import Event from "../../display-events/page/Event";


export default function DisplayPlacesPage(){

    return(

        <div className={"displayPlacesPageContainer"}>

            <img className={"displayPlacesImage"} src={displayPlacesImage} alt={"Display Places Page Image"}/>

            <PlacesSearchBar/>

            <div className={"PlacesList"}>

                <Event
                    title={"Common play on orlik"}
                    discipline={"Football"}
                    city={"Kraków"}
                    street={"Lipowa"}
                    postalCode={"32-060"}
                    number={"64"}
                    date={"12.08.2020"}
                    bookedPeople={"3"}
                    numberPeople={"6"}
                />

            </div>



        </div>

    );
}

