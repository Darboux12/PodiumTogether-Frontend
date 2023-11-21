import serverAddress from "../config/Constants";
import podiumStorage from "../config/Storage";
import jwtDecode from "jwt-decode";

export const endpoints = {

    "existDisciplineByName" : "/discipline/exist/",
    "findAllCountry" : "/country/find/all",
    "addDiscipline" : "/discipline/add",
    "addNews" : "/news/add",
    "newsImages" : "/image/upload/news",
    "existSubjectByName" : "/subject/exist/",
    "addSubject" : "/subject/add",
    "findAllUsers" : "/user/find/all",
    "deleteUser" : "/user/delete/",
    "findAllSubject" : "/subject/find/all",
    "addContact" : "/contact/add",
    "findAllDiscipline" : "/discipline/find/all",
    "findAllGender" : "/gender/find/all",
    "addEvent" : "/event/add",
    "uploadEventFiles" : "/file/upload/event",
    "uploadEventImages" : "/image/upload/event",
    "addPlace" : "/place/add",
    "findAllNews" : "/news/find/all",
    "findAllPlaces" : "/place/find/all",
    "addUser" : "/user/add",
    "existUserByEmail" : "/user/exist/email/",
    "existUserByUsername" : "/user/exist/username/",
    "authenticate" : "/authenticate",
    "findUserByUsername" : "/user/find/username/",
    "updateUserProfile" : "/user/update/profile",
    "findNewsById" : "/news/find/id/",
    "findPlaceById" : "/place/find/id/",
    "findAllRatingCategories" : "/rating/category/find/all",
    "authenticateNoToken" : "/authenticate/check",
    "addReview" : "/place/review/add",
    "findServerEndpointsCompatibility" : "/server/endpoints/compatibility",
    "incrementReviewLikes" : "/place/review/increment/likes/",
    "incrementReviewDislikes" : "/place/review/increment/dislikes/",
    "deletePlace" : "/place/delete/id/",
    "banUser" : "/user/ban",
    "findAllEvents" : "/event/find/all",

};

// DISCIPLINE

export const existDisciplineByNameFetch = (discipline) => {

    const existDisciplineByNameEndpoint = endpoints.existDisciplineByName;

    return fetch(serverAddress + existDisciplineByNameEndpoint + discipline);
};

export const addDisciplineFetch = (discipline) => {

    const addDisciplineEndpoint = endpoints.addDiscipline;

    const disciplineRequest = {discipline : discipline};

    let token = podiumStorage.get("authorizationToken");

    let bearer = 'Bearer ' + token;

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json','Authorization': bearer},
        body: JSON.stringify(disciplineRequest),
        withCredentials: true,
    };

    return fetch(serverAddress + addDisciplineEndpoint,requestOptions);

};

export const findAllDisciplineFetch = () => {

    const findAllDisciplineEndpoint = endpoints.findAllDiscipline;

    return fetch(serverAddress + findAllDisciplineEndpoint);

};

// NEWS

export const addNewsFetch = (title,shortText,linkText,fullText,images) => {

    const addNewsEndpoint = endpoints.addNews;

    const newsFormData = new FormData();

    for(const file of images){
        newsFormData.append("images",file);
    }

    newsFormData.append('news', new Blob([JSON.stringify({
        "title": title,
        "shortText": shortText,
        "linkText": linkText,
        "text": fullText
    })], {
        type: "application/json"
    }));

    let token = podiumStorage.get("authorizationToken");

    let bearer = 'Bearer ' + token;

    const requestOptions = {
        method: "POST",
        withCredentials: true,
        headers: {'Authorization': bearer},
        body: newsFormData
    };

    return fetch(serverAddress + addNewsEndpoint,requestOptions);

};

// SUBJECT

export const existSubjectByNameFetch = (subject) => {

    const existSubjectByNameEndpoint = endpoints.existSubjectByName;

    return fetch(serverAddress + existSubjectByNameEndpoint + subject);
};

