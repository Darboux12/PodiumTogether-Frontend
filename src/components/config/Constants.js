export const serverAddress = "http://192.168.8.161:8080";
export const addSubjectEndpoint = "/subject/add";
export const existSubjectByNameEndpoint = "/subject/exist/"; // Path variable {name}
export const addContactEndpoint = "/contact/add";
export const findAllSubjectEndpoint = "/subject/find/all";

export default serverAddress;

export const authenticateEndpoint = "/authenticate";


export const existUserByUsernameEndpoint = "/user/exist/username/"; // Path variable {username}
export const existUserByEmailEndpoint = "/user/exist/email/"; // Path variable {email}
export const addUserEndpoint = "/user/add";
export const findUserByUsernameEndpoint = "/user/find/username/"; // Path variable {username}

export const findAllCountryEndpoint = "/country/find/all";

export const authenticateNoToken = "/authenticate/check";

export const updateUserProfileEndpoint = "/user/update/profile";

export const findUsernameFromTokenEndpoint = "/token/find/username";

export const findExpirationDateFromTokenEndpoint = "/token/find/expiration";

export const newsImagesUploadEndpoint = "/image/upload/news";

export const profileImageUploadEndpoint = "/image/upload/profile";

export const deleteUserEndpoint = "/user/delete/"; // Path variable {username}

export const findAllGenderEndpoint = "/gender/find/all";

export const findAllDisciplineEndpoint = "/discipline/find/all";

export const uploadEventImagesEndpoint =  "/image/upload/event";

export const uploadEventFilesEndpoint = "/file/upload/event";

export const existDisciplineByNameEndpoint = "/discipline/exist/";

export const addDisciplineEndpoint = "/discipline/add";

export const addNewsEndpoint = "/news/add";

export const findAllUsersEndpoint = "/user/find/all";

export const addEventEndpoint = "/event/add";

export const addPlaceEndpoint = "/place/add";

export const findAllNewsEndpoint = "/news/find/all";

export const findAllPlacesEndpoint = "/place/find/all";

export const findNewsByIdEndpoint = "/news/find/id/";

export const findPlaceByIdEndpoint = "/place/find/id/";
