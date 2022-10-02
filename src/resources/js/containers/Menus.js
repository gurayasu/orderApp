import React, { Fragment, useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { COLORS } from "../style_constants";
import { LocalMallIcon } from "../components/Icons";
import { MenuWrapper } from "../components/MenuWrapper";
import Skeleton from "@material-ui/lab/Skeleton";
import MainLogo from "../images/logo.png";
import FoodImage from "../images/food-image.jpg";
import { MenuOrderDialog } from "../components/MenuOrderDialog";

import { fetchMenus } from "../apis/menus";
import {
    initialState as menusInitialState,
    menusActionTypes,
    menusReducer,
} from "../reducers/menus.js";
import { REQUEST_STATE } from "../constants";

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

export const Menus = () => {
    const [menusState, dispatch] = useReducer(menusReducer, menusInitialState);

    const initialState = {
        isOpenOrderDialog: false,
        selectedMenu: null,
        selectedMenuCount: 1,
    };
    const [state, setState] = useState(initialState);

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

    return (
        <Fragment>
            <HeaderWrapper>
                <Link to="/">
                    <MainLogoImage src={MainLogo} alt="main logo" />
                </Link>
                <BagIconWrapper>
                    <Link to="/orders">
                        <ColoredBagIcon fontSize="large" />
                    </Link>
                </BagIconWrapper>
            </HeaderWrapper>
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
                    menusState.menusList.map((menu) => (
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
                                imageUrl={FoodImage}
                            />
                        </ItemWrapper>
                    ))
                )}
            </MenusList>
            {state.isOpenOrderDialog && (
                <MenuOrderDialog
                    menu={state.selectedMenu}
                    isOpen={state.isOpenOrderDialog}
                    onClose={() =>
                        setState({
                            ...state,
                            isOpenOrderDialog: false,
                        })
                    }
                />
            )}
        </Fragment>
    );
};