export const addSubjectFetch = (subject) => {

    const addSubjectEndpoint = endpoints.addSubject;

    const subjectData = {subject : subject};

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(subjectData)
    };

    return fetch(serverAddress + addSubjectEndpoint,requestOptions)

};

export const findAllSubjectsFetch = () => {

    const findAllSubjectEndpoint = endpoints.findAllSubject;

    return fetch(serverAddress + findAllSubjectEndpoint);

};

// USER

export const findAllUsersFetch = () => {

    const findAllUsersEndpoint = endpoints.findAllUsers;

    let token = podiumStorage.get("authorizationToken");

    let bearer = 'Bearer ' + token;

    const requestOptions = {
        method: "GET",
        withCredentials: true,
        headers: {'Authorization': bearer},
    };

    return fetch(serverAddress + findAllUsersEndpoint,requestOptions);

};

export const deleteUserFetch = (username) => {

    let token = podiumStorage.get("authorizationToken");

    let bearer = 'Bearer ' + token;

    const deleteUserEndpoint = endpoints.deleteUser;

    const requestOptions = {
        method: 'DELETE',
        withCredentials: true,
        headers: {'Authorization': bearer}
    };

    return fetch(serverAddress + deleteUserEndpoint + username,requestOptions);

};

export const addUserFetch = (email,password,username,birthday,country) => {

    const addUserEndpoint = "/user/add";

    const formData = {
        email : email,
        password : password,
        username : username,
        birthday : birthday,
        country : country
    };

    const requestOption = {
        method: 'POST',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    };

    return fetch(serverAddress + addUserEndpoint,requestOption);

};

export const existUserByEmailFetch = (email) => {

    const existUserByEmailEndpoint = "/user/exist/email/";

    return fetch(serverAddress + existUserByEmailEndpoint + email)
};

export const existUserByUsernameFetch = (username) => {

    const existUserByUsernameEndpoint = "/user/exist/username/";

    return  fetch(serverAddress + existUserByUsernameEndpoint + username)
};

export const signInUserFetch = (username,password) => {

    const authenticateEndpoint = "/authenticate";

    const user = {
        username: username,
        password: password
    };

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch(serverAddress + authenticateEndpoint, requestOptions)

};

export const findUserByUsernameFetch = (username) => {

    const findUserByUsernameEndpoint = "/user/find/username/";

    let token = podiumStorage.get("authorizationToken");

    let bearer = 'Bearer ' + token;

    let requestOptions = {
        method: 'GET',
        withCredentials: true,
        headers: {'Authorization': bearer, 'Content-Type': 'application/json'}
    };

    return fetch(serverAddress + findUserByUsernameEndpoint + username,requestOptions);

};

export const updateUserProfileFetch = (id,username,email,password,country,
                                       birthday,description,image) => {

    const updateUserProfileEndpoint = "/user/update/profile";

    const updateForm = new FormData();

    const request = {
        id: id,
        username: username,
        email: email,
        password: password,
        country: country,
        birthday: birthday,
        description: description
    };

    updateForm.append('request', new Blob([JSON.stringify(

        request

    )], {type: "application/json"}));

    updateForm.append("image",image);

    let token = podiumStorage.get("authorizationToken");

    let bearer = 'Bearer ' + token;

    const requestOptions = {
        method: "POST",
        withCredentials: true,
        headers: {'Authorization': bearer},
        body: updateForm
    };

    return fetch(serverAddress + updateUserProfileEndpoint,requestOptions);

};

export const authenticateNoTokenFetch = (username, oldPassword) => {

    const authenticateNoToken = "/authenticate/check";

    const user = {
        username: username,
        password: oldPassword
    };

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch(serverAddress + authenticateNoToken, requestOptions);

};

export const banUserFetch = (dateFrom,dateTo,reason,username) => {

    let token = podiumStorage.get("authorizationToken");

    let bearer = 'Bearer ' + token;

    const banUserEndpoint = endpoints.banUser;

    const request = {
        dateFrom : dateFrom,
        dateTo : dateTo,
        reason : reason,
        usernameToBan : username
    };

    const requestOptions = {
        method: 'PATCH',
        withCredentials: true,
        headers: {'Authorization': bearer,'Content-Type': 'application/json'},
        body: JSON.stringify(request)
    };

    return fetch(serverAddress + banUserEndpoint,requestOptions);

};

