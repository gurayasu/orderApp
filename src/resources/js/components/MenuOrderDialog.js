import React from "react";
import {
    DialogContent,
    Dialog,
    DialogTitle,
    DialogActions,
} from "@material-ui/core";
import styled from "styled-components";

// components
import { SubText } from "./StyledText";
import { CountUpButton } from "./Buttons/CountUpButton";
import { CountDownButton } from "./Buttons/CountDownButton";
import { OrderButton } from "./Buttons/OrderButton";

// images
import OrderHeaderImage from "../images/order-header.png";

const OrderHeader = styled.img`
    width: 100%;
    height: 350px;
`;

const DescriptionWrapper = styled.div`
    padding: 0 8px 8px 8px;
    height: 50px;
`;

const CountersWrapper = styled.div`
    margin-right: auto;
    display: flex;
    padding: 0 16px;
`;

const CountItem = styled.div`
    margin: 0 8px;
`;

const CountNum = styled.div`
    padding-top: 10px;
`;

const OrderTextWrapper = styled.div`
    display: flex;
`;

const OrderButtonTextWrapper = styled.div`
    width: 300px;
`;

const PriceWrapper = styled.div`
    padding-top: 4px;
`;

export const MenuOrderDialog = ({
    menu,
    countNumber,
    isOpen,
    onClose,
    onClickCountUp,
    onClickCountDown,
    onClickOrder,
}) => {
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <OrderHeader src={OrderHeaderImage} alt="order header" />
            <DialogTitle>{menu.menu_name}</DialogTitle>
            <DialogContent>
                <DescriptionWrapper>
                    <SubText>{menu.description}</SubText>
                </DescriptionWrapper>
            </DialogContent>
            <DialogActions>
                <CountersWrapper>
                    <CountItem>
                        <CountDownButton
                            onClick={() => onClickCountDown()}
                            // 数量が1以下だったら、カウントダウンさせない
                            isDisabled={countNumber <= 1}
                        />
                    </CountItem>
                    <CountItem>
                        <CountNum>{countNumber}</CountNum>
                    </CountItem>
                    <CountItem>
                        <CountUpButton
                            onClick={() => onClickCountUp()}
                            // 数量が9以上だったら、カウントアップさせない
                            isDisabled={countNumber >= 9}
                        />
                    </CountItem>
                </CountersWrapper>
                <OrderButton onClick={() => onClickOrder()}>
                    <OrderTextWrapper>
                        <OrderButtonTextWrapper>
                            {`${countNumber}点を注文に追加`}
                        </OrderButtonTextWrapper>
                        <PriceWrapper>
                            {`¥${countNumber * menu.menu_price}`}
                        </PriceWrapper>
                    </OrderTextWrapper>
                </OrderButton>
            </DialogActions>
        </Dialog>
    );
};
