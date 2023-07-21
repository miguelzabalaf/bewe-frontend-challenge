import styled from "styled-components";
import { colors } from "../../../common/colors";

export const StyledScreenWrapper = styled.div`
    border-width: 3px solid red;
    max-width: 900px;
    margin: 0 auto;
    background-color: red;
    height: 100%;
    background-color: ${ colors.white }
`;

export const StyledScreenContentWrapper = styled.div`
    overflow-y: scroll;
    height: 100%;
    padding: 16px 36px 36px;
`;