// CONTACT

export const addContactFetch = (email,subject,message) => {

    const addContactEndpoint = endpoints.addContact;

    const contactRequest = {
        userEmail: email,
        subject: subject,
        message: message
    };

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactRequest)
    };

    return fetch(serverAddress + addContactEndpoint,requestOptions);

};

// GENDER

export const findAllGendersFetch = () => {

    const findAllGenderEndpoint = endpoints.findAllGender;

    return  fetch(serverAddress + findAllGenderEndpoint);

};

// EVENT

export const addEventFetch = (title,dateFrom,dateTo,placeName,discipline,
                              people,genders,minAge,maxAge,description,images,documents) =>
{
    const addEventEndpoint = endpoints.addEvent;

    const EventForm = new FormData();

    const event= {
        title : title,
        dateFrom : dateFrom,
        dateTo : dateTo,
        placeName : placeName,
        discipline : discipline,
        people : people,
        genders : genders,
        minAge : minAge,
        maxAge : maxAge,
        description : description
    };

    EventForm.append('event', new Blob([JSON.stringify(

        event

    )], {
        type: "application/json"
    }));

    for(const file of images){
        EventForm.append("images",file);
    }

    for(const file of documents){
        EventForm.append("documents",file);
    }

    let token = podiumStorage.get("authorizationToken");

    let bearer = 'Bearer ' + token;

    const requestOptions = {
        method: 'POST',
        withCredentials: true,
        headers: {'Authorization': bearer},
        body: EventForm
    };

    return fetch(serverAddress + addEventEndpoint,requestOptions);

};

export const findAllEventsFetch = () => {

    const findAllEventsEndpoint = endpoints.findAllEvents;

    let token = podiumStorage.get("authorizationToken");

    let bearer = 'Bearer ' + token;

    let requestOptions = {
        method: 'GET',
        withCredentials: true,
        headers: {'Authorization': bearer, 'Content-Type': 'application/json'}
    };

    return fetch(serverAddress + findAllEventsEndpoint,requestOptions);

};

// PLACE

export const addPlaceFetch = (
    name,discipline,placeLocalization,openingDays,cost,usageTime,
    minAge,maxAge,ratings,review,images,documents) => {

    const addPlaceEndpoint = endpoints.addPlace;

    const PlaceForm = new FormData();

    const place = {
        name : name,
        discipline : discipline,
        localization : placeLocalization,
        businessDays : openingDays,
        cost : cost,
        usageTime : usageTime,
        minAge : minAge,
        maxAge : maxAge
    };


    PlaceForm.append('place', new Blob([JSON.stringify(

        place

    )], {
        type: "application/json"
    }));

    for(const file of images){
        PlaceForm.append("images",file);
    }

    for(const file of documents){
        PlaceForm.append("documents",file);
    }

    let token = podiumStorage.get("authorizationToken");
    let bearer = 'Bearer ' + token;

    const requestOptions = {
        method: "POST",
        withCredentials: true,
        headers: {'Authorization': bearer},
        body: PlaceForm
    };

    return fetch(serverAddress + addPlaceEndpoint, requestOptions);

};

export const findAllPlaceFetch = () => {

    let token = podiumStorage.get("authorizationToken");

    let bearer = 'Bearer ' + token;

    let requestOptions = {
        method: 'GET',
        withCredentials: true,
        headers: {'Authorization': bearer, 'Content-Type': 'application/json'}
    };

    const findAllPlacesEndpoint = "/place/find/all";

    return  fetch(serverAddress + findAllPlacesEndpoint,requestOptions)

};

export const findPlaceByIdFetch = (id) => {

    let token = podiumStorage.get("authorizationToken");

    let bearer = 'Bearer ' + token;

    let requestOptions = {
        method: 'GET',
        withCredentials: true,
        headers: {'Authorization': bearer, 'Content-Type': 'application/json'}
    };

    const findPlaceByIdEndpoint = "/place/find/id/";

    return fetch(serverAddress + findPlaceByIdEndpoint + id, requestOptions);
};

