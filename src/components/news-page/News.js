import React, {Component} from "react";

import picture from "../../images/person.jpg"

import "../../styles/news-page/News.css"

class News extends Component{

    render(){

        return(

            <div className={"newsContainer d-flex flex-row col-md-8 col-12 align-items-center"}>

                <img className={"newsImage"} src={picture} alt={"newsImage"}/>

                <div className={"newsTexts"}>

                    <h className={"newsHeader"}>Podium Together is most popular app in the world</h>

                    <p  className={"newsParagraph mt-3 mb-3"}>We would like to announce that podium together is the most popular
                    app in the world. Seriously, there is no one better then we.
                    We wouldn't have achieved it without out. Thank you!</p>

                    <a className={"newsLink"} href={"#"}>Find out more about our awesome record...</a>




                </div>




            </div>







        );



    }

}

export default News;