import React, {Component} from "react";

class  AboutItemMobile extends Component{

    render(){
        return(

            <div className={"d-flex flex-column aboutItemContainer align-items-center mb-5"}>



                <div className={"aboutText"}>

                    <h className={"aboutPageHeader"}>{this.props.header}</h>
                    <img className={"aboutImage w-100 mt-2 mb-2"} src={this.props.image} alt="aboutPageImage"/>
                    <p className={"aboutPageParagraph"}>{this.props.paragraph}</p>

                </div>



            </div>



        );
    }

}export default AboutItemMobile;