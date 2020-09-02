import React, {Component} from "react";

import "../../styles/news-page/NewsPage.css"
import News from "./News";
import Container from "react-bootstrap/Container";

class NewsPage extends Component{

    render(){

        return(

            <Container>

                <News/>
                <News/>
                 <News/>
                 <News/>




            </Container>




                         




        );
    }

}

export default NewsPage;