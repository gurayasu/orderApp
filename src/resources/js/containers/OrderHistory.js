import React, { Fragment, useEffect, useReducer, useState } from "react";
import { useHistory, Link } from "react-router-dom";

import styled from "styled-components";
import { COLORS } from "../style_constants";
import { LocalMallIcon } from "../components/Icons";
import Skeleton from "@material-ui/lab/Skeleton";

import { fetchMenus } from "../apis/menus";
import { fetchOrderHistory } from "../apis/orders";
import {
    initialState as menusInitialState,
    menusActionTypes,
    menusReducer,
} from "../reducers/menus.js";
import {
    orderHistoryInitialState,
    orderHistoryActionTypes,
    orderHistoryReducer,
} from "../reducers/orderHistory.js";
import { REQUEST_STATE } from "../constants";

import { fetchLineMenus } from "../apis/line_menus";
import { FONT_SIZE } from "../style_constants";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 32px;
`;

const BagIconWrapper = styled.div`
    padding-top: 24px;
`;

const ColoredBagIcon = styled(LocalMallIcon)`
    color: ${COLORS.MAIN};
`;

const MainLogoImage = styled.img`
    height: 90px;
`;

const MenusList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 50px;
`;

const ItemWrapper = styled.div`
    margin: 16px;
`;

const LineWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const AmountText = styled.p`
    font-size: ${FONT_SIZE.STAND_BODY};
    font-weight: bold;
`;

export const OrderHistory = ({ match }) => {
    const history = useHistory();
    const [menusState, menusDispatch] = useReducer(
        menusReducer,
        menusInitialState
    );
    const [orderHistoryState, orderHistoryDispatch] = useReducer(
        orderHistoryReducer,
        orderHistoryInitialState
    );

    const initialState = {
        isOpenOrderDialog: false,
        selectedMenu: null,
        selectedMenuCount: 1,
        isOpenNewOrderDialog: false,
        existingResutaurautName: "",
        newResutaurautName: "",
    };
    const [state, setState] = useState(initialState);

    useEffect(() => {
        menusDispatch({ type: menusActionTypes.FETCHING });
        fetchMenus().then((data) =>
            menusDispatch({
                type: menusActionTypes.FETCH_SUCCESS,
                payload: {
                    menus: data,
                },
            })
        );
    }, []);

    useEffect(() => {
        orderHistoryDispatch({ type: orderHistoryActionTypes.FETCHING });
        fetchOrderHistory().then((data) => {
            orderHistoryDispatch({
                type: orderHistoryActionTypes.FETCH_SUCCESS,
                payload: {
                    orderHistory: data,
                },
            });
        });
    }, []);

    console.log("orderHistoryState", orderHistoryState.orderHistoryList.orders);

    const submitOrder = () => {
        fetchLineMenus({
            menuId: state.selectedMenu.id,
            count: state.selectedMenuCount,
        })
            .then((data) => {
                // console.log(data);
                history.push("/orders", {
                    menu_id: state.selectedMenu.id,
                    menu_count: state.selectedMenuCount,
                });
            })
            .catch((e) => {
                throw e;
            });
    };

    return (
        <Fragment>
            {menusState.fetchState === REQUEST_STATE.LOADING ? (
                <Fragment>
                    {[...Array(12).keys()].map((i) => (
                        <ItemWrapper key={i}>
                            <Skeleton
                                key={i}
                                variant="rect"
                                width={450}
                                height={180}
                            />
                        </ItemWrapper>
                    ))}
                </Fragment>
            ) : (
                <>
                    <TableContainer component={Paper}>
                        <Table
                            className="orderHistoryTable"
                            size="small"
                            aria-label="a dense table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>商品名</TableCell>
                                    <TableCell align="right">値段</TableCell>
                                    <TableCell align="right">数量</TableCell>
                                    <TableCell align="right">金額</TableCell>
                                </TableRow>
                            </TableHead>
                            {orderHistoryState.orderHistoryList.orders !==
                                undefined && (
                                <>
                                    <TableBody>
                                        {orderHistoryState.orderHistoryList.orders.map(
                                            (order) => (
                                                <TableRow
                                                    key={order.created_at}
                                                >
                                                    <TableCell
                                                        component="th"
                                                        scope="row"
                                                    >
                                                        {order.menu_name}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        ¥{order.menu_price}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {order.menu_num}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        ¥
                                                        {order.menu_price *
                                                            order.menu_num}
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        )}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TableCell>合計金額</TableCell>
                                            <TableCell>{""}</TableCell>
                                            <TableCell>{""}</TableCell>
                                            <TableCell align="right">
                                                ¥
                                                {
                                                    orderHistoryState
                                                        .orderHistoryList
                                                        .total_price
                                                }
                                            </TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </>
                            )}
                        </Table>
                    </TableContainer>
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="flex-end"
                    >
                        <Grid item xs={6}>
                            <Button variant="contained">会計を確定する</Button>
                        </Grid>
                    </Grid>
                </>
            )}
        </Fragment>
    );
};
