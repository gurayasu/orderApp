import React, { Fragment, useEffect, useReducer, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { fetchLineMenus } from "../apis/line_menus";
import {
    initialState,
    lineMenusActionTyps,
    lineMenusReducer,
} from "../reducers/lineMenus";
import { postOrder } from "../apis/orders";
// components
import { OrderDetailItem } from "../components/OrderDetailItem";
import { OrderButton } from "../components/Buttons/OrderButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import { OrderFinishDialog } from "../components/OrderFinishDialog";

import styled from "styled-components";

// constants
import { REQUEST_STATE } from "../constants";

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
    const order_id = location.state.id;
    const tableNumber = location.state.tableNumber;
    // const tableNumber = Math.floor(Math.random() * 20);

    const [state, dispatch] = useReducer(lineMenusReducer, initialState);
    const [price, setPrice] = useState("");
    const [alcohol, setAlcohol] = useState("");

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                console.log("res", data);
                setPrice(data.menu_price);
                setAlcohol(data.alcohol);
            })
            .catch((e) => console.error(e));
    }, []);

    const postLineMenus = () => {
        dispatch({ type: lineMenusActionTyps.POSTING });
        postOrder({
            menu_id: state.lineMenusSummary.id,
            menu_count: menu_count,
            tableNumber: tableNumber,
        }).then((res) => {
            dispatch({ type: lineMenusActionTyps.POST_SUCCESS });
            console.log("res", res);
            handleClickOpen();
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
                                        price={price}
                                        alcohol={alcohol}
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
                                        disabled={
                                            state.postState ===
                                                REQUEST_STATE.LOADING ||
                                            state.postState === REQUEST_STATE.OK
                                        }
                                        onClick={() => postLineMenus()}
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
                        {open && (
                            <OrderFinishDialog
                                open={open}
                                onClose={handleClose}
                                order_id={order_id}
                            />
                        )}
                    </div>
                </div>
            </OrderListWrapper>
        </Fragment>
    );
};
