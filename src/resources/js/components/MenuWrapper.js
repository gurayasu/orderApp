import React from "react";
import styled from "styled-components";

// components
import { SubText } from "./StyledText";

// constants
import { COLORS } from "../style_constants";

const Wrapper = styled.div`
    display: flex;
    width: 450px;
    height: 180px;
    border-width: 1px;
    border-style: solid;
    border-color: ${COLORS.BORDER};
    border-image: initial;
    cursor: pointer;
`;

const MenuDetail = styled.div`
    padding: 24px 16px;
    width: 150px;
    margin: 0 auto;
`;

const DescriptionWrapper = styled.div`
    height: 75px;
`;

const PriceWrapper = styled.div`
    margin-top: 16px;
`;

const MenuImageNode = styled.img`
    width: 250px;
`;

export const MenuWrapper = ({ menu, onClickMenuWrapper, imageUrl }) => (
    <Wrapper onClick={() => onClickMenuWrapper(menu)}>
        <MenuDetail>
            {menu.menu_name}
            <DescriptionWrapper>
                <SubText>{menu.description}</SubText>
            </DescriptionWrapper>
            {/* <PriceWrapper>¥{menu.menu_price}</PriceWrapper> */}
        </MenuDetail>
        <MenuImageNode src={imageUrl} />
    </Wrapper>
);
