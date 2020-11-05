import serverAddress, {
    addContactEndpoint,
    addDisciplineEndpoint, addNewsEndpoint, addSubjectEndpoint, deleteUserEndpoint,
    existDisciplineByNameEndpoint, existSubjectByNameEndpoint, findAllSubjectEndpoint, findAllUsersEndpoint,
    newsImagesUploadEndpoint
} from "../config/Constants";

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

export const addNewsFetch = (title,shortText,linkText,fullText) => {

    const NewsData = {
        title : title,
        shortText : shortText,
        linkText : linkText,
        text : fullText
    };

    const requestOptions = {

        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(NewsData)

    };

   return fetch(serverAddress + addNewsEndpoint,requestOptions);

};

export const uploadNewsImagesFetch = (title,images) => {

    const  ImageData  = new FormData();

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