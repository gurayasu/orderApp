import React from "react";
import {
    DialogContent,
    Dialog,
    DialogTitle,
    DialogActions,
} from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

// components
import { SubText } from "./StyledText";
import { CountUpButton } from "./Buttons/CountUpButton";
import { CountDownButton } from "./Buttons/CountDownButton";
import { OrderButton } from "./Buttons/OrderButton";

// images
// import OrderHeaderImage from "https://drive.google.com/file/d/178GN_Miwr5jeDhuYyRE4q6xn914EZzUQ/view?usp=sharing";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

const OrderHeader = styled.img`
    width: 100%;
    height: auto;
`;

const DescriptionWrapper = styled.div`
    padding: 0 8px 8px 8px;
    height: 30px;
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

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const MenuOrderDialog = ({
    menu,
    countNumber,
    isOpen,
    onClose,
    onClickCountUp,
    onClickCountDown,
    onClickOrder,
    // onChangeSearch,
}) => {
    const classes = useStyles();

    return (
        <Dialog open={isOpen} onClose={onClose}>
            {/* <OrderHeader
                src={
                    "https://drive.google.com/uc?id=1pmKFeHJAfNzo4giW7voDQS5jYXHkKS8q"
                }
                alt="order header"
            /> */}
            <DialogTitle>{menu.menu_name}</DialogTitle>
            <DialogContent>
                <DescriptionWrapper>
                    <SubText>{menu.description}</SubText>
                </DescriptionWrapper>
            </DialogContent>
            {/* <DialogActions>
                <FormControl
                    className={classes.formControl}
                    margin-bottom="15px"
                >
                    <Typography variant="h12" component="h12">
                        テーブル番号選択
                    </Typography>
                    <Select
                        onChange={(e) => {
                            onChangeSearch(e);
                            console.log(e.target.value);
                        }}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={5}>6</MenuItem>
                        <MenuItem value={5}>7</MenuItem>
                    </Select>
                </FormControl>
            </DialogActions> */}
            {menu.alcohol == 3 && (
                <DialogActions>
                    <Typography variant="h6" component="h6">
                        {`料金：￥${menu.menu_price}`}
                    </Typography>
                </DialogActions>
            )}
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
                        {/* <PriceWrapper>
                            {`¥${countNumber * menu.menu_price}`}
                        </PriceWrapper> */}
                    </OrderTextWrapper>
                </OrderButton>
            </DialogActions>
        </Dialog>
    );
};
