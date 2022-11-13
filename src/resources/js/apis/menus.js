import axios from "axios";
import { menusIndex } from "../urls/index";

export const fetchMenus = () => {
    return axios
        .get(menusIndex)
        .then((res) => {
            return res.data;
        })
        .catch((e) => console.error(e));
};

export const fetchAlcoholMenus = () => {
    return axios
        .get("/api/menu/alcohol")
        .then((res) => {
            return res.data;
        })
        .catch((e) => console.error(e));
};

export const fetchNonAlcoholMenus = () => {
    return axios
        .get("/api/menu/nonalcohol")
        .then((res) => {
            return res.data;
        })
        .catch((e) => console.error(e));
};

export const fetchFoodMenus = () => {
    return axios
        .get("/api/menu/food")
        .then((res) => {
            return res.data;
        })
        .catch((e) => console.error(e));
};
