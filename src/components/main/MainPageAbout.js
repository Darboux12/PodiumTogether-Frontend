import React, {Component} from "react";
import "../../styles/mainpage/MainPageAbout.css"
import AboutItem from "../about-item/AboutItem";
import "../../styles/mainpage/MainPageAbout.css"
import Rotate from 'react-reveal/Rotate';
import achieveGreatThingsImage from "../../images/achieveGreatThings.jpg"
import haveFunImage from "../../images/haveFunImage.jpg"
import makeFriendsImage from "../../images/makeFriendsImage.jpg"
import sharePassionImage from "../../images/sharePassionImage.jpg"
import discoverAmazingPlaces from "../../images/discoverAmazinPlacesImage.jpg"
import AboutItemMobile from "../about-item/AboutItemMobile";
import dontHesitate from "../../images/dontHesisateIamge.jpg"

export default function MainPageAbout(props){

        if(!props.mobile){

            return(

                <div>

                    <Rotate top right>
                        <AboutItem
                            header = "Share your passion"
                            paragraph = "
                    World is full of people who are crazy about same stuff as you and
                    cannot wait to enjoy it with you. Find them and together create
                    memories you will never forget!
                    "
                            image={sharePassionImage}
                            left={true}
                        />

                    </Rotate>

                    <Rotate top right>
                        <AboutItem
                            header = "Have fun"
                            paragraph = "
                    Hard work and giving your best is important, but the most
                    crucial thing is just having fun. So, do not wait and find
                    amazing, incredible places and enjoy your time!
                    "
                            image={haveFunImage}

                        />

                    </Rotate>

                    <Rotate top left>
                        <AboutItem
                            header = "Meet new people"
                            paragraph = "
                   Nothing connect people better than playing games and doing sports together.
                    Thousands of people cannot wait to meet you! It can be beginning of a
                    life-long friendship!
                    "
                            image={makeFriendsImage}
                            left={true}
                        />

                    </Rotate>

                    <Rotate top right>
                        <AboutItem
                            header = "Achieve great things"
                            paragraph = "
                    Working hard together is the best motivation in the world.
                    Make a team, improve your skills together and one day you will reach a peak!
                    "
                            image={achieveGreatThingsImage }
                        />

                    </Rotate>

                    <Rotate top left>
                        <AboutItem
                            header = "Discover incredible places"
                            paragraph = "
                    Amazing places where you can exercise are just around the corner! Discover them
                    all and make every workout unforgettable experience!
                    "
                            image={discoverAmazingPlaces}
                            left={true}
                        />

                    </Rotate>

                    <Rotate top right>
                        <AboutItem
                            header = "Don't hesitate! Join us now!"
                            paragraph = "Our community cannot wait to meet you
                            and share with you our amazing resources. Sign out and
                            discover everything on your own! :)"

                            image={dontHesitate}
                        />

                    </Rotate>

                </div>

            );

        }

        if(props.mobile){

            return(

                <div>

                    <Rotate top right>
                        <AboutItemMobile
                            header = "Share your passion"
                            paragraph = "
                        World is full of people who are crazy about same stuff as you and
                        cannot wait to enjoy it with you. Find them and together create
                        memories you will never forget!
                        "
                            image={sharePassionImage}
                            left={true}
                        />

                    </Rotate>

                    <Rotate top right>
                        <AboutItemMobile
                            header = "Have fun"
                            paragraph = "
                        Hard work and giving your best is important, but the most
                        crucial thing is just having fun. So, do not wait and find
                        amazing, incredible places and enjoy your time!
                        "
                            image={haveFunImage}

                        />

                    </Rotate>

                    <Rotate top left>
                        <AboutItemMobile
                            header = "Meet new people"
                            paragraph = "
                       Nothing connect people better than playing games and doing sports together.
                        Thousands of people cannot wait to meet you! It can be beginning of a
                        life-long friendship!
                        "
                            image={makeFriendsImage}
                            left={true}
                        />

                    </Rotate>

                    <Rotate top right>
                        <AboutItemMobile
                            header = "Achieve great things"
                            paragraph = "
                        Working hard together is the best motivation in the world.
                        Make a team, improve your skills together and one day you will reach a peak!
                        "
                            image={achieveGreatThingsImage }
                        />

                    </Rotate>

                    <Rotate top left>
                        <AboutItemMobile
                            header = "Discover incredible places"
                            paragraph = "
                    Amazing places where you can exercise are just around the corner! Discover them
                    all and make every workout unforgettable experience!
                    "
                            image={discoverAmazingPlaces}
                            left={true}
                        />

                    </Rotate>

                    <Rotate top right>
                        <AboutItem
                            header = "Don't hesitate! Join us now!"
                            paragraph = "Our community cannot wait to meet you
                            and share with you our amazing resources. Sign out and
                            discover everything on your own! :)"

                            image={dontHesitate}
                        />

                    </Rotate>

            </div>

            );
        }

}

