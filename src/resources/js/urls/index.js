const DEFAULT_API_LOCALHOST = "http://localhost:80/api";

//[Menu]
export const menusIndex = `${DEFAULT_API_LOCALHOST}/menu/index`;
export const selectMenu = (menu_id) =>
    `${DEFAULT_API_LOCALHOST}/menu/${menu_id}`;

//[Order]
export const createOrder = (menu_id) =>
    `${DEFAULT_API_LOCALHOST}/order/${menu_id}`;
export const userOrder = `${DEFAULT_API_LOCALHOST}/order/user_order`;

//[Account]
export const payAccount = `${DEFAULT_API_LOCALHOST}/account/pay`;
