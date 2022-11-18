import React, { Fragment, useEffect, useReducer, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

import { fetchLineMenus } from "../apis/line_menus";
import { serveOrder } from "../apis/orders";

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

export const AdminTable = ({ match }) => {
    const history = useHistory();

    const [orderIndex, setOrderIndex] = useState([]);

    useEffect(() => {
        axios.get("api/admin/orderindex").then((res) => {
            setOrderIndex(res.data);
            console.log(res.data);
        });
    }, []);

    const serveOrderFunction = (order_id) => {
        console.log("order_id", order_id);
        serveOrder(order_id)
            .then((data) => {
                console.log(data);
                alert(`${data.table_num}番の注文を配達`);
                location.reload();
            })
            .catch((e) => {
                throw e;
            });
    };

    return (
        <Fragment>
            <TableContainer component={Paper}>
                <Table
                    className="orderHistoryTable"
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>商品名</TableCell>
                            <TableCell align="right">注文番号</TableCell>
                            <TableCell align="right">数量</TableCell>
                            <TableCell align="right">配達フラグ</TableCell>
                            <TableCell align="right">配達</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orderIndex &&
                            orderIndex.map((order) => (
                                <TableRow key={order.created_at}>
                                    <TableCell component="th" scope="row">
                                        {order.menu_name}
                                    </TableCell>
                                    <TableCell align="right">
                                        {order.table_num}
                                    </TableCell>
                                    <TableCell align="right">
                                        {order.menu_num}
                                    </TableCell>
                                    <TableCell align="right">
                                        {order.served_flag}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button
                                            variant="contained"
                                            onClick={() => {
                                                serveOrderFunction(
                                                    order.order_id
                                                );
                                            }}
                                        >
                                            配達
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <Grid container alignItems="center" justifyContent="flex-end">
                <Grid item xs={6}>
                    <Button variant="contained">会計を確定する</Button>
                </Grid>
            </Grid> */}
        </Fragment>
    );
};
