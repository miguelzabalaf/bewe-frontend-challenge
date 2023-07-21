import styled from "styled-components";
import { colors } from "../../../common/colors";

export const StyledTouchableIconWrapper = styled.button`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:active {
        background-color: ${ colors.hover };
    }
`;