import styled from "styled-components";

// components
import { BaseButton } from "../shared_style";

// constants
import { FONT_SIZE } from "../../style_constants";

// 関数コンポーネントではなく、styled-componentsで作った関数
// propsや関数が不要な場合にはこれだけでもOK
export const OrderButton = styled(BaseButton)`
    width: 160px;
    background-color: black;
    color: white;
    border-style: none;
    padding: 12px 8px;
    margin-bottom: 15px;
    font-size: ${FONT_SIZE.BODY1};
`;
