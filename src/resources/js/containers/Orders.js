import React, { Fragment, useEffect, useReducer } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { fetchLineMenus } from "../apis/line_menus";
import {
    initialState,
    lineMenusActionTyps,
    lineMenusReducer,
} from "../reducers/lineMenus";
import { postOrder } from "../apis/orders";
import styled from "styled-components";
import { Link } from "react-router-dom";

// components
import { OrderDetailItem } from "../components/OrderDetailItem";
import { OrderButton } from "../components/Buttons/OrderButton";
import CircularProgress from "@material-ui/core/CircularProgress";

// images
import MainLogo from "../images/logo.png";

// constants
import { REQUEST_STATE } from "../constants";

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 8px 32px;
`;

const MainLogoImage = styled.img`
    height: 90px;
`;

const OrderListWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const OrderItemWrapper = styled.div`
    margin-bottom: 50px;
`;

export const Orders = () => {
    const location = useLocation();
    const history = useHistory();
    const menu_id = location.state.menu_id;
    const menu_count = location.state.menu_count;
    const tableNumber = location.state.tableNumber;
    const [state, dispatch] = useReducer(lineMenusReducer, initialState);
    useEffect(() => {
        dispatch({ type: lineMenusActionTyps.FETCHING });
        fetchLineMenus({
            menuId: menu_id,
        })
            .then((data) => {
                dispatch({
                    type: lineMenusActionTyps.FETCH_SUCCESS,
                    payload: {
                        lineMenusSummary: data,
                    },
                });
            })
            .catch((e) => console.error(e));
    }, []);

    const postLineMenus = () => {
        dispatch({ type: lineMenusActionTyps.POSTING });
        postOrder({
            menu_id: state.lineMenusSummary.id,
            menu_count: menu_count,
            tableNumber: tableNumber,
        }).then(() => {
            dispatch({ type: lineMenusActionTyps.POST_SUCCESS });
            // window.location.reload();
        });
    };

    const orderButtonLabel = () => {
        switch (state.postState) {
            case REQUEST_STATE.LOADING:
                return "注文中...";
            case REQUEST_STATE.OK:
                return "注文完了しました！";
            default:
                return "注文を確定する";
        }
    };

    return (
        <Fragment>
            {/* <HeaderWrapper>
                <Link to="/">
                    <MainLogoImage src={MainLogo} alt="main logo" />
                </Link>
            </HeaderWrapper> */}
            <OrderListWrapper>
                <div>
                    <OrderItemWrapper>
                        {
                            // APIローディング中はくるくる回るローディングコンポーネントを表示
                            state.fetchState === REQUEST_STATE.LOADING ? (
                                <CircularProgress />
                            ) : (
                                state.lineMenusSummary && (
                                    <OrderDetailItem
                                        menu_name={
                                            state.lineMenusSummary.menu_name
                                        }
                                        menu_price={
                                            state.lineMenusSummary.menu_price
                                        }
                                        menu_count={menu_count}
                                        tableNumber={tableNumber}
                                    />
                                )
                            )
                        }
                    </OrderItemWrapper>
                    <div>
                        {state.fetchState === REQUEST_STATE.OK &&
                            state.lineMenusSummary && (
                                <>
                                    <OrderButton
                                        onClick={() => postLineMenus()}
                                        disabled={
                                            state.postState ===
                                                REQUEST_STATE.LOADING ||
                                            state.postState === REQUEST_STATE.OK
                                        }
                                    >
                                        {orderButtonLabel()}
                                    </OrderButton>
                                    <br />
                                    <OrderButton
                                        onClick={() => history.push("/menus")}
                                        disabled={
                                            state.postState ===
                                            REQUEST_STATE.LOADING
                                        }
                                    >
                                        メニュー一覧
                                    </OrderButton>
                                </>
                            )}

                        {state.fetchState === REQUEST_STATE.OK &&
                            !state.lineMenusSummary && (
                                <p>注文予定の商品はありません。</p>
                            )}
                    </div>
                </div>
            </OrderListWrapper>
        </Fragment>
    );
};
