import prod from "./Environment";

const url =prod? "https://goshop-0img.onrender.com/api/v1": "";

export default{
    "register": `${url}/auth/register`,
    "log_in": `${url}/auth/login`,
    "profile": `${url}/auth/me`,
    "change_password": `${url}/auth/change-password`,
}
