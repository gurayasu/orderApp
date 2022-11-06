import { REQUEST_STATE } from "../constants";

export const orderHistoryInitialState = {
    fetchState: REQUEST_STATE.INITIAL,
    orderHistoryList: [],
};

export const orderHistoryActionTypes = {
    FETCHING: "FETCHING",
    FETCH_SUCCESS: "FETCH_SUCCESS",
};

export const orderHistoryReducer = (state, action) => {
    switch (action.type) {
        case orderHistoryActionTypes.FETCHING:
            return {
                ...state,
                fetchState: REQUEST_STATE.LOADING,
            };
        case orderHistoryActionTypes.FETCH_SUCCESS:
            return {
                fetchState: REQUEST_STATE.OK,
                orderHistoryList: action.payload.orderHistory,
            };
        default:
            throw new Error();
    }
};
