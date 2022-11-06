import { REQUEST_STATE } from "../constants";

export const initialState = {
    fetchState: REQUEST_STATE.INITIAL, // 取得状況
    postState: REQUEST_STATE.INITIAL, // 登録状況
    lineMenusSummary: null, // 仮注文データ
};

export const lineMenusActionTyps = {
    FETCHING: "FETCHING",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    POSTING: "POSTING",
    POST_SUCCESS: "POST_SUCCESS",
};

export const lineMenusReducer = (state, action) => {
    switch (action.type) {
        case lineMenusActionTyps.FETCHING:
            return {
                ...state,
                fetchState: REQUEST_STATE.LOADING,
            };
        case lineMenusActionTyps.FETCH_SUCCESS:
            return {
                fetchState: REQUEST_STATE.OK,
                lineMenusSummary: action.payload.lineMenusSummary,
            };
        case lineMenusActionTyps.POSTING:
            return {
                ...state,
                postState: REQUEST_STATE.LOADING,
            };
        case lineMenusActionTyps.POST_SUCCESS:
            return {
                ...state,
                postState: REQUEST_STATE.OK,
            };
        default:
            throw new Error();
    }
};
