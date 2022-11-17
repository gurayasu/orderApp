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
import { OrderButton } from "./Buttons/OrderButton";
import Typography from "@material-ui/core/Typography";

const DescriptionWrapper = styled.div`
    padding: 0 8px 8px 8px;
    height: 30px;
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

export const OrderFinishDialog = (props) => {
    const { onClose, order_id, open } = props;
    console.log(order_id);

    return (
        <Dialog order_id={order_id} onClose={onClose} open={open}>
            <DialogTitle></DialogTitle>
            <DialogContent>
                <Typography variant="h12" component="h12">
                    注文完了しました！
                    <br />
                    カウンターまでお越しください😊
                </Typography>
                {/* <DescriptionWrapper>
                    <SubText>{`注文番号：${order_id}`}</SubText>
                    <SubText>{"カウンターまでお越しください😊"}</SubText>
                </DescriptionWrapper> */}
            </DialogContent>
            <DialogActions>
                <OrderButton onClick={() => onClose()}>
                    <OrderTextWrapper>
                        <OrderButtonTextWrapper>
                            {`閉じる`}
                        </OrderButtonTextWrapper>
                    </OrderTextWrapper>
                </OrderButton>
            </DialogActions>
        </Dialog>
    );
};
