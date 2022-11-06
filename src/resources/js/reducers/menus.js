import { REQUEST_STATE } from "../constants";

export const initialState = {
    fetchState: REQUEST_STATE.INITIAL,
    menusList: [],
};

export const alcoholInitialState = {
    fetchState: REQUEST_STATE.INITIAL,
    alcoholMenusList: [],
};

export const menusActionTypes = {
    FETCHING: "FETCHING",
    FETCH_SUCCESS: "FETCH_SUCCESS",
};

export const menusReducer = (state, action) => {
    switch (action.type) {
        case menusActionTypes.FETCHING:
            return {
                ...state,
                fetchState: REQUEST_STATE.LOADING,
            };
        case menusActionTypes.FETCH_SUCCESS:
            return {
                fetchState: REQUEST_STATE.OK,
                menusList: action.payload.menus,
            };
        default:
            throw new Error();
    }
};

export const alcoholMenusReducer = (state, action) => {
    switch (action.type) {
        case menusActionTypes.FETCHING:
            return {
                ...state,
                fetchState: REQUEST_STATE.LOADING,
            };
        case menusActionTypes.FETCH_SUCCESS:
            return {
                fetchState: REQUEST_STATE.OK,
                alcoholMenusList: action.payload.alcolMenus,
            };
        default:
            throw new Error();
    }
};
