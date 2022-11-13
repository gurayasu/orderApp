import React, { useState, useEffect } from "react";
import { UseMutationResult, useMutation } from "react-query";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(10),
        },
    },
    extendedIcon: {
        margin: theme.spacing(1),
    },
}));

export default function GlobalNav() {
    const [userRole, setUserRole] = useState("");

    const fetchUser = () => {
        axios.get(`/api/fetchuser`).then((res) => {
            setUserRole(res.data[0].role);
            return res;
        });
    };
    const history = useHistory();
    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then((res) => {
            if (res.data.status === 200) {
                localStorage.removeItem("auth_token", res.data.token);
                localStorage.removeItem("auth_name", res.data.username);
                swal("ログアウトしました", res.data.message, "success");
                history.push("/");
                location.reload();
            }
        });
    };

    const classes = useStyles();

    const [userInfo, setUserInfo] = useState("");
    useEffect(() => {
        axios.get(`/api/loginuser`).then((res) => {
            console.log(res.data);
            setUserInfo(res.data);
        });
    }, []);

    console.log(localStorage);

    // if (!localStorage.getItem("auth_token")) {
    if (!userInfo) {
        return (
            <>
                {/* <div className={classes.root}> */}
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    spacing={6}
                >
                    <Grid item xs={6}>
                        <Link to="/register">
                            <Fab variant="extended">
                                <NavigationIcon
                                    className={classes.extendedIcon}
                                />
                                新規登録
                            </Fab>
                        </Link>
                    </Grid>
                    {/* </div> */}
                    {/* <div className={classes.root}> */}
                    <Grid item xs={6}>
                        <Link to="/login">
                            <Fab variant="extended">
                                <NavigationIcon
                                    className={classes.extendedIcon}
                                />
                                ログイン
                            </Fab>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Fab variant="extended">
                            <NavigationIcon className={classes.extendedIcon} />
                            <a href="/login/line/redirect" underline="none">
                                LINEログイン
                            </a>
                        </Fab>
                    </Grid>
                    <Grid item xs={6}>
                        <Fab variant="extended">
                            <NavigationIcon className={classes.extendedIcon} />
                            <a href="/login/google" underline="none">
                                Googleログイン
                            </a>
                        </Fab>
                    </Grid>
                </Grid>

                {/* </div> */}
            </>
        );
    } else {
        if (userRole == 1) {
            return (
                <>
                    {/* <div className={classes.root}>
                     */}
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        direction="column"
                        spacing={6}
                    >
                        <Grid item xs={6}>
                            <Link to="/admin">
                                <Fab variant="extended">
                                    <NavigationIcon
                                        className={classes.extendedIcon}
                                    />
                                    管理画面
                                </Fab>
                            </Link>
                            {/* </div> */}
                        </Grid>
                        <Grid item xs={6}>
                            <div onClick={logoutSubmit}>
                                <Fab variant="extended">
                                    <NavigationIcon
                                        className={classes.extendedIcon}
                                    />
                                    ログアウト
                                </Fab>
                            </div>
                        </Grid>
                    </Grid>
                </>
            );
        } else {
            return (
                <>
                    {/* <div className={classes.root}> */}
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        direction="column"
                        spacing={6}
                    >
                        <Grid item xs={6}>
                            <Link to="/menus">
                                <Fab variant="extended">
                                    <NavigationIcon
                                        className={classes.extendedIcon}
                                    />
                                    メニュー注文
                                </Fab>
                            </Link>
                            {/* </div> */}
                        </Grid>
                        <Grid item xs={6}>
                            {/* <div className={classes.root}> */}
                            <Link to="/order_history">
                                <Fab variant="extended">
                                    <NavigationIcon
                                        className={classes.extendedIcon}
                                    />
                                    チップ
                                </Fab>
                            </Link>
                            {/* </div> */}
                        </Grid>
                        <Grid item xs={6}>
                            <div onClick={logoutSubmit}>
                                <Fab variant="extended">
                                    <NavigationIcon
                                        className={classes.extendedIcon}
                                    />
                                    ログアウト
                                </Fab>
                            </div>
                        </Grid>
                    </Grid>
                </>
            );
        }
    }
}
