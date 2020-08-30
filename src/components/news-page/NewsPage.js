import React, {Component} from "react";

import "../../styles/news-page/NewsPage.css"
import News from "./News";

class NewsPage extends Component{

    render(){

        return(

            <div className={"newsPage d-flex flex-column align-items-center"}>
                <News/>
                <News/>
                <News/>
                <News/>
                <News/>
                <News/>




            </div>







        );
    }

}

export default NewsPage;