import React, {Component} from "react";

import "../../styles/about-page/AboutItem.css"



class AboutItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
            leftImage : false
        };
    }


    render(){

        if(this.props.left !== true)

            return(

                <div className={"d-flex flex-row aboutItemContainer align-items-center mb-5"}>

                    <div className={"aboutText mr-5"}>

                        <h className={"aboutPageHeader"}>{this.props.header}</h>
                        <p className={"aboutPageParagraph"}>{this.props.paragraph}</p>

                    </div>

                    <img className={"aboutImage pl-3"} src={this.props.image} alt="aboutPageImage"/>

                </div>
            );

            else
                return(

                    <div className={"d-flex flex-row aboutItemContainer align-items-center"}>

                        <img className={"aboutImage pr-3"} src={this.props.image} alt="aboutPageImage"/>

                        <div className={"aboutText ml-5"}>

                            <h className={"aboutPageHeader"}>{this.props.header}</h>
                            <p className={"aboutPageParagraph"}>{this.props.paragraph}</p>

                        </div>

                    </div>


        );
    }

}

export default AboutItem;