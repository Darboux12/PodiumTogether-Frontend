import "../../styles/edit-profile/EditProfilePage.css"
import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import serverAddress, {
    addUserEndpoint,
    authenticateNoToken,
    findAllCountryEndpoint,
    profileImageUploadEndpoint
} from "../config/Constants"
import {findUserByUsernameEndpoint} from "../config/Constants";
import {updateUserProfileEndpoint} from "../config/Constants";
import {
    maxEmailLength,
    maxPasswordLength,
    maxUsernameLength,
    minPasswordLength,
    minSignUpAge,
    minUsernameLength
} from "../config/Limits";
import * as emailValidator from "email-validator";
import SubmitModal from "../common/SubmitModal";
import FormControl from "react-bootstrap/FormControl";
import isValidBirthdate from "is-valid-birthdate";
import {maxUserDescriptionLength} from "../config/Limits";
import podiumStorage from "../config/Storage";
import ImageUploader from 'react-images-upload';
import jwtDecode from "jwt-decode";
import {updateUserProfileFetch} from "../fetch/Fetch";

import emptyProfile from "../../images/emptyProfile.png";

export default function EditProfilePage() {

    const emailSubmitButtonId = "EmailSubmitButton";
    const usernameSubmitButtonId = "UsernameSubmitButton";
    const birthSubmitButtonId = "BirthSubmitButton";
    const countrySubmitButtonId = "CountrySubmitButton";
    const passwordSubmitButtonId = "PasswordSubmitButton";
    const descriptionSubmitButtonId = "DescriptionSubmitButton";
    const imageSubmitButtonId = "ImageSubmitButton";

    const emailCheckboxId = "EmailCheckbox";
    const usernameCheckboxId = "UsernameCheckbox";
    const birthCheckboxId = "BirthCheckbox";
    const countryCheckboxId = "CountryCheckbox";
    const passwordCheckboxId = "PasswordCheckbox";
    const descriptionCheckboxId = "DescriptionCheckbox";
    const imageCheckboxId = "ImageCheckbox";

    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [birth,setBirth] = useState(new Date());
    const [country,setCountry] = useState("");
    const [password,setPassword] = useState("");
    const [repeatPassword,setRepeatPassword] = useState("");
    const [oldPassword,setOldPassword] = useState("");
    const [description,setDescription] = useState("");
    const [image,setImage] = useState(new File([""], "empty-file"));

    const [emailError,setEmailError] = useState("");
    const [usernameError,setUsernameError] = useState("");
    const [birthError,setBirthError] = useState("");
    const [countryError,setCountryError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [repeatPasswordError,setRepeatPasswordError] = useState("");
    const [oldPasswordError,setOldPasswordError] = useState("");
    const [descriptionError,setDescriptionError] = useState("");
    const [imagesError,setImagesError] = useState("");

    const [emailConfirmation,setEmailConfirmation] = useState(false);
    const [usernameConfirmation,setUsernameConfirmation] = useState(false);
    const [birthConfirmation,setBirthConfirmation] = useState(false);
    const [countryConfirmation,setCountryConfirmation] = useState(false);
    const [passwordConfirmation,setPasswordConfirmation] = useState(false);
    const [descriptionConfirmation,setDescriptionConfirmation] = useState(false);
    const [imageConfirmation,setImageConfirmation] = useState(false);

    const [countryItems, setCountryItems] = useState([]);
    const [submitModalVisible,setSubmitModalVisible] = useState(false);
    const [userData,setUserData] = useState("");
    const [isLoaded,setIsLoaded] = useState(false);
    let profileImage = podiumStorage.get("profileImage")
    ? `data:image/jpeg;base64,${podiumStorage.get("profileImage").content}` :
        "";

    const findAllCountriesFetch = () => {

        fetch(serverAddress + findAllCountryEndpoint)
            .then(res => res.json())
            .then(res => {

                setCountryItems(res);

            });
    };

    const findUserByUsernameFetch = () => {

        let username = podiumStorage.get("authorizationToken")
            ? jwtDecode(podiumStorage.get("authorizationToken")).sub : "";

        fetch(serverAddress + findUserByUsernameEndpoint + username)

            .then((res) => {

                if (res.status === 409)
                    console.log("Server status 409");

                else return res.json()
            })

            .then(res => {
                setUserData(res);
                podiumStorage.set("profileImage", res.profileImage);
                setIsLoaded(true);

            })

            .catch((error) => {
                console.log(error);
            });
    };

    const changeUserProfileImage = () => {

        let username = podiumStorage.get("authorizationToken")
            ? jwtDecode(podiumStorage.get("authorizationToken")).sub : "";

        fetch(serverAddress + findUserByUsernameEndpoint + username)

            .then((res) => {

                if (res.status === 409)
                    console.log("Server status 409");

                else return res.json()
            })

            .then(res => {

                podiumStorage.set("profileImage", res.profileImage);

                setSubmitModalVisible(true);

                setTimeout(() => {
                    window.location.reload()
                }, 2000);



            })

            .catch((error) => {
                console.log(error);
            });




    };

    useEffect(() => {

        findAllCountriesFetch();

        findUserByUsernameFetch();

    },[]);

    const formValidation = (id) => {

        let isOk = true;

        setEmailError("");
        setUsernameError("");
        setBirthError("");
        setCountryError("");
        setPasswordError("");
        setOldPasswordError("");
        setRepeatPasswordError("");
        setImagesError("");

        if(id === emailSubmitButtonId){

            if(!emailConfirmation){
                setEmailError("You must confirm change!");
                isOk = false;
            }

            if(email === ""){
                setEmailError("Email cannot be empty!");
                isOk = false;
            }

            if(email.length > maxEmailLength){
                setEmailError("Email must be shorter than" + maxEmailLength + "!");
                isOk = false;
            }

            if(email !== "" && !emailValidator.validate(email)){
                setEmailError("This is not correct email address!");
                isOk = false;
            }
        }

        if(id === usernameSubmitButtonId){

            if(!usernameConfirmation){
                setUsernameError("You must confirm change!");
                isOk = false;
            }

            if(username.length < minUsernameLength){
                setUsernameError("Username must be longer than " + minUsernameLength + "!");
                isOk = false;
            }

            if(username.length > maxUsernameLength){
                setUsernameError("Username must be shorter than " + maxUsernameLength + "!");
                isOk = false;
            }

            if(username === ""){
                setUsernameError("Username cannot be empty!");
                isOk = false;
            }
        }

        if(id === birthSubmitButtonId){

            if(!birthConfirmation){
                setBirthError("You must confirm change!");
                isOk = false;
            }

            if(birth === ""){
                setBirthError("Birthday cannot be empty!");
                isOk = false;
            }

            if(birth !== "" && !isValidBirthdate(birth,{ minAge: minSignUpAge})){
                setBirthError("This is not valid birthday or you are under " + minSignUpAge);
                isOk = false;
            }

        }

        if(id === countrySubmitButtonId){

            if(!countryConfirmation){
                setCountryError("You must confirm change!");
                isOk = false;
            }

            if(country === ""){
                setCountryError("Country cannot be empty!");
                isOk = false;
            }

        }

        if(id === passwordSubmitButtonId){

            if(!passwordConfirmation){
                setPasswordError("You must confirm change!");
                isOk = false;
            }

            if(oldPassword === ""){
                setOldPasswordError("Old password cannot be empty!");
                isOk = false;
            }

            if(password === ""){
                setPasswordError("Password cannot be empty!");
                isOk = false;
            }

            if(password.length < minPasswordLength){
                setPasswordError("Password must be longer than " + minPasswordLength + "!");
                isOk = false;
            }

            if(password.length > maxPasswordLength){
                setPasswordError("Password must be shorter than " + maxPasswordLength + "!");
                isOk = false;
            }

            if(repeatPassword === ""){
                setRepeatPasswordError("Repeat password cannot be empty!");
                isOk = false;
            }

            if(password !== repeatPassword){
                setRepeatPasswordError("Repeat password must be the same as password!");
                isOk = false;
            }

            const user = {
                    username: username,
                    password: oldPassword
                };

            const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(user)
                };

            fetch(serverAddress + authenticateNoToken, requestOptions)

                .then((res) => {

                        if (!res.ok) {

                            isOk = false;
                            setOldPasswordError("Password is incorrect!");

                        }
                    })

                .catch((error) => {console.log(error);});

            setTimeout( () => {

            },1000);

        }

        if(id === descriptionSubmitButtonId){

            if(!descriptionConfirmation){
                setDescriptionError("You must confirm change!");
                isOk = false;
            }

            if(description === ""){
                setDescriptionError("Description cannot be empty!");
                isOk = false;
            }

            if(description.length > maxUserDescriptionLength){
                setDescriptionError("Description must be shorter than " + maxUserDescriptionLength + "!");
                isOk = false;
            }

        }

        if(id === imageSubmitButtonId){

            if(!imageConfirmation){
                setImagesError("You must confirm change!");
                isOk = false;
            }

        }

        return isOk;

    };

    const uncheckButtons = () => {

        document.getElementById(emailCheckboxId).checked = false;
        document.getElementById(usernameCheckboxId).checked = false;
        document.getElementById(birthCheckboxId).checked = false;
        document.getElementById(countryCheckboxId).checked = false;
        document.getElementById(countryCheckboxId).checked = false;
        document.getElementById(passwordCheckboxId).checked = false;
        document.getElementById(descriptionCheckboxId).checked = false;
        document.getElementById(imageCheckboxId).checked = false;

    };

    const onFormSubmit = (id) => {

        if(formValidation(id)){

            uncheckButtons();

            let updateRequest = {
                id: userData.id,
                username: userData.username,
                email: userData.email,
                password: userData.password,
                country: userData.country,
                birthday: userData.birthday,
                description: userData.description,
                image : image
            };

            if (id === usernameSubmitButtonId)
                    updateRequest.username = username;

            if (id === emailSubmitButtonId)
                    updateRequest.email = email;

            if (id === birthSubmitButtonId)
                    updateRequest.birthday = birth;

            if (id === countrySubmitButtonId)
                    updateRequest.country = country;

            if (id === passwordSubmitButtonId)
                    updateRequest.password = password;

            if (id === descriptionSubmitButtonId)
                    updateRequest.description = description;

            updateUserProfileFetch(
                updateRequest.id,
                updateRequest.username,
                updateRequest.email,
                updateRequest.password,
                updateRequest.country,
                updateRequest.birthday,
                updateRequest.description,
                updateRequest.image
            )

                .then(res => {

                    if (res.ok) {

                        if (id === usernameSubmitButtonId){
                            podiumStorage.set('username', username);
                        }


                        setSubmitModalVisible(true);

                        findUserByUsernameFetch();

                        setTimeout(() => {
                                window.location.reload()
                            }, 1000);

                    } else return res.json();
                })

                .then(res => {console.log(res);});

        }

    };

    if (isLoaded)

    return(

        <Container className={"col-10"}>

            <Accordion className={"AccordionContainer"}>

                <Card className={"AccordionCard"}>

                    <Accordion.Toggle as={Card.Header} eventKey="0" className={"AccordionToggle"}>

                        <Row className={"EditProfileRow"}>
                            <h className={"EditProfileCategoryTitle"}>Email</h>
                            <h className={"EditProfileCategoryText"}>{userData.email}</h>
                            <h className={"EditProfileEditHeader"}>Edit</h>
                        </Row>

                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">

                        <Card.Body>

                            <Form.Group controlId={""}>
                                <Form.Label>New Email Address</Form.Label>

                                <h className={"ErrorHeader ml-3"}>{emailError}</h>

                                <div className={"d-flex flex-row"}>

                                    <Form.Control
                                        type="email"
                                        placeholder="Enter new email..."
                                        className={"EditProfileInput col-6"}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    />

                                    <Button
                                        id={emailSubmitButtonId}
                                        variant={"outline-primary"}
                                        onClick={(e) => onFormSubmit(e.target.id)}

                                    >Submit change</Button>

                                </div>
                            </Form.Group>

                            <Form.Group
                                controlId={emailCheckboxId}
                            >
                                <Form.Check
                                    className={"EditProfileCheckBox"}
                                    type="checkbox"
                                    label="Confirm change"
                                    onChange = {(e) => setEmailConfirmation(e.target.checked)}/>
                            </Form.Group>

                        </Card.Body>

                    </Accordion.Collapse>

                </Card>

                <Card className={"AccordionCard"}>

                    <Accordion.Toggle as={Card.Header} eventKey="1" className={"AccordionToggle"}>

                        <Row className={"EditProfileRow"}>
                            <h className={"EditProfileCategoryTitle"}>Username</h>
                            <h className={"EditProfileCategoryText"}>{userData.username}</h>
                            <h className={"EditProfileEditHeader"}>Edit</h>
                        </Row>

                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">

                        <Card.Body>

                            <Form.Group controlId={""}>
                                <Form.Label>New Username</Form.Label>

                                <h className={"ErrorHeader ml-3"}>{usernameError}</h>

                                <div className={"d-flex flex-row"}>

                                    <Form.Control
                                        type="email"
                                        placeholder="Enter new username..."
                                        className={"EditProfileInput col-6"}
                                        onChange = {(e) => setUsername(e.target.value)}
                                    />

                                    <Button
                                        id={usernameSubmitButtonId}
                                        variant={"outline-primary"}
                                        onClick={(e) => onFormSubmit(e.target.id)}

                                    >Submit change</Button>

                                </div>
                            </Form.Group>

                            <Form.Group
                                controlId= {usernameCheckboxId}
                            >
                                <Form.Check
                                    className={"EditProfileCheckBox"}
                                    type="checkbox"
                                    label="Confirm change"
                                    onChange = {(e) => setUsernameConfirmation(e.target.checked)}/>
                            </Form.Group>

                        </Card.Body>

                    </Accordion.Collapse>

                </Card>

                <Card className={"AccordionCard"}>

                    <Accordion.Toggle as={Card.Header} eventKey="2" className={"AccordionToggle"}>

                        <Row className={"EditProfileRow"}>
                            <h className={"EditProfileCategoryTitle"}>Birthday</h>
                            <h className={"EditProfileCategoryText"}>{new Date(userData.birthday).toLocaleDateString()}</h>
                            <h className={"EditProfileEditHeader"}>Edit</h>
                        </Row>

                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="2">

                        <Card.Body>

                            <Form.Group controlId={""}>
                                <Form.Label>New Username</Form.Label>

                                <h className={"ErrorHeader ml-3"}>{birthError}</h>

                                <div className={"d-flex flex-row"}>

                                    <Form.Control
                                        type="date"
                                        className={"EditProfileInput col-6"}
                                        onChange = {(e) => setBirth(e.target.value)}
                                    />

                                    <Button
                                        id={birthSubmitButtonId}
                                        variant={"outline-primary"}
                                        onClick={(e) => onFormSubmit(e.target.id)}

                                    >Submit change</Button>

                                </div>
                            </Form.Group>

                            <Form.Group
                                controlId={birthCheckboxId}
                            >
                                <Form.Check
                                    className={"EditProfileCheckBox"}
                                    type="checkbox"
                                    label="Confirm change"
                                    onChange = {(e) => setBirthConfirmation(e.target.checked)}/>
                            </Form.Group>

                        </Card.Body>

                    </Accordion.Collapse>

                </Card>

                <Card className={"AccordionCard"}>

                    <Accordion.Toggle as={Card.Header} eventKey="3" className={"AccordionToggle"}>

                        <Row className={"EditProfileRow"}>
                            <h className={"EditProfileCategoryTitle"}>Country</h>
                            <h className={"EditProfileCategoryText"}>{userData.country}</h>
                            <h className={"EditProfileEditHeader"}>Edit</h>
                        </Row>

                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="3">

                        <Card.Body>

                            <Form.Group controlId={""}>
                                <Form.Label>New Country</Form.Label>

                                <h className={"ErrorHeader ml-3"}>{countryError}</h>

                                <div className={"d-flex flex-row"}>

                                    <FormControl
                                        className={"col-6 EditProfileInput"}
                                        as="select"
                                        size={1}
                                        onChange = {(e) => setCountry(e.target.value)}
                                    >

                                        {countryItems.map(item =>
                                            <option key={item.name} value={item.name}>{item.name}</option>
                                        )};

                                    </FormControl>

                                    <Button
                                        id={countrySubmitButtonId}
                                        variant={"outline-primary"}
                                        onClick={(e) => onFormSubmit(e.target.id)}

                                    >Submit change</Button>

                                </div>
                            </Form.Group>

                            <Form.Group
                                controlId={countryCheckboxId}
                            >
                                <Form.Check
                                    className={"EditProfileCheckBox"}
                                    type="checkbox"
                                    label="Confirm change"
                                    onChange = {(e) => setCountryConfirmation(e.target.checked)}/>
                            </Form.Group>

                        </Card.Body>

                    </Accordion.Collapse>

                </Card>

                <Card className={"AccordionCard"}>

                    <Accordion.Toggle as={Card.Header} eventKey="4" className={"AccordionToggle"}>

                        <Row className={"EditProfileRow"}>
                            <h className={"EditProfileCategoryTitle"}>Password</h>
                            <h className={"EditProfileEditHeader"}>Edit</h>
                        </Row>

                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="4">

                        <Card.Body>

                            <Form.Group controlId={""}>

                                <Form.Label>Current Password</Form.Label>

                                <h className={"ErrorHeader ml-3"}>{oldPasswordError}</h>

                                    <FormControl
                                        className={"col-6 EditProfileInput"}
                                        type={"password"}
                                        size={1}
                                        onChange = {(e) => setOldPassword(e.target.value)}
                                        placeholder={"Enter current password..."}
                                    >

                                    </FormControl>

                            </Form.Group>

                            <Form.Group controlId={""}>

                                <Form.Label>New Password</Form.Label>

                                <h className={"ErrorHeader ml-3"}>{passwordError}</h>

                                <FormControl
                                    className={"col-6 EditProfileInput"}
                                    type={"password"}
                                    size={1}
                                    onChange = {(e) => setPassword(e.target.value)}
                                    placeholder={"Enter new password..."}
                                >



                                </FormControl>

                            </Form.Group>

                            <Form.Group controlId={""}>

                                <Form.Label>Repeat Password</Form.Label>

                                <h className={"ErrorHeader ml-3"}>{repeatPasswordError}</h>

                                <FormControl
                                    className={"col-6 EditProfileInput"}
                                    type={"password"}
                                    size={1}
                                    onChange = {(e) => setRepeatPassword(e.target.value)}
                                    placeholder={"Repeat new password..."}
                                >



                                </FormControl>

                            </Form.Group>

                            <Form.Group
                                controlId={passwordCheckboxId}
                            >
                                <Form.Check
                                    className={"EditProfileCheckBox"}
                                    type="checkbox"
                                    label="Confirm change"
                                    onChange = {(e) => setPasswordConfirmation(e.target.checked)}/>
                            </Form.Group>

                            <Button
                                id={passwordSubmitButtonId}
                                variant={"outline-primary"}
                                onClick={(e) => onFormSubmit(e.target.id)}

                            >Submit change</Button>

                        </Card.Body>

                    </Accordion.Collapse>

                </Card>

                <Card className={"AccordionCard"}>

                    <Accordion.Toggle as={Card.Header} eventKey="5" className={"AccordionToggle"}>

                        <Row className={"EditProfileRow"}>
                            <h className={"EditProfileCategoryTitle"}>Description</h>
                            <h className={"EditProfileEditHeader"}>Edit</h>
                        </Row>

                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="5">

                        <Card.Body>

                            <Form.Group controlId={""}>
                                <Form.Label>Description</Form.Label>

                                <h className={"ErrorHeader ml-3"}>{descriptionError}</h>

                                    <Form.Control
                                        as="textarea" rows={6}
                                        defaultValue={userData.description}
                                        className={"EditProfileInput col-6"}
                                        onChange = {(e) => setDescription(e.target.value)}
                                    />

                            </Form.Group>

                            <Form.Group
                                controlId={descriptionCheckboxId}
                            >
                                <Form.Check
                                    className={"EditProfileCheckBox"}
                                    type="checkbox"
                                    label="Confirm change"
                                    onChange = {(e) => setDescriptionConfirmation(e.target.checked)}/>
                            </Form.Group>

                            <Button
                                id={descriptionSubmitButtonId}
                                variant={"outline-primary"}
                                onClick={(e) => onFormSubmit(e.target.id)}

                            >Submit change</Button>



                        </Card.Body>

                    </Accordion.Collapse>

                </Card>

                <Card className={"AccordionCard"}>

                    <Accordion.Toggle as={Card.Header} eventKey="6" className={"AccordionToggle"}>

                        <Row className={"EditProfileRow"}>
                            <h className={"EditProfileCategoryTitle"}>Profile Images</h>
                            <h className={"EditProfileEditHeader"}>Edit</h>
                        </Row>

                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="6">

                        <Card.Body>

                            <div className={"d-flex flex-column"}>

                                <Form.Label className={"FormLabel mt-1"} >Current Image</Form.Label>

                                <img className={"EditProfileCurrentImage mb-3"}
                                     src={profileImage}
                                     alt={"Profile photo is empty"}/>

                            </div>



                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label className={"FormLabel mt-1"} >New Image</Form.Label>
                                <h className={"ErrorHeader ml-3"}>{imagesError}</h>
                                <ImageUploader
                                    withIcon={false}
                                    buttonText='Choose profile image'
                                    onChange={(pic) => setImage(pic[0])}
                                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                    withPreview = {true}
                                    label=""
                                    singleImage = {true}
                                />
                            </Form.Group>

                            <Form.Group
                                controlId={imageCheckboxId}
                            >
                                <Form.Check
                                    className={"EditProfileCheckBox"}
                                    type="checkbox"
                                    label="Confirm change"
                                    onChange = {(e) => setImageConfirmation(e.target.checked)}/>
                            </Form.Group>

                            <Button
                                id={imageSubmitButtonId}
                                variant={"outline-primary"}
                                onClick={(e) => onFormSubmit(e.target.id)}

                            >Submit change</Button>




                        </Card.Body>

                    </Accordion.Collapse>

                </Card>

            </Accordion>

            <SubmitModal
                isSubmitModalVisible={submitModalVisible}
                closeSubmitModal={() => setSubmitModalVisible(false)}
                text = "Change request"
            />

        </Container>
    );

    else return <div/>



}
