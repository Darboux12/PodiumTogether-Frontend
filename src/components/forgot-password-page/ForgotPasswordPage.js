import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import ForgotPasswordForm from "./ForgotPasswordForm";

import "../../styles/forgot-password-components/ForgotPassword.css"

class ForgotPasswordPage extends Component{

    render(){
        return(

            <Container className={"forgotPasswordPageContainer"}>

                <div className={"d-flex flex-column"}>

                    <h className={"forgotPassMainHeader"}>Forgot password?</h>

                    <h className={"forgotPassSecondHeader"}>Dont worry! Give us your safe email address so we can send you a brand new password!</h>

                </div>


                <ForgotPasswordForm/>



            </Container>

        );
    }



}

export default ForgotPasswordPage;