import React, {
    Fragment,
    useEffect,
    useReducer,
    useState,
    useCallback,
} from "react";
import { useHistory, Link } from "react-router-dom";

import styled from "styled-components";
import { COLORS } from "../style_constants";
import { LocalMallIcon } from "../components/Icons";
import { MenuWrapper } from "../components/MenuWrapper";
import Skeleton from "@material-ui/lab/Skeleton";
import MainLogo from "../images/logo.png";
import FoodImage from "../images/food-image.jpg";
import { MenuOrderDialog } from "../components/MenuOrderDialog";

import {
    fetchMenus,
    fetchAlcoholMenus,
    fetchNonAlcoholMenus,
    fetchFoodMenus,
} from "../apis/menus";
import {
    initialState as menusInitialState,
    menusActionTypes,
    menusReducer,
    alcoholMenusReducer,
    alcoholInitialState,
} from "../reducers/menus.js";
import { REQUEST_STATE } from "../constants";

import { NewOrderConfirmDialog } from "../components/NewOrderConfirmDialog";
import {
    // postLineMenus,
    // replaceLineMenus,
    fetchLineMenus,
} from "../apis/line_menus";
import { HTTP_STATUS_CODE } from "../constants";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

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
    margin: 20px;
`;

export const Menus = ({ match }) => {
    const history = useHistory();
    const [menusState, dispatch] = useReducer(menusReducer, menusInitialState);

    // const [tableNumber, setTableNumber] = React.useState(1);
    // const onChangeSearch = useCallback((e) => {
    //     if (e.target.value !== undefined && e.target.value !== null) {
    //         setTableNumber(e.target.value);
    //     }
    // }, []);
    const tableNumber = Math.floor(Math.random() * 20);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const initialState = {
        isOpenOrderDialog: false,
        selectedMenu: null,
        selectedMenuCount: 1,
        isOpenNewOrderDialog: false,
        existingResutaurautName: "",
        newResutaurautName: "",
    };
    const [state, setState] = useState(initialState);
    const [alcoholMenus, setAlcoholMenus] = useState("");
    const [nonAlcoholMenus, setNonAlcoholMenus] = useState("");
    const [foodMenus, setFoodMenus] = useState("");

    useEffect(() => {
        dispatch({ type: menusActionTypes.FETCHING });
        fetchMenus().then((data) =>
            dispatch({
                type: menusActionTypes.FETCH_SUCCESS,
                payload: {
                    menus: data,
                },
            })
        );
    }, []);

    useEffect(() => {
        fetchAlcoholMenus().then((data) => {
            setAlcoholMenus(data);
        });

        fetchNonAlcoholMenus().then((data) => {
            setNonAlcoholMenus(data);
        });

        fetchFoodMenus().then((data) => {
            setFoodMenus(data);
        });
    }, []);

    // console.log("alcoholMenus", alcoholMenus);
    // console.log("nonAlcoholMenus", nonAlcoholMenus);

    const submitOrder = () => {
        fetchLineMenus({
            menuId: state.selectedMenu.id,
            count: state.selectedMenuCount,
            tableNumber: tableNumber,
        })
            .then((data) => {
                // console.log(data);
                history.push("/orders", {
                    menu_id: state.selectedMenu.id,
                    menu_count: state.selectedMenuCount,
                    tableNumber: tableNumber,
                });
            })
            .catch((e) => {
                throw e;
            });
    };

    return (
        <div className={classes.root}>
            {/* <HeaderWrapper>
                <Link to="/">
                    <MainLogoImage src={MainLogo} alt="main logo" />
                </Link>
                <BagIconWrapper>
                    <Link to="/orders">
                        <ColoredBagIcon fontSize="large" />
                    </Link>
                </BagIconWrapper>
            </HeaderWrapper> */}
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                >
                    <Tab label="アルコール" {...a11yProps(0)} />
                    <Tab label="ノンアルコール" {...a11yProps(1)} />
                    <Tab label="フード" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <MenusList>
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
                        alcoholMenus &&
                        alcoholMenus.map((menu) => (
                            <ItemWrapper key={menu.id}>
                                <MenuWrapper
                                    menu={menu}
                                    onClickMenuWrapper={(menu) =>
                                        setState({
                                            ...state,
                                            isOpenOrderDialog: true,
                                            selectedMenu: menu,
                                        })
                                    }
                                    imageUrl={`https://drive.google.com/uc?id=${menu.pictureId}`}
                                />
                            </ItemWrapper>
                        ))
                    )}
                </MenusList>
                {state.isOpenOrderDialog && (
                    <MenuOrderDialog
                        isOpen={state.isOpenOrderDialog}
                        menu={state.selectedMenu}
                        countNumber={state.selectedMenuCount}
                        orderTableNumber={state.orderTableNumber}
                        onClickCountUp={() =>
                            setState({
                                ...state,
                                selectedMenuCount: state.selectedMenuCount + 1,
                            })
                        }
                        onClickCountDown={() =>
                            setState({
                                ...state,
                                selectedMenuCount: state.selectedMenuCount - 1,
                            })
                        }
                        //作った関数を渡す
                        onClickOrder={() => submitOrder()}
                        //モーダルを閉じる時は全てのstate初期化
                        onClose={() =>
                            setState({
                                ...state,
                                isOpenOrderDialog: false,
                                selectedMenu: null,
                                selectedMenuCount: 1,
                            })
                        }
                        // onChangeSearch={onChangeSearch}
                    />
                )}
                {state.isOpenNewOrderDialog && (
                    <NewOrderConfirmDialog
                        isOpen={state.isOpenNewOrderDialog}
                        onClose={() =>
                            setState({
                                ...state,
                                isOpenNewOrderDialog: false,
                            })
                        }
                    />
                )}
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MenusList>
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
                        nonAlcoholMenus &&
                        nonAlcoholMenus.map((menu) => (
                            <ItemWrapper key={menu.id}>
                                {menu.alcohol === 0 && (
                                    <MenuWrapper
                                        menu={menu}
                                        onClickMenuWrapper={(menu) =>
                                            setState({
                                                ...state,
                                                isOpenOrderDialog: true,
                                                selectedMenu: menu,
                                            })
                                        }
                                        imageUrl={`https://drive.google.com/uc?id=${menu.pictureId}`}
                                    />
                                )}
                            </ItemWrapper>
                        ))
                    )}
                </MenusList>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <MenusList>
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
                        foodMenus &&
                        foodMenus.map((menu) => (
                            <ItemWrapper key={menu.id}>
                                {menu.alcohol === 0 && (
                                    <MenuWrapper
                                        menu={menu}
                                        onClickMenuWrapper={(menu) =>
                                            setState({
                                                ...state,
                                                isOpenOrderDialog: true,
                                                selectedMenu: menu,
                                            })
                                        }
                                        imageUrl={`https://drive.google.com/uc?id=${menu.pictureId}`}
                                    />
                                )}
                            </ItemWrapper>
                        ))
                    )}
                </MenusList>
            </TabPanel>
            {state.isOpenOrderDialog && (
                <MenuOrderDialog
                    isOpen={state.isOpenOrderDialog}
                    menu={state.selectedMenu}
                    countNumber={state.selectedMenuCount}
                    orderTableNumber={state.orderTableNumber}
                    onClickCountUp={() =>
                        setState({
                            ...state,
                            selectedMenuCount: state.selectedMenuCount + 1,
                        })
                    }
                    onClickCountDown={() =>
                        setState({
                            ...state,
                            selectedMenuCount: state.selectedMenuCount - 1,
                        })
                    }
                    //作った関数を渡す
                    onClickOrder={() => submitOrder()}
                    //モーダルを閉じる時は全てのstate初期化
                    onClose={() =>
                        setState({
                            ...state,
                            isOpenOrderDialog: false,
                            selectedMenu: null,
                            selectedMenuCount: 1,
                        })
                    }
                    // onChangeSearch={onChangeSearch}
                />
            )}
            {state.isOpenNewOrderDialog && (
                <NewOrderConfirmDialog
                    isOpen={state.isOpenNewOrderDialog}
                    onClose={() =>
                        setState({ ...state, isOpenNewOrderDialog: false })
                    }
                />
            )}
        </div>
    );
};
