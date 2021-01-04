import serverAddress, {
    addContactEndpoint,
    addDisciplineEndpoint,
    addEventEndpoint,
    addNewsEndpoint,
    addPlaceEndpoint,
    addSubjectEndpoint,
    addUserEndpoint,
    authenticateEndpoint,
    deleteUserEndpoint,
    existDisciplineByNameEndpoint,
    existSubjectByNameEndpoint,
    existUserByEmailEndpoint,
    existUserByUsernameEndpoint,
    findAllDisciplineEndpoint,
    findAllGenderEndpoint,
    findAllNewsEndpoint,
    findAllPlacesEndpoint,
    findAllRatingCategoriesEndpoint,
    findAllSubjectEndpoint,
    findAllUsersEndpoint,
    findNewsByIdEndpoint,
    findPlaceByIdEndpoint, findServerEndpointsEndpoint,
    findUserByUsernameEndpoint,
    newsImagesUploadEndpoint,
    updateUserProfileEndpoint,
    uploadEventFilesEndpoint,
    uploadEventImagesEndpoint
} from "../config/Constants";
import podiumStorage from "../config/Storage";

export const existDisciplineByNameFetch = (discipline) => {

    return fetch(serverAddress + existDisciplineByNameEndpoint + discipline);
};

export const addDisciplineFetch = (discipline) => {

    const disciplineRequest = {discipline : discipline};

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(disciplineRequest)
    };

    return fetch(serverAddress + addDisciplineEndpoint,requestOptions);

};

export const addNewsFetch = (title,shortText,linkText,fullText,images) => {

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

    const requestOptions = {
        method: "POST",
        body: newsFormData
    };

    return fetch(serverAddress + addNewsEndpoint,requestOptions);

};

export const uploadNewsImagesFetch = (title,images) => {

    const  ImageData = new FormData();

    for(const file of images)
        ImageData.append("images",file);

    ImageData.append("title",title);

    const requestOptions = {
        method: 'POST',
        body: ImageData
    };

    return fetch(serverAddress + newsImagesUploadEndpoint,requestOptions);

};

export const existSubjectByNameFetch = (subject) => {
    return fetch(serverAddress + existSubjectByNameEndpoint + subject);
};

export const addSubjectFetch = (subject) => {

    const subjectData = {subject : subject};

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(subjectData)
    };

    return fetch(serverAddress + addSubjectEndpoint,requestOptions)

};

export const findAllUsersFetch = () => {

    return fetch(serverAddress + findAllUsersEndpoint);

};

export const deleteUserFetch = (username) => {

    const requestOptions = { method: 'DELETE'};

    return fetch(serverAddress + deleteUserEndpoint + username,requestOptions);

};

export const findAllSubjectsFetch = () => {

    return fetch(serverAddress + findAllSubjectEndpoint);

};

export const addContactFetch = (email,subject,message) => {

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

export const findAllDisciplineFetch = () => {

    return fetch(serverAddress + findAllDisciplineEndpoint);

};

export const findAllGendersFetch = () => {

   return  fetch(serverAddress + findAllGenderEndpoint);

};

export const addEventFetch = (title,dateFrom,dateTo,city,street,postal,number,discipline,
                              people,genders,minAge,maxAge,cost,author,description) => {

    const eventRequest = {
        title : title,
        dateFrom : dateFrom,
        dateTo : dateTo,
        city : city,
        street : street,
        postal : postal,
        number : number,
        discipline : discipline,
        people : people,
        genders : genders,
        minAge : minAge,
        maxAge : maxAge,
        cost : cost,
        author : author,
        description : description
    };

    const requestOptions = {

        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(eventRequest)

    };

    return fetch(serverAddress + addEventEndpoint,requestOptions);

};

export const uploadEventFilesFetch = (title,documents) => {

    const documentsRequest = new FormData();

    for(const file of documents)
        documentsRequest.append("file",file);

    documentsRequest.append("title",title);

    const requestOptions = {
        method: 'POST',
        body: documentsRequest
    };

    return fetch(serverAddress + uploadEventFilesEndpoint,requestOptions);
};

export const uploadEventImagesFetch = (title,images) => {

    const imagesRequest = new FormData();

    for(const file of images)
        imagesRequest.append("images",file);

    imagesRequest.append("title",title);

    const requestOption = {
        method: 'POST',
        body: imagesRequest
    };

    return fetch(serverAddress + uploadEventImagesEndpoint,requestOption);

};

export const addPlaceFetch = (
    name,discipline,placeLocalization,openingDays,cost,usageTime,
    minAge,maxAge,ratings,review,images,documents) => {

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

export const findAllNewsFetch = () => {

    return  fetch(serverAddress + findAllNewsEndpoint)

};

export const findAllPlaceFetch = () => {

    return  fetch(serverAddress + findAllPlacesEndpoint)

};

export const addUserFetch = (email,password,username,birthday,country) => {

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
    return fetch(serverAddress + existUserByEmailEndpoint + email)
};

export const existUserByUsernameFetch = (username) => {
   return  fetch(serverAddress + existUserByUsernameEndpoint + username)
};

export const signInUserFetch = (username,password) => {

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

    const requestOptions = {
        method: "POST",
        body: updateForm
    };

    return fetch(serverAddress + updateUserProfileEndpoint,requestOptions);

};

export const findNewsByIdFetch = (id) => {
    return fetch(serverAddress + findNewsByIdEndpoint + id);
};

export const findPlaceByIdFetch = (id) => {
    return fetch(serverAddress + findPlaceByIdEndpoint + id);
};

export const findAllRatingCategoriesFetch = () => {
    return fetch(serverAddress + findAllRatingCategoriesEndpoint);
};