export const findAllRatingCategoriesFetch = () => {

    let token = podiumStorage.get("authorizationToken");

    let bearer = 'Bearer ' + token;

    let requestOptions = {
        method: 'GET',
        withCredentials: true,
        headers: {'Authorization': bearer, 'Content-Type': 'application/json'}
    };

    const findAllRatingCategoriesEndpoint = "/rating/category/find/all";

    return fetch(serverAddress + findAllRatingCategoriesEndpoint,requestOptions);
};

export const addPlaceReviewFetch = (placeName,ratings,review,images) => {

    const addReviewEndpoint = endpoints.addReview;

    let token = podiumStorage.get("authorizationToken");
    let bearer = 'Bearer ' + token;
    let author = jwtDecode(token).sub;

    const ReviewForm = new FormData();

    let placeReview = {
        author : author,
        place : placeName,
        starRatings : ratings,
        opinion : review
    };

    ReviewForm.append('review', new Blob([JSON.stringify(

        placeReview

    )], {
        type: "application/json"
    }));

    for(const file of images){
        ReviewForm.append("images",file);
    }

    const requestOptions = {
        method: "POST",
        withCredentials: true,
        headers: {'Authorization': bearer},
        body: ReviewForm
    };

    return fetch(serverAddress + addReviewEndpoint, requestOptions);

};

export const incrementReviewLikesFetch = (id) => {
    let token = podiumStorage.get("authorizationToken");

    let bearer = 'Bearer ' + token;

    let requestOptions = {
        method: 'PATCH',
        withCredentials: true,
        headers: {'Authorization': bearer, 'Content-Type': 'application/json'}
    };

    const incrementReviewLikesEndpoint = endpoints.incrementReviewLikes;

    return  fetch(serverAddress + incrementReviewLikesEndpoint + id,requestOptions)

};

export const incrementReviewDislikesFetch = (id) => {

    let token = podiumStorage.get("authorizationToken");

    let bearer = 'Bearer ' + token;

    let requestOptions = {
        method: 'PATCH',
        withCredentials: true,
        headers: {'Authorization': bearer, 'Content-Type': 'application/json'}
    };

    const incrementReviewDislikesEndpoint = endpoints.incrementReviewDislikes;

    return  fetch(serverAddress + incrementReviewDislikesEndpoint + id,requestOptions)

};

export const deletePlaceFetch = (id) => {

    let token = podiumStorage.get("authorizationToken");

    let bearer = 'Bearer ' + token;

    const deleteUserEndpoint = endpoints.deletePlace;

    const requestOptions = {
        method: 'DELETE',
        withCredentials: true,
        headers: {'Authorization': bearer}
    };

    return fetch(serverAddress + deleteUserEndpoint + id,requestOptions);

};




// COUNTRY

export const findAllCountryFetch = () => {

    const findAllCountryEndpoint = endpoints.findAllCountry;

    return  fetch(serverAddress + findAllCountryEndpoint)

};

// NEWS

export const findAllNewsFetch = () => {

    const findAllNewsEndpoint = endpoints.findAllNews;

    return  fetch(serverAddress + findAllNewsEndpoint)

};

export const findNewsByIdFetch = (id) => {

    const findNewsByIdEndpoint = "/news/find/id/";

    return fetch(serverAddress + findNewsByIdEndpoint + id);
};


// SYNCHRONIZATION

export const checkEndpointCompatibility = () => {

    let endpointsToSend = [];

    for(let i=0; i < Object.keys(endpoints).length; i++){
        endpointsToSend = endpointsToSend.concat({name : Object.keys(endpoints)[i], value : Object.values(endpoints)[i]})
    }

    const checkEndpoint = endpoints.findServerEndpointsCompatibility;

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(endpointsToSend)
    };

    fetch(serverAddress + checkEndpoint, requestOptions)

        .then(res => res.json())

        .then(res => {

           console.log(res);

        });

};

//checkEndpointCompatibility();

