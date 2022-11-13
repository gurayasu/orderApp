import axios from "axios";
import { createOrder } from "../urls/index";

export const postOrder = (params) => {
    const menu_id = params.menu_id;
    const menu_num = params.menu_count;
    const table_num = params.tableNumber;
    console.log(menu_id);
    console.log(menu_num);

    return axios
        .post(`/api/order/${menu_id}`, {
            menu_num: menu_num,
            table_num: table_num,
        })
        .then((res) => {
            console.log("res", res);
            return res.data;
        })
        .catch((e) => console.error(e));
};

export const fetchOrderHistory = () => {
    return axios
        .get("/api/order/user_order")
        .then((res) => {
            console.log("res", res);
            return res.data;
        })
        .catch((e) => console.error(e));
};

export const fetchOrderIndex = () => {
    return axios
        .get("/api/admin/orderindex")
        .then((res) => {
            console.log("res", res);
            return res.data;
        })
        .catch((e) => console.error(e));
};

export const serveOrder = (order_id) => {
    console.log(order_id);

    return axios
        .post(`/api/admin/serve/${order_id}`)
        .then((res) => {
            console.log("res", res);
            return res.data;
        })
        .catch((e) => console.error(e));
};
