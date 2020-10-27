export const serverAddress = "http://192.168.8.161:8080";
export const addSubjectEndpoint = "/subject/add";
export const existSubjectByNameEndpoint = "/subject/exist/"; // Path variable {name}
export const addContactEndpoint = "/contact/add";
export const findAllSubjectEndpoint = "/subject/find/all";

export default serverAddress;


export const existUserByUsernameEndpoint = "/user/exist/username/"; // Path variable {username}
export const existUserByEmailEndpoint = "/user/exist/email/"; // Path variable {email}
export const addUserEndpoint = "/user/add";
export const findUserByUsernameEndpoint = "/user/find/"; // Path variable {username}

export const findAllCountryEndpoint = "/country/find/all";

export const authenticateNoToken = "/authenticate/check";

export const updateUserProfileEndpoint = "/user/update/profile";

export const findUsernameFromTokenEndpoint = "/token/find/username";