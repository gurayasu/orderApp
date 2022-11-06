import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// components
import { LocalMallIcon, QueryBuilderIcon } from "./Icons";

// constants
import { FONT_SIZE } from "../style_constants";

const LineWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const AmountText = styled.p`
    font-size: ${FONT_SIZE.STAND_BODY};
    font-weight: bold;
`;

export const OrderDetailItem = ({
    menu_name,
    menu_price,
    menu_count,
    tableNumber,
}) => (
    <Fragment>
        <LineWrapper>
            <p>テーブル番号</p>
            <p>{tableNumber}</p>
        </LineWrapper>
        <LineWrapper>
            <p>商品名</p>
            <p>{menu_name}</p>
        </LineWrapper>
        <LineWrapper>
            <p>数量</p>
            <p> {menu_count}</p>
        </LineWrapper>
    </Fragment>
);
