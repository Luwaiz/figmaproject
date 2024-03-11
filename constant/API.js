import prod from "./Environment";

const url =prod? "https://goshop-0img.onrender.com/api/v1": "";

export default{
    //user
    "register": `${url}/auth/register`,
    "log_in": `${url}/auth/login`,
    "profile": `${url}/auth/me`,
    "change_password": `${url}/auth/change-password`,

    //products
    "createProduct":`${url}/products`,
    "product":`${url}/products`,
    "UpdateProducts":`${url}/products`,

    //orders
    "placeOrder":`${url}/orders`,
    "getOrder":`${url}/orders`,
    "orderDetails": `${url}/orders`
}
