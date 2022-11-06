import axios from "axios";
import {
    selectMenu,
    menusIndex,
    // lineMenusReplace
} from "../urls/index";

export const fetchLineMenus = (params) => {
    // console.log(params);
    const menu_id = params.menuId;
    return axios
        .get(`http://localhost:80/api/menu/${menu_id}`)
        .then((res) => {
            return res.data;
        })
        .catch((e) => {
            console.error(e);
            throw e;
        });
};
