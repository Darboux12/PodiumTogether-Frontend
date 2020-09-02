import React, {Component} from "react";
import "../../styles/mainpage/MainPageAbout.css"

import AboutItem from "./AboutItem";

import "../../styles/mainpage/MainPageAbout.css"

import Rotate from 'react-reveal/Rotate';

import achieveGreatThingsImage from "../../images/achieveGreatThingsImage.jpg"
import haveFunImage from "../../images/haveFunImage.jpg"
import makeFriendsImage from "../../images/makeFriendsImage.jpg"
import sharePassionImage from "../../images/sharePassionImage.jpg"
import AboutItemMobile from "./AboutItemMobile";


class MainPageAbout extends Component{

    constructor(props){
        super(props);
    }


    render() {

        if(!this.props.mobile){

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















                </div>

            );

        }

        if(this.props.mobile){

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















            </div>
            );
        }






    }


}

export default MainPageAbout;