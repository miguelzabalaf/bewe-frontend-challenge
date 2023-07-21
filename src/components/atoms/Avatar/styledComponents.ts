import styled from "styled-components";
import { colors } from "../../../common/colors";
import { AvatarControllerOutputProps } from "./types";

export const StyledAvatarWrapper = styled.img<AvatarControllerOutputProps>`
    display: flex;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: ${ colors.border };
`;